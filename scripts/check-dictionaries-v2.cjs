const fs = require('fs');
const path = require('path');

const dictDir = path.join(__dirname, '..', 'src', 'dictionaries');
const dictFiles = fs.readdirSync(dictDir).filter(f => f.endsWith('.json'));

// Standard IPA vowels and consonants + diacritics
const ipaChars = /[ɑæɛɪɔʊəɜɒʌɑːæɛɪɔʊuːəɜːɒʌŋʃʒθðʧʤŋɡɪːˈˌ̩̃ ̴̵̶̷̸̧̨̛̥̬̪̺̻̟̠̝̞̙̹̜̘̯̩̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼̈̽̀́̂̄̋̌̏̑̓̽̾̿̕͜͡]/;

// ASCII-only phonetic: if it contains ONLY a-z, digits, spaces, and simple punctuation
const asciiOnlyPattern = /^[a-zA-Z0-9\s,.';\-]*$/;

function isPhrase(word) {
  return word.includes(' ') || word.includes('-');
}

function isLikelyInvalidPhonetic(phone) {
  if (!phone || phone.trim() === '') return true;
  // If it's pure ASCII with no IPA chars at all, flag it as simplified/non-standard
  if (asciiOnlyPattern.test(phone)) {
    // Some pure ASCII phonetics might be okay if they have stress marks
    // But if it's just lowercase letters, it's very suspicious
    const justLowercase = /^[a-z]+$/.test(phone.trim());
    if (justLowercase) return true;
    // Check if it has any stress markers
    if (!phone.includes('ˈ') && !phone.includes('ˌ') && !phone.includes("'") && !phone.includes(',')) {
      // Very plain, likely incomplete
      return true;
    }
  }
  return false;
}

function classifyPhoneticQuality(phone) {
  if (!phone || phone.trim() === '') return 'missing';
  const hasIPA = ipaChars.test(phone);
  const isAsciiOnly = asciiOnlyPattern.test(phone);

  if (hasIPA) return 'standard';
  if (isAsciiOnly) return 'simplified';
  return 'standard';
}

const results = {
  duplicates: [],
  missingPhonetic: [],
  phraseWithPhonetic: [],
  simplifiedPhonetic: [], // ASCII-only without IPA
  summary: {}
};

for (const file of dictFiles) {
  const filePath = path.join(dictDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const dictName = data.name || file;
  const allWords = [];
  let wordCount = 0;
  let phraseCount = 0;

  const duplicates = [];
  const missingPhonetic = [];
  const phraseWithPhonetic = [];
  const simplifiedPhonetic = [];

  for (const chapter of data.chapters || []) {
    for (const word of chapter.words || []) {
      wordCount++;
      const w = word.name;
      const isPh = isPhrase(w);
      if (isPh) phraseCount++;
      allWords.push({ word: w, chapter: chapter.id, entry: word, isPhrase: isPh });

      if (isPh) {
        // Phrases should NOT have phonetics
        const hasUs = word.usphone && word.usphone.trim() !== '';
        const hasUk = word.ukphone && word.ukphone.trim() !== '';
        if (hasUs || hasUk) {
          phraseWithPhonetic.push({
            word: w,
            chapter: chapter.id,
            usphone: word.usphone,
            ukphone: word.ukphone
          });
        }
      } else {
        // Words should have standard phonetics
        const usQuality = classifyPhoneticQuality(word.usphone);
        const ukQuality = classifyPhoneticQuality(word.ukphone);

        if (usQuality === 'missing' && ukQuality === 'missing') {
          missingPhonetic.push({ word: w, chapter: chapter.id });
        }

        if (usQuality === 'simplified') {
          simplifiedPhonetic.push({ word: w, type: 'usphone', value: word.usphone });
        }
        if (ukQuality === 'simplified') {
          simplifiedPhonetic.push({ word: w, type: 'ukphone', value: word.ukphone });
        }
      }
    }
  }

  // Check duplicates (case-insensitive)
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
    phraseCount,
    duplicates: duplicates.length,
    missingPhonetic: missingPhonetic.length,
    phraseWithPhonetic: phraseWithPhonetic.length,
    simplifiedPhonetic: simplifiedPhonetic.length
  };

  if (duplicates.length) results.duplicates.push({ dict: dictName, file, duplicates });
  if (missingPhonetic.length) results.missingPhonetic.push({ dict: dictName, file, missingPhonetic });
  if (phraseWithPhonetic.length) results.phraseWithPhonetic.push({ dict: dictName, file, phraseWithPhonetic });
  if (simplifiedPhonetic.length) results.simplifiedPhonetic.push({ dict: dictName, file, simplifiedPhonetic });
}

// Print summary
console.log('='.repeat(90));
console.log('字典检查结果汇总');
console.log('='.repeat(90));
console.log();

for (const [name, s] of Object.entries(results.summary)) {
  const issues = [];
  if (s.duplicates) issues.push(`重复${s.duplicates}个`);
  if (s.missingPhonetic) issues.push(`缺音标${s.missingPhonetic}个`);
  if (s.phraseWithPhonetic) issues.push(`短语有音标${s.phraseWithPhonetic}个`);
  if (s.simplifiedPhonetic) issues.push(`简化音标${s.simplifiedPhonetic}个`);
  const status = issues.length === 0 ? '✅ 通过' : `❌ ${issues.join('，')}`;
  console.log(`${name.padEnd(20)} | ${String(s.totalWords).padStart(5)}词${String(s.phraseCount).padStart(4)}短语 | ${status}`);
}

console.log();
console.log('='.repeat(90));
console.log('重复单词详情');
console.log('='.repeat(90));
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
console.log('='.repeat(90));
console.log('缺失音标的单词详情');
console.log('='.repeat(90));
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
console.log('='.repeat(90));
console.log('短语有音标的详情（短语不应有音标）');
console.log('='.repeat(90));
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
console.log('='.repeat(90));
console.log('简化音标详情（音标不含IPA标准符号，仅ASCII字符）');
console.log('='.repeat(90));
if (results.simplifiedPhonetic.length === 0) {
  console.log('未发现简化音标的情况。');
} else {
  for (const item of results.simplifiedPhonetic) {
    console.log(`\n【${item.dict}】${item.file}`);
    for (const w of item.simplifiedPhonetic.slice(0, 50)) {
      console.log(`  - "${w.word}" ${w.type}: "${w.value}"`);
    }
    if (item.simplifiedPhonetic.length > 50) {
      console.log(`  ... 还有 ${item.simplifiedPhonetic.length - 50} 个`);
    }
  }
}

// Save full report
const reportPath = path.join(__dirname, '..', 'reports', 'dictionary-check-report-v2.json');
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf-8');
console.log();
console.log(`完整报告已保存至: ${reportPath}`);

// Export sample words for web validation
const sampleWords = [];
for (const item of results.simplifiedPhonetic.slice(0, 3)) {
  for (const w of item.simplifiedPhonetic.slice(0, 10)) {
    sampleWords.push({ dict: item.dict, word: w.word, type: w.type, value: w.value });
  }
}
const samplePath = path.join(__dirname, '..', 'reports', 'sample-words-for-validation.json');
fs.writeFileSync(samplePath, JSON.stringify(sampleWords, null, 2), 'utf-8');
console.log(`采样单词已保存至: ${samplePath}`);
