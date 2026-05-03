/**
 * 构建跨词库的单词索引，用于全局单词搜索
 */
export function buildWordIndex(dictionaries) {
  if (!Array.isArray(dictionaries)) return [];

  const index = [];

  dictionaries.forEach((dict) => {
    if (!dict?.chapters) return;

    dict.chapters.forEach((chapter, chapterIdx) => {
      if (!chapter?.words) return;

      chapter.words.forEach((wordObj, wordIdx) => {
        const word = wordObj.name || '';
        const phonetic = wordObj.usphone || wordObj.ukphone || '';
        const definition = Array.isArray(wordObj.trans)
          ? wordObj.trans.join('；')
          : '';

        if (!word) return;

        index.push({
          word,
          phonetic,
          definition,
          dictId: dict.id,
          dictName: dict.name,
          chapterIndex: chapterIdx,
          chapterId: chapter.id,
          wordIndex: wordIdx,
          // 清洗音标符号后再拼接，提升搜索命中率
          searchText: `${word} ${phonetic.replace(/[\/\[\]\ˈ\ˌ]/g, '')} ${definition}`.toLowerCase(),
        });
      });
    });
  });

  return index;
}

/**
 * 在索引中搜索单词
 */
export function searchWordIndex(index, query, limit = 10) {
  if (!query || query.trim().length === 0) return [];
  const q = query.toLowerCase().trim();
  return index.filter((item) => {
    const wordName = item.word?.trim().toLowerCase();
    if (wordName === q) return true;
    const transList = item.definition?.split('；').map((t) => t.trim().toLowerCase()) || [];
    return transList.some((t) => t === q);
  }).slice(0, limit);
}
