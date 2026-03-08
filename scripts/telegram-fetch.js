const fs = require("fs");
const path = require("path");
const https = require("https");

const TOKEN = process.env.TELEGRAM_TOKEN;
const NEWS_DIR = path.join(__dirname, "..", "src", "news");

async function fetchUpdates() {
  if (!TOKEN || TOKEN === "your_bot_token_here") {
    console.log("⚠️ TELEGRAM_TOKEN не настроен. Пропуск импорта.");
    return;
  }

  console.log("🔄 Подключение к Telegram API...");
  const url = `https://api.telegram.org/bot${TOKEN}/getUpdates?allowed_updates=["channel_post"]`;

  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          if (!json.ok) throw new Error(json.description);
          resolve(json.result || []);
        } catch (e) {
          reject(e);
        }
      });
    }).on("error", reject);
  });
}

function generateSlug(text) {
  return text.toLowerCase().replace(/[^a-zа-я0-9]+/g, '-').substring(0, 40).replace(/^-|-$/g, '');
}

async function main() {
  try {
    const updates = await fetchUpdates();
    if (!updates) return;

    let imported = 0;
    for (const update of updates) {
      if (!update.channel_post || !update.channel_post.text) continue;
      
      const post = update.channel_post;
      const date = new Date(post.date * 1000).toISOString().split('T')[0];
      const text = post.text;
      const title = text.split('\n')[0].substring(0, 60) + "...";
      const slug = `${date}-${generateSlug(title)}`;
      const filepath = path.join(NEWS_DIR, `${slug}.md`);

      if (!fs.existsSync(filepath)) {
        const content = `---
title: "${title.replace(/"/g, '\\"')}"
date: ${date}
description: "Импортировано из официального Telegram-канала."
tags: ["telegram", "новости"]
author: "ЦИК (Telegram)"
telegram_id: ${post.message_id}
draft: false
ai_enhanced: false
requires_review: true
chudo_notarized: false
chudo_tx_hash: null
chudo_notarized_at: null
---

${text}

*Оригинал опубликован в официальном канале Telegram.*
`;
        fs.writeFileSync(filepath, content);
        imported++;
        console.log(`✅ Импортирован пост: ${slug}`);
      }
    }
    console.log(`🎉 Импорт завершен. Новых статей: ${imported}`);
  } catch (error) {
    console.error("❌ Ошибка импорта Telegram:", error.message);
  }
}

main();
