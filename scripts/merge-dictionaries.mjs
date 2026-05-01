import fs from 'fs';
import readline from 'readline';
import path from 'path';

const DICT_DIR = 'src/dictionaries';
const DATA_DIR = './scripts';

function readExistingDict(dictId) {
  const file = path.join(DICT_DIR, `${dictId}.json`);
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const words = [];
  for (const ch of data.chapters || []) {
    for (const w of ch.words || []) {
      if (w.name) words.push(w);
    }
  }
  return words;
}

function readKajwebJsonl(dir) {
  const file = path.join(DATA_DIR, dir, `${dir}.json`);
  if (!fs.existsSync(file)) return [];
  const words = [];
  const lines = fs.readFileSync(file, 'utf8').trim().split(/\r?\n/);
  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      const obj = JSON.parse(line);
      const word = obj.headWord || obj.content?.word?.wordHead;
      const content = obj.content?.word?.content;
      if (!word || !content) continue;
      const usphone = content.usphone || content.phone || '';
      const ukphone = content.ukphone || '';
      const trans = [];
      if (content.trans) {
        for (const t of content.trans) {
          if (t.tranCn) trans.push(t.tranCn);
        }
      }
      if (trans.length === 0) continue;
      words.push({ name: word.toLowerCase(), usphone, ukphone, trans });
    } catch {}
  }
  return words;
}

function readNetem() {
  const file = path.join(DATA_DIR, 'netem.json');
  if (!fs.existsSync(file)) return [];
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const key = Object.keys(data)[0];
  const arr = data[key] || [];
  const words = [];
  for (const item of arr) {
    const word = item['单词'];
    const trans = item['释义'];
    if (!word || !trans) continue;
    words.push({ name: word.toLowerCase(), usphone: '', ukphone: '', trans: [trans] });
  }
  return words;
}

function readEcdictExtra(fileName) {
  const file = path.join(DATA_DIR, fileName);
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

// Build phonetic lookup from ECDICT for words missing phonetics
function buildPhoneticLookup() {
  const lookup = new Map();
  const file = path.join(DATA_DIR, 'ecdict.csv');
  if (!fs.existsSync(file)) return lookup;
  const lines = fs.readFileSync(file, 'utf8').trim().split(/\r?\n/);
  const header = lines[0].split(',');
  const wordIdx = header.indexOf('word');
  const phoneticIdx = header.indexOf('phonetic');
  const transIdx = header.indexOf('translation');
  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(',');
    const word = parts[wordIdx];
    if (!word) continue;
    const phonetic = parts[phoneticIdx] || '';
    const translation = parts[transIdx] || '';
    lookup.set(word.toLowerCase(), { phonetic, translation });
  }
  return lookup;
}

function mergeWords(dictId, sources, existingWords, phoneticLookup) {
  const merged = new Map();

  // Add existing words first (they have best data quality)
  for (const w of existingWords) {
    merged.set(w.name.toLowerCase(), { ...w });
  }
  const existingCount = merged.size;
  let added = 0;

  for (const source of sources) {
    for (const w of source) {
      const key = w.name.toLowerCase();
      const existing = merged.get(key);
      if (existing) {
        // Merge translations
        const allTrans = new Set([...existing.trans, ...w.trans]);
        existing.trans = [...allTrans];
        // Fill missing phonetics
        if (!existing.usphone && w.usphone) existing.usphone = w.usphone;
        if (!existing.ukphone && w.ukphone) existing.ukphone = w.ukphone;
      } else {
        added++;
        // Look up phonetics from ECDICT if missing
        const lookup = phoneticLookup.get(key);
        if (lookup) {
          if (!w.usphone) w.usphone = lookup.phonetic;
          if (!w.trans || w.trans.length === 0) w.trans = [lookup.translation];
        }
        merged.set(key, { name: w.name, usphone: w.usphone, ukphone: w.ukphone, trans: w.trans });
      }
    }
  }

  console.log(`  ${dictId}: existing=${existingCount}, added=${added}, total=${merged.size}`);
  return [...merged.values()];
}

function splitIntoChapters(words, wordsPerChapter = 25) {
  const chapters = [];
  let id = 1;
  for (let i = 0; i < words.length; i += wordsPerChapter) {
    const chunk = words.slice(i, i + wordsPerChapter);
    chapters.push({
      id,
      name: `第 ${id} 章`,
      words: chunk,
    });
    id++;
  }
  return chapters;
}

function writeDict(dictId, name, description, category, words) {
  const chapters = splitIntoChapters(words);
  const data = {
    id: dictId,
    name,
    description,
    category,
    totalChapters: chapters.length,
    chapters,
    totalWords: words.length,
  };
  const file = path.join(DICT_DIR, `${dictId}.json`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
  console.log(`${dictId}: ${words.length} words, ${chapters.length} chapters -> ${file}`);
}

// ====== Main ======

const phoneticLookup = buildPhoneticLookup();
console.log('ECDICT phonetic lookup size:', phoneticLookup.size);

// --- TEM4 ---
const tem4Existing = readExistingDict('tem4');
const tem4Kajweb = readKajwebJsonl('Level4luan_2');
const tem8Kajweb = readKajwebJsonl('Level8luan_2');
console.log(`tem4 existing: ${tem4Existing.length}, Level4 source: ${tem4Kajweb.length}, Level8 source: ${tem8Kajweb.length}`);
const tem4Merged = mergeWords('tem4', [tem4Kajweb, tem8Kajweb], tem4Existing, phoneticLookup);
writeDict('tem4', '英语专四', '英语专业四级考试核心词汇', '英语专四', tem4Merged);

// --- IELTS ---
const ieltsExisting = readExistingDict('ielts');
const ieltsKajweb1 = readKajwebJsonl('IELTSluan_2');
const ieltsKajweb2 = readKajwebJsonl('IELTS_2');
const ieltsKajweb3 = readKajwebJsonl('IELTS_3');
const ieltsEcdictExtra = readEcdictExtra('ecdict-ielts-extra.json');
console.log(`ielts ECDICT extra: ${ieltsEcdictExtra.length}`);
const ieltsMerged = mergeWords('ielts', [ieltsKajweb1, ieltsKajweb2, ieltsKajweb3, ieltsEcdictExtra], ieltsExisting, phoneticLookup);
writeDict('ielts', '雅思词汇', '雅思考试核心词汇', '雅思', ieltsMerged);

// --- TOEFL ---
const toeflExisting = readExistingDict('toefl');
const toeflKajweb1 = readKajwebJsonl('TOEFL_2');
const toeflKajweb2 = readKajwebJsonl('TOEFL_3');
const toeflMerged = mergeWords('toefl', [toeflKajweb1, toeflKajweb2], toeflExisting, phoneticLookup);
writeDict('toefl', '托福词汇', '托福考试核心词汇', '托福', toeflMerged);

// --- Postgraduate ---
const pgExisting = readExistingDict('postgraduate');
const pgKajweb1 = readKajwebJsonl('KaoYan_2');
const pgKajweb2 = readKajwebJsonl('KaoYanluan_1');
const pgNetem = readNetem();
const pgMerged = mergeWords('postgraduate', [pgKajweb1, pgKajweb2, pgNetem], pgExisting, phoneticLookup);
// Filter out extremely basic words for postgraduate (optional: keep top 3000 by frequency?)
// For now, keep all but deduplicated
writeDict('postgraduate', '考研词汇', '考研英语核心词汇', '考研', pgMerged);

console.log('Done!');
