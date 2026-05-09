import { useEffect, useState } from 'react'

const STORAGE_KEY = 'lingoforge_corpus'

const defaultState = {
  bookmarks: [],
}

function loadFromStorage() {
  if (typeof window === 'undefined') return { ...defaultState }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...defaultState }
    const parsed = JSON.parse(raw)
    return {
      bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
    }
  } catch {
    return { ...defaultState }
  }
}

let cache = loadFromStorage()
let bookmarksSet = new Set(cache.bookmarks)
const listeners = new Set()

function persist() {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cache))
    } catch {
      /* ignore quota errors */
    }
  }
  listeners.forEach((fn) => fn())
}

export function useCorpusStore() {
  const [, setTick] = useState(0)

  useEffect(() => {
    const fn = () => setTick((t) => t + 1)
    listeners.add(fn)
    return () => {
      listeners.delete(fn)
    }
  }, [])

  return {
    bookmarks: cache.bookmarks,
    isBookmarked(id) {
      return bookmarksSet.has(id)
    },
    toggleBookmark(id) {
      if (bookmarksSet.has(id)) {
        bookmarksSet.delete(id)
        cache = { ...cache, bookmarks: cache.bookmarks.filter((x) => x !== id) }
      } else {
        bookmarksSet.add(id)
        cache = { ...cache, bookmarks: [...cache.bookmarks, id] }
      }
      persist()
    },
  }
}
