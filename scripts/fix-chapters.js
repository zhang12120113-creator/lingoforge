const fs = require('fs');
const path = require('path');

const dictDir = path.join(__dirname, '..', 'src', 'dictionaries');
const backupDir = path.join(__dirname, '..', 'src', 'dictionaries_backup');
const files = fs.readdirSync(dictDir).filter(f => f.endsWith('.json'));

// Helper: number to Chinese numeral
function toChineseNum(num) {
  const cn = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const units = ['', '十', '百', '千'];
  if (num === 0) return '零';
  let str = '';
  let n = num;
  let unitIdx = 0;
  while (n > 0) {
    const digit = n % 10;
    if (digit !== 0) {
      str = cn[digit] + units[unitIdx] + str;
    } else if (str && str[0] !== '零') {
      str = '零' + str;
    }
    n = Math.floor(n / 10);
    unitIdx++;
  }
  // Normalize: 一十一 -> 十一, remove trailing/internal zeros
  str = str.replace(/零+/g, '零').replace(/零$/, '');
  if (str.startsWith('一十')) str = str.replace(/^一十/, '十');
  return str || '零';
}

// Ensure backup dir exists
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

for (const file of files) {
  const filepath = path.join(dictDir, file);
  const backupPath = path.join(backupDir, file);

  // Backup
  fs.copyFileSync(filepath, backupPath);

  const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  const chapters = data.chapters || [];

  // Flatten all words
  const allWords = [];
  for (const ch of chapters) {
    if (ch.words) {
      allWords.push(...ch.words);
    }
  }

  // Deduplicate by name (case-insensitive, keep first)
  const seen = new Set();
  const uniqueWords = [];
  for (const word of allWords) {
    const key = (word.name || '').toLowerCase();
    if (key && !seen.has(key)) {
      seen.add(key);
      uniqueWords.push(word);
    }
  }

  const deduped = allWords.length - uniqueWords.length;

  // Re-chunk into 25 words per chapter
  const CHUNK_SIZE = 25;
  const newChapters = [];
  for (let i = 0; i < uniqueWords.length; i += CHUNK_SIZE) {
    const chunk = uniqueWords.slice(i, i + CHUNK_SIZE);
    const chapterNum = Math.floor(i / CHUNK_SIZE) + 1;
    newChapters.push({
      id: chapterNum,
      name: `章节${toChineseNum(chapterNum)}`,
      words: chunk
    });
  }

  // Update data
  data.totalChapters = newChapters.length;
  data.totalWords = uniqueWords.length;
  data.chapters = newChapters;

  // Write back
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2) + '\n', 'utf8');

  console.log(`${file}: flattened ${allWords.length} words, deduped ${deduped}, -> ${newChapters.length} chapters x ~${CHUNK_SIZE} words`);
}

console.log('\nDone. Originals backed up to src/dictionaries_backup/');
