const fs = require('fs');
const path = require('path');

const dictDir = path.join(__dirname, '..', 'src', 'dictionaries');
const dictFiles = fs.readdirSync(dictDir).filter(f => f.endsWith('.json'));

// Simple phonetic symbols check - common IPA characters
const phoneticPattern = /[ɑæɛɪɔʊəɜɒʌɑːæɛɪɔʊuːəɜːɒʌɑ̃ɛ̃ɔ̃œøɑɛɪɔʊəɜːɒʌŋʃʒθðʧʤ]/;

function isPhrase(word) {
  return word.includes(' ') || word.includes('-');
}

function hasPhonetic(entry) {
  const us = entry.usphone || '';
  const uk = entry.ukphone || '';
  // Check if it contains any phonetic characters or looks like a phonetic transcription
  return phoneticPattern.test(us) || phoneticPattern.test(uk) || us.length > 0 || uk.length > 0;
}

function isValidPhonetic(phone) {
  if (!phone || phone.trim() === '') return false;
  // Valid phonetics should contain at least some IPA characters or common phonetic markers
  const hasIPA = phoneticPattern.test(phone);
  const hasAsciiOnly = /^[a-zA-Z0-9\s,.';]*$/.test(phone);
  // If it's pure ASCII without any IPA, it might be wrong
  return hasIPA || !hasAsciiOnly;
}

const results = {
  duplicates: [],
  missingPhonetic: [],
  phraseWithPhonetic: [],
  invalidPhonetic: [],
  summary: {}
};

for (const file of dictFiles) {
  const filePath = path.join(dictDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const dictName = data.name || file;
  const allWords = [];
  let wordCount = 0;

  const duplicates = [];
  const missingPhonetic = [];
  const phraseWithPhonetic = [];
  const invalidPhonetic = [];

  for (const chapter of data.chapters || []) {
    for (const word of chapter.words || []) {
      wordCount++;
      const w = word.name;
      allWords.push({ word: w, chapter: chapter.id, entry: word });

      // Check phonetic
      const isPh = isPhrase(w);
      if (isPh) {
        // Phrases should NOT have phonetics
        if ((word.usphone && word.usphone.trim() !== '') || (word.ukphone && word.ukphone.trim() !== '')) {
          phraseWithPhonetic.push({ word: w, chapter: chapter.id, usphone: word.usphone, ukphone: word.ukphone });
        }
      } else {
        // Words should have phonetics
        if ((!word.usphone || word.usphone.trim() === '') && (!word.ukphone || word.ukphone.trim() === '')) {
          missingPhonetic.push({ word: w, chapter: chapter.id });
        } else {
          // Check if phonetic looks valid
          if (word.usphone && word.usphone.trim() !== '' && !isValidPhonetic(word.usphone)) {
            invalidPhonetic.push({ word: w, type: 'usphone', value: word.usphone });
          }
          if (word.ukphone && word.ukphone.trim() !== '' && !isValidPhonetic(word.ukphone)) {
            invalidPhonetic.push({ word: w, type: 'ukphone', value: word.ukphone });
          }
        }
      }
    }
  }

  // Check duplicates
  const wordMap = {};
  for (const item of allWords) {
    const key = item.word.toLowerCase();
    if (!wordMap[key]) wordMap[key] = [];
    wordMap[key].push(item);
  }
  for (const [word, items] of Object.entries(wordMap)) {
    if (items.length > 1) {
      duplicates.push({ word, count: items.length, chapters: items.map(i => i.chapter) });
    }
  }

  results.summary[dictName] = {
    file,
    totalWords: wordCount,
    duplicates: duplicates.length,
    missingPhonetic: missingPhonetic.length,
    phraseWithPhonetic: phraseWithPhonetic.length,
    invalidPhonetic: invalidPhonetic.length
  };

  if (duplicates.length) results.duplicates.push({ dict: dictName, file, duplicates });
  if (missingPhonetic.length) results.missingPhonetic.push({ dict: dictName, file, missingPhonetic });
  if (phraseWithPhonetic.length) results.phraseWithPhonetic.push({ dict: dictName, file, phraseWithPhonetic });
  if (invalidPhonetic.length) results.invalidPhonetic.push({ dict: dictName, file, invalidPhonetic });
}

// Print summary
console.log('='.repeat(80));
console.log('字典检查结果汇总');
console.log('='.repeat(80));
console.log();

for (const [name, s] of Object.entries(results.summary)) {
  const issues = [];
  if (s.duplicates) issues.push(`重复${s.duplicates}个`);
  if (s.missingPhonetic) issues.push(`缺音标${s.missingPhonetic}个`);
  if (s.phraseWithPhonetic) issues.push(`短语有音标${s.phraseWithPhonetic}个`);
  if (s.invalidPhonetic) issues.push(`音标无效${s.invalidPhonetic}个`);
  const status = issues.length === 0 ? '✅ 通过' : `❌ ${issues.join('，')}`;
  console.log(`${name.padEnd(20)} | ${String(s.totalWords).padStart(5)}词 | ${status}`);
}

console.log();
console.log('='.repeat(80));
console.log('重复单词详情');
console.log('='.repeat(80));
if (results.duplicates.length === 0) {
  console.log('未发现重复单词。');
} else {
  for (const item of results.duplicates) {
    console.log(`\n【${item.dict}】${item.file}`);
    for (const d of item.duplicates) {
      console.log(`  - "${d.word}" 出现在 ${d.count} 次，章节: ${d.chapters.join(', ')}`);
    }
  }
}

console.log();
console.log('='.repeat(80));
console.log('缺失音标的单词详情');
console.log('='.repeat(80));
if (results.missingPhonetic.length === 0) {
  console.log('未发现缺失音标的单词。');
} else {
  for (const item of results.missingPhonetic) {
    console.log(`\n【${item.dict}】${item.file}`);
    for (const w of item.missingPhonetic.slice(0, 50)) {
      console.log(`  - "${w.word}" (章节${w.chapter})`);
    }
    if (item.missingPhonetic.length > 50) {
      console.log(`  ... 还有 ${item.missingPhonetic.length - 50} 个`);
    }
  }
}

console.log();
console.log('='.repeat(80));
console.log('短语有音标的详情（短语不应有音标）');
console.log('='.repeat(80));
if (results.phraseWithPhonetic.length === 0) {
  console.log('未发现短语有音标的情况。');
} else {
  for (const item of results.phraseWithPhonetic) {
    console.log(`\n【${item.dict}】${item.file}`);
    for (const w of item.phraseWithPhonetic.slice(0, 50)) {
      console.log(`  - "${w.word}" (章节${w.chapter}) us:${w.usphone} uk:${w.ukphone}`);
    }
    if (item.phraseWithPhonetic.length > 50) {
      console.log(`  ... 还有 ${item.phraseWithPhonetic.length - 50} 个`);
    }
  }
}

console.log();
console.log('='.repeat(80));
console.log('音标格式可能无效的详情');
console.log('='.repeat(80));
if (results.invalidPhonetic.length === 0) {
  console.log('未发现音标格式无效的情况。');
} else {
  for (const item of results.invalidPhonetic) {
    console.log(`\n【${item.dict}】${item.file}`);
    for (const w of item.invalidPhonetic.slice(0, 50)) {
      console.log(`  - "${w.word}" ${w.type}: "${w.value}"`);
    }
    if (item.invalidPhonetic.length > 50) {
      console.log(`  ... 还有 ${item.invalidPhonetic.length - 50} 个`);
    }
  }
}

// Save full report
const reportPath = path.join(__dirname, '..', 'reports', 'dictionary-check-report.json');
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf-8');
console.log();
console.log(`完整报告已保存至: ${reportPath}`);
