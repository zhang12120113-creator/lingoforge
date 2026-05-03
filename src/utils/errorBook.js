const STORAGE_KEY = 'typingword_wrong';

export function addToErrorBook({ word, trans, notation, dictName }) {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const data = saved ? JSON.parse(saved) : { words: [] };
    const words = data.words || [];

    const existingIndex = words.findIndex(w => w.name === word);
    if (existingIndex !== -1) {
      words[existingIndex].wrongCount = (words[existingIndex].wrongCount || 1) + 1;
      words[existingIndex].trans = Array.isArray(trans) ? trans : (trans ? trans.split('; ') : []);
      words[existingIndex].notation = notation || words[existingIndex].notation;
      words[existingIndex].dictName = dictName || words[existingIndex].dictName;
      words[existingIndex].lastWrongTime = Date.now();
    } else {
      words.unshift({
        name: word,
        trans: Array.isArray(trans) ? trans : (trans ? trans.split('; ') : []),
        notation: notation || '',
        dictName: dictName || '',
        wrongCount: 1,
        addTime: Date.now(),
        lastWrongTime: Date.now(),
      });
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ words }));
  } catch (e) {
    console.error('Failed to add to error book:', e);
  }
}

export function getErrorBook() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { words: [] };
  } catch {
    return { words: [] };
  }
}

export function removeFromErrorBook(wordName) {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const data = saved ? JSON.parse(saved) : { words: [] };
    const words = (data.words || []).filter(w => w.name !== wordName);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ words }));
  } catch (e) {
    console.error('Failed to remove from error book:', e);
  }
}

export function clearErrorBook() {
  localStorage.removeItem(STORAGE_KEY);
}

export function getErrorBookCount() {
  return getErrorBook().words?.length || 0;
}

const CHAPTER_SIZE = 25;

export function loadErrorBookAsDictionary() {
  const data = getErrorBook();
  const words = data.words || [];

  if (words.length === 0) {
    return {
      name: '错题本',
      description: '专属错题练习',
      chapters: [],
    };
  }

  const chapters = [];
  for (let i = 0; i < words.length; i += CHAPTER_SIZE) {
    const chunk = words.slice(i, i + CHAPTER_SIZE);
    const chapterIndex = Math.floor(i / CHAPTER_SIZE);
    chapters.push({
      id: chapterIndex,
      name: `第 ${chapterIndex + 1} 章`,
      words: chunk.map(w => ({
        name: w.name,
        trans: w.trans,
        notation: w.notation,
        usphone: w.usphone,
        ukphone: w.ukphone,
        us: w.us,
        uk: w.uk,
      })),
    });
  }

  return {
    name: '错题本',
    description: '专属错题练习',
    chapters,
  };
}
