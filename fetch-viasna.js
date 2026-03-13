const fs = require('fs');
const path = require('path');

// Используем публичный прокси-сервис для обхода защиты 403 Forbidden
const RSS_URL = 'https://spring96.org/ru/rss';
const PROXY_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

async function fetchNews() {
    console.log('📡 Подключаюсь через прокси для обхода блокировок...');
    
    try {
        const response = await fetch(PROXY_URL);
        
        if (!response.ok) {
             throw new Error(`Прокси вернул ошибку: ${response.status}`);
        }
        
        const data = await response.json();
        
        if(data.status !== 'ok' || !data.items || data.items.length === 0) {
            console.log('❌ Новостей не найдено или прокси не смог пробить защиту.');
            return;
        }

        let count = 0;
        const newsDir = path.join(__dirname, 'src', 'news');
        
        if (!fs.existsSync(newsDir)){
            fs.mkdirSync(newsDir, { recursive: true });
        }

        for (const item of data.items) {
            // rss2json уже любезно разобрал для нас все данные!
            const title = item.title.replace(/"/g, '\\"').trim();
            const link = item.link.trim();
            
            // Очищаем описание от HTML
            let desc = item.description || "";
            desc = desc.replace(/(<([^>]+)>)/gi, "").trim(); 
            desc = desc.replace(/"/g, '\\"');

            // Преобразуем дату
            const pubDate = new Date(item.pubDate);
            const year = pubDate.getFullYear();
            const month = String(pubDate.getMonth() + 1).padStart(2, '0');
            const day = String(pubDate.getDate()).padStart(2, '0');
            const dateStr = `${year}-${month}-${day}`;
            
            let safeTitle = title.toLowerCase().replace(/[^a-zа-я0-9]+/g, '-').slice(0, 40);
            const fileName = `${dateStr}-viasna-${safeTitle}.md`;
            const filePath = path.join(newsDir, fileName);

            if (!fs.existsSync(filePath)) {
                const mdContent = `---
title: "${title}"
description: "${desc}"
date: ${dateStr}
tags: ["news", "viasna", "Расследования"]
source_link: "${link}"
image: "https://via.placeholder.com/800x450/111111/FFD700?text=Viasna+News"
---

${desc}

[Читать полную статью в источнике](${link})
`;
                fs.writeFileSync(filePath, mdContent, 'utf8');
                console.log(`✅ Добавлено: ${title.slice(0, 50)}...`);
                count++;
            }
        }
        
        if (count > 0) {
            console.log(`\n🎉 Успешно скачано новых статей: ${count}`);
        } else {
            console.log(`\n🤷‍♂️ Новых статей пока нет.`);
        }

    } catch (error) {
        console.error("❌ Ошибка:", error.message);
    }
}

fetchNews();