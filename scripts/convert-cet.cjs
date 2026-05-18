const fs = require('fs');
const path = require('path');

const CHAPTER_SIZE = 20;
const RAW_DIR = path.resolve(__dirname, './dict-data');
const OUT_DIR = path.resolve(__dirname, '../src/dictionaries');

function normalizeCoreVocab(raw) {
  const pos = raw.part_of_speech ? `[${raw.part_of_speech}] ` : '';
  return {
    name: raw.word,
    trans: `${pos}${raw.definition || ''}`,
    uk: raw.phonetic || '',
    us: raw.phonetic || '',
    phrases: []
  };
}

function normalize(raw) {
  const trans = (raw.translations || []).map(t => {
    const type = t.type ? `[${t.type}] ` : '';
    return `${type}${t.translation}`;
  }).join('; ');

  const phrases = (raw.phrases || [])
    .map(p => ({ en: p.phrase, cn: p.translation }))
    .filter(p => p.en && p.cn);

  return {
    name: raw.word,
    trans: trans || raw.mean || '',
    uk: raw.uk || '',
    us: raw.us || '',
    phrases
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

function buildFromWords(id, words, displayName) {
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

// cet4freq 使用新的核心高频词汇数据
const coreVocabRaw = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../cet4_core_vocabulary.json'), 'utf-8'));
const coreWords = dedup(coreVocabRaw.words.map(normalizeCoreVocab).filter(w => w.name && w.trans));
buildFromWords('cet4freq', coreWords, '英语4级高频');
build('cet6', 'cet6.json', null, '英语6级');

// cet6freq 使用新的核心高频词汇数据
const cet6CoreRaw = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../cet6_core_vocabulary.json'), 'utf-8'));
const cet6CoreWords = dedup(cet6CoreRaw.map(normalizeCoreVocab).filter(w => w.name && w.trans));
buildFromWords('cet6freq', cet6CoreWords, '英语6级高频');

// 考研词汇
const kaoyanRaw = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../kaoyan_vocabulary.json'), 'utf-8'));
const kaoyanWords = dedup(kaoyanRaw.vocabulary.map(normalizeCoreVocab).filter(w => w.name && w.trans));
buildFromWords('postgraduate', kaoyanWords, '考研词汇');

// 考研核心词汇
const kaoyanCoreRaw = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../new.json'), 'utf-8'));
const kaoyanCoreWords = dedup(kaoyanCoreRaw.vocabulary.map(normalizeCoreVocab).filter(w => w.name && w.trans));
buildFromWords('postgraduateCore', kaoyanCoreWords, '考研核心词汇');

console.log('🎉 CET4/CET6/考研 转换完成');
