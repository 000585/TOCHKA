const fs = require('fs');
const path = require('path');

const CHANNEL = 'Z690002';
const URL = `https://t.me/s/${CHANNEL}`;

async function fetchTelegram() {
    console.log(`📡 Подключаюсь к Telegram @${CHANNEL} и ищу видео...`);

    try {
        const response = await fetch(URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
        const html = await response.text();
        const posts = html.split('tgme_widget_message_bubble').slice(1);
        
        let count = 0;
        const newsDir = path.join(__dirname, 'src', 'news');
        if (!fs.existsSync(newsDir)) fs.mkdirSync(newsDir, { recursive: true });

        for (const postHtml of posts) {
            const textMatch = postHtml.match(/<div class="tgme_widget_message_text[^>]*>(.*?)<\/div>/s);
            if (!textMatch) continue;

            let rawText = textMatch[1];
            let cleanText = rawText.replace(/<br\s*\/?>/gi, '\n')
                                   .replace(/<[^>]+>/g, '')
                                   .replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

            // --- МАГИЯ YOUTUBE ---
            const ytRegex = /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
            const ytMatch = cleanText.match(ytRegex);
            let videoId = ytMatch ? ytMatch[1] : null;

            // Ищем картинку Telegram
            const imgMatch = postHtml.match(/background-image:url\('([^']+)'\)/);
            let imageUrl = imgMatch ? imgMatch[1] : null;

            // Если картинки в ТГ нет, но есть YouTube - берем превью видео
            if (!imageUrl && videoId) {
                imageUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            } else if (!imageUrl) {
                imageUrl = "https://via.placeholder.com/800x450/111111/FFD700?text=NEWS+PLATFORM";
            }

            // Умный заголовок
            let lines = cleanText.split('\n').filter(l => l.trim().length > 0);
            let title = "Новость из Telegram";
            
            if (lines.length > 0) {
                // Если первая строка - ссылка, берем вторую для заголовка
                if (lines[0].includes('http') && lines.length > 1) {
                    title = lines[1].substring(0, 60);
                } else {
                    title = lines[0].substring(0, 60);
                }
            }
            if (videoId && !title.includes("Видео")) title = "📹 " + title;

            // Ссылка и дата
            const linkMatch = postHtml.match(/<a class="tgme_widget_message_date" href="([^"]+)"/);
            const postLink = linkMatch ? linkMatch[1] : `https://t.me/${CHANNEL}`;
            const dateMatch = postHtml.match(/<time datetime="([^"]+)"/);
            let pubDate = dateMatch ? new Date(dateMatch[1]) : new Date();
            
            const dateStr = pubDate.toISOString().split('T')[0];
            const postId = postLink.match(/\/(\d+)(?:\?|$)/)?.[1] || Math.floor(Math.random() * 10000);
            const fileName = `${dateStr}-tg-${postId}.md`;
            const filePath = path.join(newsDir, fileName);

            if (!fs.existsSync(filePath)) {
                const safeTitleYAML = title.replace(/"/g, '\\"').trim();
                const safeDescYAML = cleanText.substring(0, 150).replace(/\n/g, ' ').replace(/"/g, '\\"').trim() + '...';

                const mdContent = `---
title: "${safeTitleYAML}"
description: "${safeDescYAML}"
date: ${dateStr}
tags: ["news", "Лента"]
source_link: "${postLink}"
image: "${imageUrl}"
video_id: "${videoId || ''}"
---

${cleanText}

${videoId ? `[Смотреть видео на YouTube](https://www.youtube.com/watch?v=${videoId})` : ''}
[Читать оригинал в Telegram](${postLink})
`;
                fs.writeFileSync(filePath, mdContent, 'utf8');
                console.log(`✅ Добавлено: ${safeTitleYAML}`);
                count++;
            }
        }
        console.log(`\n🎉 Готово! Новых постов: ${count}`);
    } catch (error) {
        console.error("❌ Ошибка:", error.message);
    }
}
fetchTelegram();