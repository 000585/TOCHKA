const fs = require('fs');
const path = require('path');
const https = require('https');

const INDEX_PATH = path.join(__dirname, '..', 'src', '_data', 'search-index.json');
const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const rateLimits = new Map();
const RATE_LIMIT_WINDOW = 60;
const RATE_LIMIT_MAX = 30;
let searchIndex = null;
let indexLoadTime = 0;

async function redisCommand(command, ...args) {
  if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) return null;
  try {
    const response = await new Promise((resolve, reject) => {
      const data = JSON.stringify([command, ...args]);
      const req = https.request(`${UPSTASH_REDIS_REST_URL}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${UPSTASH_REDIS_REST_TOKEN}`, 'Content-Type': 'application/json' },
        timeout: 500
      }, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => { try { resolve(JSON.parse(body)); } catch (e) { reject(e); } });
      });
      req.on('error', reject);
      req.on('timeout', () => { req.destroy(); reject(new Error('Redis timeout')); });
      req.write(data);
      req.end();
    });
    return response.result;
  } catch (err) { console.log('Redis error:', err.message); return null; }
}

async function checkRateLimit(clientId) {
  const key = `ratelimit:search:${clientId}`;
  const now = Math.floor(Date.now() / 1000);
  const windowStart = now - RATE_LIMIT_WINDOW;
  const redisResult = await redisCommand('ZREMRANGEBYSCORE', key, 0, windowStart);
  if (redisResult !== null) {
    const count = await redisCommand('ZCARD', key);
    if (count >= RATE_LIMIT_MAX) return { allowed: false, remaining: 0, reset: RATE_LIMIT_WINDOW };
    await redisCommand('ZADD', key, now, `${now}-${Math.random()}`);
    await redisCommand('EXPIRE', key, RATE_LIMIT_WINDOW);
    return { allowed: true, remaining: RATE_LIMIT_MAX - count - 1, reset: RATE_LIMIT_WINDOW };
  }
  if (!rateLimits.has(clientId)) rateLimits.set(clientId, []);
  const requests = rateLimits.get(clientId).filter(time => time > windowStart);
  if (requests.length >= RATE_LIMIT_MAX) return { allowed: false, remaining: 0, reset: RATE_LIMIT_WINDOW };
  requests.push(now);
  rateLimits.set(clientId, requests);
  return { allowed: true, remaining: RATE_LIMIT_MAX - requests.length, reset: RATE_LIMIT_WINDOW };
}

function loadIndex() {
  try {
    const stats = fs.statSync(INDEX_PATH);
    if (!searchIndex || stats.mtimeMs > indexLoadTime) {
      searchIndex = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'));
      indexLoadTime = stats.mtimeMs;
    }
    return searchIndex;
  } catch (err) { return []; }
}

function searchArticles(query, index) {
  const lowerQuery = query.toLowerCase().trim();
  const terms = lowerQuery.split(/\s+/).filter(t => t.length >= 2);
  if (terms.length === 0) return [];
  return index.map(article => {
    let score = 0;
    const titleLower = (article.title || '').toLowerCase();
    const contentLower = (article.content || '').toLowerCase();
    terms.forEach(term => {
      if (titleLower.includes(term)) score += 10;
      if (contentLower.includes(term)) score += 1;
      (article.tags || []).forEach(tag => { if (tag.toLowerCase().includes(term)) score += 5; });
    });
    if (titleLower.includes(lowerQuery)) score += 20;
    if (contentLower.includes(lowerQuery)) score += 5;
    
    return { article, score };
  }).filter(result => result.score > 0).sort((a, b) => b.score - a.score).slice(0, 20).map(result => ({
    title: result.article.title, description: result.article.description, url: result.article.url,
    date: result.article.date, tags: result.article.tags
  }));
}

exports.handler = async (event, context) => {
  const headers = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type', 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=60' };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };
  const clientId = event.headers['client-ip'] || event.headers['x-forwarded-for'] || 'unknown';
  const rateLimit = await checkRateLimit(clientId);
  headers['X-RateLimit-Limit'] = String(RATE_LIMIT_MAX);
  headers['X-RateLimit-Remaining'] = String(rateLimit.remaining);
  headers['X-RateLimit-Reset'] = String(rateLimit.reset);
  if (!rateLimit.allowed) return { statusCode: 429, headers: { ...headers, 'Retry-After': String(rateLimit.reset) }, body: JSON.stringify({ error: 'Rate limit exceeded', retry_after: rateLimit.reset }) };
  try {
    const params = new URLSearchParams(event.queryStringParameters);
    const query = params.get('q');
    if (!query || query.length < 2) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Query too short' }) };
    if (query.length > 100) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Query too long' }) };
    const index = loadIndex();
    if (index.length === 0) return { statusCode: 503, headers, body: JSON.stringify({ error: 'Search index not available' }) };
    const startTime = Date.now();
    const results = searchArticles(query, index);
    return { statusCode: 200, headers, body: JSON.stringify({ query, count: results.length, total: index.length, searchTimeMs: Date.now() - startTime, results }) };
  } catch (error) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal server error' }) };
  }
};
