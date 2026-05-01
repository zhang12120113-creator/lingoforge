import fs from 'fs';

const raw = JSON.parse(fs.readFileSync('scripts/dict-data/cet6.json', 'utf8'));

function normalize(word) {
  const trans = (word.translations || []).map(t => {
    const type = t.type ? `[${t.type}] ` : '';
    return `${type}${t.translation}`;
  });

  return {
    name: word.word,
    usphone: word.us || '',
    ukphone: word.uk || '',
    trans: trans.length > 0 ? trans : (word.mean ? [word.mean] : [''])
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

let words = raw.map(normalize).filter(w => w.name && w.trans.length > 0);
words = dedup(words);
words = words.slice(0, 1500);

const CHAPTER_SIZE = 25;
const chapters = [];
for (let i = 0; i < words.length; i += CHAPTER_SIZE) {
  chapters.push({
    id: chapters.length,
    name: `第 ${chapters.length + 1} 章`,
    words: words.slice(i, i + CHAPTER_SIZE)
  });
}

const out = {
  id: 'cet6freq',
  name: '英语6级高频',
  totalChapters: chapters.length,
  totalWords: words.length,
  chapters
};

fs.writeFileSync('src/dictionaries/cet6freq.json', JSON.stringify(out, null, 2) + '\n', 'utf8');
console.log(`Generated CET6freq: ${words.length} words, ${chapters.length} chapters`);
console.log('First 5 words:', words.slice(0, 5).map(w => w.name));
