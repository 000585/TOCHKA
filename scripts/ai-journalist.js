const fs = require('fs');
const path = require('path');
const https = require('https');
const matter = require('gray-matter');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const NEWS_DIR = path.join(__dirname, '..', 'src', 'news');
const DRAFT_SUFFIX = '.ai-draft';

function readArticle(filename) {
  return fs.readFileSync(path.join(NEWS_DIR, filename), 'utf8');
}

function saveDraft(filename, originalData, enhancedContent, factCheck) {
  const draftFilename = filename.replace('.md', DRAFT_SUFFIX + '.md');
  const filepath = path.join(NEWS_DIR, draftFilename);
  if (fs.existsSync(filepath)) { console.log(`  Draft exists: ${draftFilename}`); return null; }
  const draftData = { ...originalData, title: originalData.title + ' (AI Enhanced)', ai_enhanced: true, ai_model: 'gpt-4', ai_date: new Date().toISOString(), draft: true, original_file: filename, requires_review: true, fact_check: { status: factCheck.status, confidence: factCheck.confidence, discrepancies: factCheck.discrepancies, verified_facts: factCheck.verifiedFacts, hallucination_risk: factCheck.hallucinationRisk }};
  const lines = ['---'];
  for (const [key, value] of Object.entries(draftData)) {
    if (key === 'fact_check') { lines.push('fact_check:');
      for (const [fk, fv] of Object.entries(value)) { if (Array.isArray(fv)) { lines.push(`  ${fk}:`);
        fv.forEach(i => lines.push(`    - "${i}"`)); } else lines.push(`  ${fk}: ${typeof fv === 'string' ? `"${fv}"` : fv}`);
      } }
    else if (Array.isArray(value)) lines.push(`${key}: [${value.map(v => `"${v}"`).join(', ')}]`);
    else if (typeof value === 'boolean') lines.push(`${key}: ${value}`);
    else lines.push(`${key}: "${String(value).replace(/"/g, '\\"')}"`);
  }
  lines.push('---');
  const content = lines.join('\n') + '\n\n' + enhancedContent;
  const tempPath = filepath + '.tmp';
  fs.writeFileSync(tempPath, content);
  fs.renameSync(tempPath, filepath);
  return draftFilename;
}

function extractClaims(text) {
  const claims = [];
  const datePattern = /\b(\d{1,2}[.\/]\d{1,2}[.\/]\d{2,4}|\d{1,2}\s+(января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря)\s+\d{4})\b/gi;
  let match;
  while ((match = datePattern.exec(text)) !== null) claims.push({ type: 'date', value: match[0], context: text.substring(Math.max(0, match.index - 30), match.index + 30) });
  const namePattern = /\b([А-Я][а-я]+\s+[А-Я][а-я]+(?:\s+[А-Я][а-я]+)?)\b/g;
  while ((match = namePattern.exec(text)) !== null) if (match[0].length > 5) claims.push({ type: 'name', value: match[0], context: text.substring(Math.max(0, match.index - 20), match.index + 20) });
  const numberPattern = /\b(\d+(?:[.,]\d+)?\s*(?:млн|млрд|тыс|процент|%|человек|год|€|$|руб))\b/gi;
  while ((match = numberPattern.exec(text)) !== null) claims.push({ type: 'number', value: match[0], context: text.substring(Math.max(0, match.index - 20), match.index + 20) });
  return claims;
}

async function verifyFacts(originalText, enhancedText, claims) {
  if (!OPENAI_API_KEY || claims.length === 0) return { status: 'unverified', confidence: 0, discrepancies: [], verifiedFacts: [], hallucinationRisk: 'unknown' };
  const prompt = `Сравни два текста и проверь факты. Определи: 1) Есть ли противоречия, 2) Добавлены ли факты не из оригинала (галлюцинации), 3) Изменены ли даты/имена/цифры.\n\nОРИГИНАЛ:\n${originalText.substring(0, 1000)}\n\nУЛУЧШЕННЫЙ:\n${enhancedText.substring(0, 1000)}\n\nФакты для проверки:\n${claims.map(c => `- ${c.type}: "${c.value}"`).join('\n')}\n\nОтветь СТРОГО в JSON:\n{"discrepancies": [], "added_facts": [], "confidence": 0.85, "hallucination_risk": "low|medium|high"}`;
  try {
    const result = await callOpenAI(prompt, 0.1);
    const parsed = JSON.parse(result);
    return { status: parsed.discrepancies.length === 0 && parsed.added_facts.length === 0 ? 'verified' : 'needs_review', confidence: parsed.confidence || 0.5, discrepancies: parsed.discrepancies || [], verifiedFacts: claims.map(c => c.value), hallucinationRisk: parsed.hallucination_risk || 'unknown' };
  } catch (err) { return { status: 'error', confidence: 0, discrepancies: ['Fact-check failed: ' + err.message], verifiedFacts: [], hallucinationRisk: 'unknown' }; }
}

