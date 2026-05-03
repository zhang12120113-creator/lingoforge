/**
 * @typedef {Object} Paragraph
 * @property {string} id
 * @property {string} en
 * @property {string} zh
 * @property {string[]} keyWords
 */

/**
 * @typedef {Object} VocabularyItem
 * @property {string} word
 * @property {string} phonetic
 * @property {string} pos
 * @property {string} definition
 * @property {string} example
 */

/**
 * @typedef {Object} Article
 * @property {string} id
 * @property {string} title
 * @property {string} category
 * @property {string} difficulty
 * @property {number} readTime
 * @property {string} coverImage
 * @property {string} summary
 * @property {string} source
 * @property {string} date
 * @property {Paragraph[]} paragraphs
 * @property {VocabularyItem[]} vocabulary
 */

/**
 * @typedef {Object} NotebookItem
 * @property {string} word
 * @property {string} phonetic
 * @property {string} pos
 * @property {string} definition
 * @property {string} articleId
 * @property {string} paragraphId
 * @property {string} addedAt
 * @property {boolean} mastered
 */

/**
 * @typedef {Object} DailyRecord
 * @property {string} date
 * @property {number} readWords
 * @property {number} newWords
 */

/**
 * @typedef {Object} ReadingStats
 * @property {number} totalReadArticles
 * @property {number} totalReadWords
 * @property {number} totalNotebookWords
 * @property {number} masteredWords
 * @property {DailyRecord[]} dailyRecords
 */

export {};
