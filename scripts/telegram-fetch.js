const fs = require('fs');
const path = require('path');

const CHANNEL = 'Z690002'; // Твой канал
const URL = `https://t.me/s/${CHANNEL}`;

async function fetchTelegram() {
    console.log(`📡 Ищу новости и видео в Telegram @${CHANNEL}...`);
    try {
        const response = await fetch(URL, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
        
        const html = await response.text();
        const posts = html.split('tgme_widget_message_bubble').slice(1);
        
        let count = 0;
        const newsDir = path.join(__dirname, '..', 'src', 'news');
        if (!fs.existsSync(newsDir)) fs.mkdirSync(newsDir, { recursive: true });

        for (const postHtml of posts) {
            const textMatch = postHtml.match(/<div class="tgme_widget_message_text[^>]*>(.*?)<\/div>/s);
            if (!textMatch) continue;

            let cleanText = textMatch[1].replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
            
            const ytMatch = cleanText.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
            let videoId = ytMatch ? ytMatch[1] : null;

            const imgMatch = postHtml.match(/background-image:url\('([^']+)'\)/);
            let imageUrl = imgMatch ? imgMatch[1] : (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null);

            let lines = cleanText.split('\n').filter(l => l.trim().length > 0);
            let title = lines.length > 0 ? lines[0].substring(0, 60) : "Новость";
            if (title.includes('http')) title = lines.length > 1 ? lines[1].substring(0, 60) : "📹 Новое видео";

            const dateMatch = postHtml.match(/<time datetime="([^"]+)"/);
            const dateStr = dateMatch ? new Date(dateMatch[1]).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
            
            const linkMatch = postHtml.match(/<a class="tgme_widget_message_date" href="([^"]+)"/);
            const postLink = linkMatch ? linkMatch[1] : `https://t.me/${CHANNEL}`;
            const postId = postLink.split('/').pop() || Math.floor(Math.random()*1000);
            
            const filePath = path.join(newsDir, `${dateStr}-tg-${postId}.md`);

            if (!fs.existsSync(filePath)) {
                let mdContent = `---\ntitle: "${title.replace(/"/g, '')}"\ndescription: "${cleanText.substring(0, 150).replace(/\n/g, ' ').replace(/"/g, '')}..."\ndate: ${dateStr}\ntags: ["news"]\nsource_link: "${postLink}"\n`;
                if (imageUrl) mdContent += `image: "${imageUrl}"\n`;
                if (videoId) mdContent += `video_id: "${videoId}"\n`;
                mdContent += `---\n\n${cleanText}\n`;

                fs.writeFileSync(filePath, mdContent, 'utf8');
                console.log(`✅ Скачано: ${title}`);
                count++;
            }
        }
        console.log(`\n🎉 Готово! Новых постов: ${count}`);
    } catch (err) {
        console.error("❌ Ошибка:", err.message);
    }
}
fetchTelegram();
