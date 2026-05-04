const STORAGE_KEY = 'lingoforge_reading_words';

export function getReadingWordBook() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { words: [] };
  } catch {
    return { words: [] };
  }
}

export function addToReadingWordBook(wordInfo) {
  try {
    const data = getReadingWordBook();
    const words = data.words || [];
    const existingIndex = words.findIndex((w) => w.name === wordInfo.name);
    if (existingIndex !== -1) {
      words[existingIndex] = {
        ...words[existingIndex],
        ...wordInfo,
        addTime: words[existingIndex].addTime || Date.now(),
      };
    } else {
      words.unshift({
        ...wordInfo,
        addTime: Date.now(),
      });
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ words }));
  } catch (e) {
    console.error('Failed to add to reading word book:', e);
  }
}

export function removeFromReadingWordBook(wordName) {
  try {
    const data = getReadingWordBook();
    const words = (data.words || []).filter((w) => w.name !== wordName);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ words }));
  } catch (e) {
    console.error('Failed to remove from reading word book:', e);
  }
}

export function isInReadingWordBook(wordName) {
  const data = getReadingWordBook();
  return (data.words || []).some((w) => w.name === wordName);
}

export function getReadingWordBookCount() {
  return getReadingWordBook().words?.length || 0;
}

const CHAPTER_SIZE = 25;

export function loadReadingWordBookAsDictionary() {
  const data = getReadingWordBook();
  const words = data.words || [];

  if (words.length === 0) {
    return {
      name: '阅读词本',
      description: '语境中积累的词汇',
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
      words: chunk.map((w) => ({
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
    name: '阅读词本',
    description: '语境中积累的词汇',
    chapters,
  };
}
