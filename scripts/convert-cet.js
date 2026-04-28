const fs = require('fs');
const path = require('path');

const CHAPTER_SIZE = 20;
const RAW_DIR = path.resolve(__dirname, './dict-data');
const OUT_DIR = path.resolve(__dirname, '../src/dictionaries');

function normalize(raw) {
  const trans = (raw.translations || []).map(t => {
    const type = t.type ? `[${t.type}] ` : '';
    return `${type}${t.translation}`;
  }).join('; ');

  const sentences = (raw.sentences || [])
    .slice(0, 2)
    .map(s => ({ en: s.sentence, cn: s.translation }))
    .filter(s => s.en && s.cn);

  return {
    name: raw.word,
    trans: trans || raw.mean || '',
    uk: raw.uk || '',
    us: raw.us || '',
    sentences
  };
}

function dedup(words) {
  const seen = new Set();
  return words.filter(w => {
    const key = w.name?.toLowerCase().trim();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function build(id, sourceFile, sliceCount, displayName) {
  const raw = JSON.parse(fs.readFileSync(path.join(RAW_DIR, sourceFile), 'utf-8'));
  let words = raw.map(normalize).filter(w => w.name && w.trans);
  words = dedup(words);
  if (sliceCount) words = words.slice(0, sliceCount);

  const chapters = [];
  for (let i = 0; i < words.length; i += CHAPTER_SIZE) {
    chapters.push({
      id: chapters.length + 1,
      name: `第${chapters.length + 1}章`,
      words: words.slice(i, i + CHAPTER_SIZE)
    });
  }

  const out = {
    id,
    name: displayName,
    totalChapters: chapters.length,
    totalWords: words.length,
    chapters
  };

  fs.writeFileSync(path.join(OUT_DIR, `${id}.json`), JSON.stringify(out, null, 2));
  console.log(`✅ ${displayName} | ${words.length}词 | ${chapters.length}章`);
}

build('cet4', 'cet4.json', null, '英语4级');
build('cet4freq', 'cet4.json', 1500, '英语4级高频');
build('cet6', 'cet6.json', null, '英语6级');
build('cet6freq', 'cet6.json', 1500, '英语6级高频');
console.log('🎉 CET4/CET6 转换完成');
