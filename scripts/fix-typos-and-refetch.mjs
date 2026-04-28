import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DICTS_DIR = path.join(__dirname, '..', 'src', 'dictionaries');
const REPORTS_DIR = path.join(__dirname, '..', 'reports');
const UNRESOLVED_PATH = path.join(REPORTS_DIR, 'phones-unresolved.json');

// Known typos and their corrections
const TYPO_FIXES = {
  'reservior': 'reservoir',
  'behavious': 'behaviour',
  'relinguish': 'relinquish',
  'Rusia': 'Russia',
  'barometre': 'barometer',
  'chiche': 'cliche',
  'groa': 'groan',
  'hur': 'her',
  'gy': 'gym',
};

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

function fetchYoudao(word) {
  return new Promise((resolve) => {
    const url = `https://dict.youdao.com/jsonapi?q=${encodeURIComponent(word)}`;
    const req = https.get(url, { timeout: 10000 }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const phones = json?.ec?.word?.[0];
          if (phones && (phones.ukphone || phones.usphone)) {
            resolve({
              word,
              ukphone: phones.ukphone || '',
              usphone: phones.usphone || '',
              success: true
            });
          } else {
            resolve({ word, success: false, reason: 'no_phonetic_data' });
          }
        } catch {
          resolve({ word, success: false, reason: 'parse_error' });
        }
      });
    });
    req.on('error', (err) => {
      resolve({ word, success: false, reason: err.message });
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ word, success: false, reason: 'timeout' });
    });
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  if (!fs.existsSync(UNRESOLVED_PATH)) {
    console.error('❌ phones-unresolved.json not found.');
    process.exit(1);
  }

  const unresolved = JSON.parse(fs.readFileSync(UNRESOLVED_PATH, 'utf-8')).words;

  // Build unique word list with typo corrections
  const uniqueWords = new Map(); // correctedWord -> [{dict, originalWord, chapter}]
  for (const item of unresolved) {
    const corrected = TYPO_FIXES[item.word] || item.word;
    if (!uniqueWords.has(corrected)) {
      uniqueWords.set(corrected, []);
    }
    uniqueWords.get(corrected).push({
      dict: item.dict,
      originalWord: item.word,
      chapter: item.chapter
    });
  }

  const words = Array.from(uniqueWords.keys());
  console.log(`🔄 Refetching ${words.length} unique unresolved words (with typo fixes)...`);

  const results = {};
  const failed = [];

  // Fetch in batches
  const BATCH_SIZE = 20;
  const totalBatches = Math.ceil(words.length / BATCH_SIZE);
  for (let i = 0; i < words.length; i += BATCH_SIZE) {
    const batch = words.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    process.stdout.write(`\r  Batch ${batchNum}/${totalBatches} (${i + 1}-${Math.min(i + BATCH_SIZE, words.length)})... `);

    const batchResults = await Promise.all(batch.map(fetchYoudao));
    for (const r of batchResults) {
      if (r.success) {
        results[r.word.toLowerCase()] = { ukphone: r.ukphone, usphone: r.usphone };
      } else {
        failed.push(r.word);
      }
    }

    if (i + BATCH_SIZE < words.length) {
      await sleep(800);
    }
  }
  console.log('\n');

  // Apply corrections to dictionaries
  let typoFixed = 0;
  let phoneFixed = 0;

  for (const [correctedWord, occurrences] of uniqueWords.entries()) {
    const cacheKey = correctedWord.toLowerCase();
    const cached = results[cacheKey];

    for (const occ of occurrences) {
      const filePath = path.join(DICTS_DIR, `${occ.dict}.json`);
      const dictName = occ.dict;
      const fields = getFieldNames(dictName);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      if (data.chapters) {
        for (const chapter of data.chapters) {
          if (chapter.id !== occ.chapter && String(chapter.id) !== String(occ.chapter)) continue;
          if (!chapter.words) continue;
          for (const word of chapter.words) {
            if (word.name !== occ.originalWord) continue;

            // Fix typo if applicable
            if (TYPO_FIXES[occ.originalWord]) {
              word.name = correctedWord;
              typoFixed++;
            }

            // Apply phonetics if fetched
            if (cached && (cached.usphone || cached.ukphone)) {
              word[fields.us] = cached.usphone;
              word[fields.uk] = cached.ukphone;
              phoneFixed++;
            }
          }
        }
      }

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }
  }

  console.log(`✅ Typo corrections applied: ${typoFixed}`);
  console.log(`✅ Phonetics applied: ${phoneFixed}`);
  console.log(`❌ Still failed: ${failed.length}`);
  if (failed.length > 0) {
    console.log(`   Words: ${failed.join(', ')}`);
  }

  // Save updated unresolved list
  const stillUnresolved = [];
  for (const [correctedWord, occurrences] of uniqueWords.entries()) {
    const cacheKey = correctedWord.toLowerCase();
    const cached = results[cacheKey];
    if (!cached || (!cached.usphone && !cached.ukphone)) {
      for (const occ of occurrences) {
        stillUnresolved.push({
          dict: occ.dict,
          word: TYPO_FIXES[occ.originalWord] ? correctedWord : occ.originalWord,
          chapter: occ.chapter
        });
      }
    }
  }

  if (stillUnresolved.length > 0) {
    fs.writeFileSync(
      path.join(REPORTS_DIR, 'phones-unresolved.json'),
      JSON.stringify({ count: stillUnresolved.length, words: stillUnresolved }, null, 2)
    );
  } else {
    if (fs.existsSync(UNRESOLVED_PATH)) fs.unlinkSync(UNRESOLVED_PATH);
    console.log('🎉 All phonetics resolved!');
  }
}

main().catch(console.error);
