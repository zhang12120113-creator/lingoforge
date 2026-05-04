import { loadErrorBookAsDictionary } from './errorBook.js';
import { loadReadingWordBookAsDictionary } from './readingWordBook.js';

const loaders = {
  junior: () => import('../dictionaries/junior.json'),
  zhongkao: () => import('../dictionaries/zhongkao.json'),
  senior: () => import('../dictionaries/senior.json'),
  gaokao: () => import('../dictionaries/gaokao.json'),
  cet4: () => import('../dictionaries/cet4.json'),
  cet4freq: () => import('../dictionaries/cet4freq.json'),
  cet6: () => import('../dictionaries/cet6.json'),
  cet6freq: () => import('../dictionaries/cet6freq.json'),
  tem4: () => import('../dictionaries/tem4.json'),
  tem8: () => import('../dictionaries/tem8.json'),
  ielts: () => import('../dictionaries/ielts.json'),
  toefl: () => import('../dictionaries/toefl.json'),
  sat: () => import('../dictionaries/sat.json'),
  postgraduate: () => import('../dictionaries/postgraduate.json'),
  programmer: () => import('../dictionaries/programmer.json'),
  'error-book': () => Promise.resolve({ default: loadErrorBookAsDictionary() }),
  'reading-word-book': () => Promise.resolve({ default: loadReadingWordBookAsDictionary() }),
}

const cache = new Map()

const noCacheIds = new Set(['error-book', 'reading-word-book'])

export async function loadDictionary(id) {
  if (!noCacheIds.has(id) && cache.has(id)) return cache.get(id)
  const loader = loaders[id]
  if (!loader) return null
  const mod = await loader()
  const data = mod.default ?? mod
  if (!noCacheIds.has(id)) cache.set(id, data)
  return data
}

export async function loadChapter(dictId, chapterId) {
  const dict = await loadDictionary(dictId)
  if (!dict) return null
  return dict.chapters.find((c) => c.id === Number(chapterId))
}
