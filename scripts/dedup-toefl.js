import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toeflPath = path.join(__dirname, '../src/dictionaries/toefl.json');

const raw = fs.readFileSync(toeflPath, 'utf-8');
const data = JSON.parse(raw);

const seen = new Set();
let removed = 0;

for (const chapter of data.chapters) {
  const originalLen = chapter.words.length;
  chapter.words = chapter.words.filter((w) => {
    const key = w.name.toLowerCase().trim();
    if (seen.has(key)) {
      console.log(`Removing duplicate "${w.name}" from chapter ${chapter.id}`);
      return false;
    }
    seen.add(key);
    return true;
  });
  removed += originalLen - chapter.words.length;
}

data.totalWords -= removed;

fs.writeFileSync(toeflPath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
console.log(`\nRemoved ${removed} duplicates. New totalWords: ${data.totalWords}`);
