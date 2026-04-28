import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DICTS_DIR = path.join(__dirname, '..', 'src', 'dictionaries');
const DICT_DATA_DIR = path.join(__dirname, 'dict-data');
const REPORTS_DIR = path.join(__dirname, '..', 'reports');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function hasPhone(word) {
  return (word.uk && String(word.uk).trim() !== '') ||
         (word.us && String(word.us).trim() !== '') ||
         (word.ukphone && String(word.ukphone).trim() !== '') ||
         (word.usphone && String(word.usphone).trim() !== '');
}

function getFieldNames(dictName) {
  // cet4 and cet6 use uk/us; others use ukphone/usphone
  if (dictName === 'cet4' || dictName === 'cet6' || dictName === 'cet4freq' || dictName === 'cet6freq') {
    return { uk: 'uk', us: 'us' };
  }
  return { uk: 'ukphone', us: 'usphone' };
}

function loadDictData(fileName) {
  const filePath = path.join(DICT_DATA_DIR, fileName);
  if (!fs.existsSync(filePath)) return null;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const map = new Map();
  if (Array.isArray(data)) {
    data.forEach(item => {
      if (item.word) {
        map.set(item.word.toLowerCase().trim(), {
          us: item.us || '',
          uk: item.uk || ''
        });
      }
    });
  }
  return map;
}

function loadDictionary(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function saveDictionary(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Step 1: Build local phone maps from dict-data
console.log('📦 Loading local dict-data...');
const cet4Map = loadDictData('cet4.json');
const cet6Map = loadDictData('cet6.json');
console.log(`  dict-data/cet4.json: ${cet4Map?.size || 0} words`);
console.log(`  dict-data/cet6.json: ${cet6Map?.size || 0} words`);

// Step 2: Load all dictionaries
const dictFiles = fs.readdirSync(DICTS_DIR).filter(f => f.endsWith('.json'));
const dictionaries = [];
for (const file of dictFiles) {
  const filePath = path.join(DICTS_DIR, file);
  const dictName = path.basename(file, '.json');
  dictionaries.push({
    name: dictName,
    filePath,
    data: loadDictionary(filePath)
  });
}

// Step 3: Apply local dict-data phonetics
let localFixed = 0;
for (const dict of dictionaries) {
  const fields = getFieldNames(dict.name);
  if (!dict.data.chapters) continue;
  for (const chapter of dict.data.chapters) {
    if (!chapter.words) continue;
    for (const word of chapter.words) {
      if (hasPhone(word)) continue;
      const key = word.name?.toLowerCase().trim();
      if (!key) continue;
      const raw = dict.name.startsWith('cet4') ? cet4Map?.get(key) : (dict.name.startsWith('cet6') ? cet6Map?.get(key) : (cet4Map?.get(key) || cet6Map?.get(key)));
      if (raw && (raw.us || raw.uk)) {
        word[fields.us] = raw.us;
        word[fields.uk] = raw.uk;
        localFixed++;
      }
    }
  }
}
console.log(`✅ Local dict-data fixed: ${localFixed} words`);

// Step 4: Build cross-dictionary phone cache
const phoneCache = new Map();
for (const dict of dictionaries) {
  if (!dict.data.chapters) continue;
  for (const chapter of dict.data.chapters) {
    if (!chapter.words) continue;
    for (const word of chapter.words) {
      if (!hasPhone(word)) continue;
      const key = word.name.toLowerCase().trim();
      if (!phoneCache.has(key)) {
        phoneCache.set(key, {
          us: word.us || word.usphone || '',
          uk: word.uk || word.ukphone || ''
        });
      }
    }
  }
}
console.log(`🔗 Cross-dict phone cache built: ${phoneCache.size} words`);

// Step 5: Apply cross-dictionary phonetics
let crossFixed = 0;
for (const dict of dictionaries) {
  const fields = getFieldNames(dict.name);
  if (!dict.data.chapters) continue;
  for (const chapter of dict.data.chapters) {
    if (!chapter.words) continue;
    for (const word of chapter.words) {
      if (hasPhone(word)) continue;
      const key = word.name?.toLowerCase().trim();
      if (!key) continue;
      const cached = phoneCache.get(key);
      if (cached && (cached.us || cached.uk)) {
        word[fields.us] = cached.us;
        word[fields.uk] = cached.uk;
        crossFixed++;
      }
    }
  }
}
console.log(`✅ Cross-dictionary fixed: ${crossFixed} words`);

// Step 6: Save all modified dictionaries
let savedCount = 0;
for (const dict of dictionaries) {
  saveDictionary(dict.filePath, dict.data);
  savedCount++;
}
console.log(`💾 Saved ${savedCount} dictionaries`);

// Step 7: Collect remaining missing phones for API fetch
const missingWords = new Map(); // wordLower -> {name, count, dicts: []}
for (const dict of dictionaries) {
  if (!dict.data.chapters) continue;
  for (const chapter of dict.data.chapters) {
    if (!chapter.words) continue;
    for (const word of chapter.words) {
      if (hasPhone(word)) continue;
      const key = word.name?.toLowerCase().trim();
      if (!key) continue;
      if (!missingWords.has(key)) {
        missingWords.set(key, { name: word.name, count: 0, dicts: [] });
      }
      const entry = missingWords.get(key);
      entry.count++;
      if (!entry.dicts.includes(dict.name)) entry.dicts.push(dict.name);
    }
  }
}

const missingList = Array.from(missingWords.keys()).sort();
ensureDir(REPORTS_DIR);
fs.writeFileSync(
  path.join(REPORTS_DIR, 'need-api-phones.json'),
  JSON.stringify({
    totalUnique: missingList.length,
    totalOccurrences: Array.from(missingWords.values()).reduce((s, v) => s + v.count, 0),
    words: Object.fromEntries(missingWords)
  }, null, 2)
);
console.log(`\n📋 Remaining missing phones: ${missingList.length} unique words (${Array.from(missingWords.values()).reduce((s, v) => s + v.count, 0)} total occurrences)`);
console.log(`   Saved to: reports/need-api-phones.json`);