async function callOpenAI(prompt, temperature = 0.3, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const data = JSON.stringify({ model: 'gpt-4', messages: [{ role: 'user', content: prompt }], temperature: temperature, max_tokens: 2000 });
      const result = await new Promise((resolve, reject) => {
        const req = https.request({ hostname: 'api.openai.com', path: '/v1/chat/completions', method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Length': data.length }, timeout: 60000 }, (res) => {
          let response = '';
          res.on('data', chunk => response += chunk);
          res.on('end', () => { try { const parsed = JSON.parse(response); if (parsed.error) reject(new Error(parsed.error.message)); else resolve(parsed.choices[0].message.content); } catch (e) { reject(e); } });
        });
        req.on('error', reject);
        req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
        req.write(data);
        req.end();
      });
      return result;
    } catch (error) {
      console.log(`  Attempt ${attempt} failed: ${error.message}`);
      if (attempt === retries) throw error;
      await new Promise(r => setTimeout(r, 2000 * attempt));
    }
  }
}

async function enhanceWithAI(text) {
  if (!OPENAI_API_KEY) { console.log('OPENAI_API_KEY not set'); return null; }
  const prompt = `Ты профессиональный редактор. Улучши новость, сохраняя ВСЕ факты точно:\n1. Проверь факты, не добавляй от себя\n2. Улучши структуру: введение, развитие, заключение\n3. Добавь подзаголовки H2\n4. Нейтральный официальный тон\n5. Длина: 400-800 слов\n6. Не меняй даты, имена, цифры\n\nТекст:\n${text}\n\nОтветь только улучшенным текстом.`;
  return await callOpenAI(prompt, 0.3);
}

async function main() {
  const files = fs.readdirSync(NEWS_DIR).filter(f => {
    if (!f.endsWith('.md') || f.includes(DRAFT_SUFFIX)) return false;
    try { const content = fs.readFileSync(path.join(NEWS_DIR, f), 'utf8'); const parsed = matter(content); return parsed.data.draft === true && parsed.data.ai_enhanced !== true && parsed.data.ai_enhanced !== 'queued'; } catch (err) { return false; }
  });
  console.log(`Found ${files.length} drafts to enhance`);
  for (const filename of files) {
    console.log(`Processing: ${filename}`);
    try {
      const content = readArticle(filename);
      const parsed = matter(content);
      console.log('  Extracting facts...');
      const claims = extractClaims(parsed.content);
      console.log(`  Found ${claims.length} claims`);
      console.log('  Enhancing with AI...');
      const enhanced = await enhanceWithAI(parsed.content);
      if (!enhanced) continue;
      console.log('  Verifying facts...');
      const factCheck = await verifyFacts(parsed.content, enhanced, claims);
      console.log(`  Fact-check: ${factCheck.status} (confidence: ${factCheck.confidence})`);
      if (factCheck.discrepancies.length > 0) factCheck.discrepancies.forEach(d => console.log(`    - ${d}`));
      const draftFilename = save saveDraft(filename, parsed.data, enhanced, factCheck);
      if (!draftFilename) continue;
      console.log(`  Created: ${draftFilename}, Risk: ${factCheck.hallucinationRisk}`);
      fs.writeFileSync(path.join(NEWS_DIR, filename), content.replace('ai_enhanced: false', 'ai_enhanced: queued'));
      await new Promise(r => setTimeout(r, 1500));
    } catch (error) { console.error(`  Failed: ${error.message}`); }
  }
}

main().catch(console.error);
