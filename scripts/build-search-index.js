const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const NEWS_DIR = path.join(__dirname, "..", "src", "news");
const DATA_DIR = path.join(__dirname, "..", "src", "_data");
const OUTPUT_FILE = path.join(DATA_DIR, "search-index.json");

function buildIndex() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const files = fs.readdirSync(NEWS_DIR).filter(f => f.endsWith(".md"));
  const index = files.map(filename => {
    const content = fs.readFileSync(path.join(NEWS_DIR, filename), "utf8");
    const parsed = matter(content);
    
    // Пропускаем черновики в индексе
    if (parsed.data.draft) return null;

    return {
      title: parsed.data.title || "",
      date: parsed.data.date || "",
      description: parsed.data.description || "",
      tags: parsed.data.tags || [],
      url: `/news/${filename.replace(".md", "")}/`,
      content: parsed.content.replace(/(<([^>]+)>)/gi, "").substring(0, 1000)
    };
  }).filter(Boolean);

  // Атомарная запись (write-to-temp + rename) для защиты от гонок данных
  const tempPath = OUTPUT_FILE + ".tmp";
  fs.writeFileSync(tempPath, JSON.stringify(index));
  fs.renameSync(tempPath, OUTPUT_FILE);
  
  console.log(`Поисковый индекс успешно собран. Статей в индексе: ${index.length}`);
}

buildIndex();
