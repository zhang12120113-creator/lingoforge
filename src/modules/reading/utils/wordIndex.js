import articles from '../data/articles.json';

const articleWordMap = new Map();

articles.forEach((article) => {
  article.vocabulary.forEach((vocab) => {
    const key = `${article.id}::${vocab.word.toLowerCase()}`;
    articleWordMap.set(key, vocab);
  });
});

const globalWordMap = new Map();
articles.forEach((article) => {
  article.vocabulary.forEach((vocab) => {
    const key = vocab.word.toLowerCase();
    if (!globalWordMap.has(key)) {
      globalWordMap.set(key, vocab);
    }
  });
});

/**
 * @param {string} articleId
 * @param {string} word
 * @returns {import('../types/reading.js').VocabularyItem|null}
 */
export const lookupInArticle = (articleId, word) => {
  const clean = word.toLowerCase().replace(/[^a-z]/g, '');
  return articleWordMap.get(`${articleId}::${clean}`) || null;
};

/**
 * @param {string} word
 * @returns {import('../types/reading.js').VocabularyItem|null}
 */
export const lookupGlobal = (word) => {
  const clean = word.toLowerCase().replace(/[^a-z]/g, '');
  return globalWordMap.get(clean) || null;
};

/**
 * @param {string} articleId
 * @param {string} word
 * @returns {import('../types/reading.js').VocabularyItem|null}
 */
export const lookupWord = (articleId, word) => {
  return lookupInArticle(articleId, word) || lookupGlobal(word) || null;
};
