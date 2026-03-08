const https = require('https');
const MAX_RETRIES = 3;
const RETRY_DELAY = 2000;

async function triggerBuildHook(url, attempt = 1) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { timeout: 10000 }, (res) => {
      if (res.statusCode === 200 || res.statusCode === 202) resolve({ success: true, statusCode: res.statusCode });
      else reject(new Error(`Build hook returned ${res.statusCode}`));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  const BUILD_HOOK = process.env.NETLIFY_BUILD_HOOK;
  const SECRET_TOKEN = process.env.TELEGRAM_SECRET;
  const authHeader = event.headers['x-telegram-bot-api-secret-token'];
  if (SECRET_TOKEN && authHeader !== SECRET_TOKEN) return { statusCode: 401, body: JSON.stringify({ error: 'Unauthorized' }) };
  try {
    const update = JSON.parse(event.body);
    if (update.channel_post) {
      const message = update.channel_post;
      const channelUsername = message.chat?.username;
      const expectedChannel = (process.env.TELEGRAM_CHANNEL || '@cik_news').replace('@', '');
      if (channelUsername !== expectedChannel) return { statusCode: 200, body: JSON.stringify({ ok: true, ignored: 'wrong_channel' }) };
      if (!message.message_id || !message.date) return { statusCode: 400, body: JSON.stringify({ error: 'Invalid message structure' }) };
      console.log('New post:', { id: message.message_id, date: new Date(message.date * 1000).toISOString() });
      if (BUILD_HOOK) {
        let lastError = null;
        for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
          try {
            console.log(`Build hook attempt ${attempt}/${MAX_RETRIES}...`);
            const result = await triggerBuildHook(BUILD_HOOK);
            console.log('Build triggered:', result);
            return { statusCode: 200, body: JSON.stringify({ ok: true, build_triggered: true, attempt: attempt, message_id: message.message_id }) };
          } catch (err) {
            lastError = err;
            console.error(`Attempt ${attempt} failed:`, err.message);
            if (attempt < MAX_RETRIES) { const delay = RETRY_DELAY * attempt; console.log(`Waiting ${delay}ms...`);
            await new Promise(r => setTimeout(r, delay)); }
          }
        }
        console.error('All attempts failed');
        return { statusCode: 502, body: JSON.stringify({ ok: false, error: 'Build trigger failed', details: lastError?.message, message_id: message.message_id }) };
      }
      return { statusCode: 200, body: JSON.stringify({ ok: true, build_triggered: false, message_id: message.message_id }) };
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true, type: 'ignored' }) };
  } catch (error) {
    console.error('Webhook error:', error);
    return { statusCode: 400, body: JSON.stringify({ error: error.message }) };
  }
};
