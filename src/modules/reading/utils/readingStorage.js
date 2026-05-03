const KEYS = {
  NOTEBOOK: 'lf_reading_notebook',
  PROGRESS: 'lf_reading_progress',
  STATS: 'lf_reading_stats',
};

const safeParse = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
};

/** @returns {import('../types/reading.js').NotebookItem[]} */
export const getNotebook = () => safeParse(KEYS.NOTEBOOK, []);

/** @param {import('../types/reading.js').NotebookItem[]} notebook */
export const saveNotebook = (notebook) => {
  localStorage.setItem(KEYS.NOTEBOOK, JSON.stringify(notebook));
};

/** @param {import('../types/reading.js').NotebookItem} item */
export const addToNotebook = (item) => {
  const notebook = getNotebook();
  if (!notebook.find((n) => n.word === item.word)) {
    notebook.unshift(item);
    saveNotebook(notebook);
  }
};

/** @param {string} word */
export const removeFromNotebook = (word) => {
  const notebook = getNotebook().filter((n) => n.word !== word);
  saveNotebook(notebook);
};

/** @param {string} word */
export const toggleMastered = (word) => {
  const notebook = getNotebook().map((n) =>
    n.word === word ? { ...n, mastered: !n.mastered } : n
  );
  saveNotebook(notebook);
};

/** @returns {Object.<string, boolean>} */
export const getProgress = () => safeParse(KEYS.PROGRESS, {});

/** @param {string} articleId */
export const markArticleRead = (articleId) => {
  const progress = getProgress();
  progress[articleId] = true;
  localStorage.setItem(KEYS.PROGRESS, JSON.stringify(progress));
};

/** @returns {import('../types/reading.js').ReadingStats} */
export const getStats = () =>
  safeParse(KEYS.STATS, {
    totalReadArticles: 0,
    totalReadWords: 0,
    totalNotebookWords: 0,
    masteredWords: 0,
    dailyRecords: [],
  });

/** @param {import('../types/reading.js').ReadingStats} stats */
export const saveStats = (stats) => {
  localStorage.setItem(KEYS.STATS, JSON.stringify(stats));
};

/**
 * @param {number} readWords
 * @param {number} newWords
 */
export const recordDaily = (readWords, newWords) => {
  const stats = getStats();
  const today = new Date().toISOString().split('T')[0];
  const existing = stats.dailyRecords.find((r) => r.date === today);

  if (existing) {
    existing.readWords += readWords;
    existing.newWords += newWords;
  } else {
    stats.dailyRecords.push({ date: today, readWords, newWords });
  }

  stats.dailyRecords = stats.dailyRecords.slice(-30);
  saveStats(stats);
};

export const updateStatsSummary = () => {
  const notebook = getNotebook();
  const progress = getProgress();
  const stats = getStats();

  stats.totalReadArticles = Object.keys(progress).length;
  stats.totalNotebookWords = notebook.length;
  stats.masteredWords = notebook.filter((n) => n.mastered).length;

  saveStats(stats);
};
