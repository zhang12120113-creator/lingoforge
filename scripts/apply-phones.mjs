import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DICTS_DIR = path.join(__dirname, '..', 'src', 'dictionaries');
const CACHE_PATH = path.join(__dirname, '..', 'reports', 'phone-cache.json');
const REPORTS_DIR = path.join(__dirname, '..', 'reports');

function hasPhone(word) {
  return (word.uk && String(word.uk).trim() !== '') ||
         (word.us && String(word.us).trim() !== '') ||
         (word.ukphone && String(word.ukphone).trim() !== '') ||
         (word.usphone && String(word.usphone).trim() !== '');
}

function getFieldNames(dictName) {
  if (dictName === 'cet4' || dictName === 'cet6' || dictName === 'cet4freq' || dictName === 'cet6freq') {
    return { uk: 'uk', us: 'us' };
  }
  return { uk: 'ukphone', us: 'usphone' };
}

if (!fs.existsSync(CACHE_PATH)) {
  console.error('❌ phone-cache.json not found. Run fetch-phones-youdao.mjs first.');
  process.exit(1);
}

const cache = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf-8')).results;
const dictFiles = fs.readdirSync(DICTS_DIR).filter(f => f.endsWith('.json'));

let totalFixed = 0;
const unresolved = [];

for (const file of dictFiles) {
  const filePath = path.join(DICTS_DIR, file);
  const dictName = path.basename(file, '.json');
  const fields = getFieldNames(dictName);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  let fixed = 0;

  if (data.chapters) {
    for (const chapter of data.chapters) {
      if (!chapter.words) continue;
      for (const word of chapter.words) {
        if (hasPhone(word)) continue;
        const key = word.name?.toLowerCase().trim();
        if (!key) continue;
        const cached = cache[key];
        if (cached && (cached.usphone || cached.ukphone)) {
          word[fields.us] = cached.usphone;
          word[fields.uk] = cached.ukphone;
          fixed++;
        } else {
          unresolved.push({ dict: dictName, word: word.name, chapter: chapter.id });
        }
      }
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  if (fixed > 0) {
    console.log(`✅ ${dictName}: fixed ${fixed} words`);
  }
  totalFixed += fixed;
}

console.log(`\n🎉 Total fixed: ${totalFixed}`);

if (unresolved.length > 0) {
  fs.writeFileSync(
    path.join(REPORTS_DIR, 'phones-unresolved.json'),
    JSON.stringify({ count: unresolved.length, words: unresolved }, null, 2)
  );
  console.log(`⚠️ Unresolved: ${unresolved.length} occurrences (saved to reports/phones-unresolved.json)`);
}
