import { useEffect, useState } from 'react'

const STORAGE_KEY = 'lingoforge_reading'

const defaultState = {
  readProgress: {},
  lastReadAt: {},
  bookmarks: [],
}

function loadFromStorage() {
  if (typeof window === 'undefined') return { ...defaultState }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...defaultState }
    const parsed = JSON.parse(raw)
    return {
      readProgress: parsed.readProgress && typeof parsed.readProgress === 'object' ? parsed.readProgress : {},
      lastReadAt: parsed.lastReadAt && typeof parsed.lastReadAt === 'object' ? parsed.lastReadAt : {},
      bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
    }
  } catch {
    return { ...defaultState }
  }
}

let cache = loadFromStorage()
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

export function useReadingStore() {
  const [, setTick] = useState(0)

  useEffect(() => {
    const fn = () => setTick((t) => t + 1)
    listeners.add(fn)
    return () => {
      listeners.delete(fn)
    }
  }, [])

  return {
    readProgress: cache.readProgress,
    lastReadAt: cache.lastReadAt,
    bookmarks: cache.bookmarks,
    getProgress(id) {
      return cache.readProgress[id] || 0
    },
    getLastReadAt(id) {
      return cache.lastReadAt[id] || null
    },
    isBookmarked(id) {
      return cache.bookmarks.includes(id)
    },
    setProgress(id, percent) {
      const clamped = Math.max(0, Math.min(100, Math.round(percent)))
      const prev = cache.readProgress[id] || 0
      // Only update if percent grew, or first read
      if (clamped <= prev && cache.lastReadAt[id]) {
        // still update lastReadAt to reflect re-visit
        cache = {
          ...cache,
          lastReadAt: { ...cache.lastReadAt, [id]: new Date().toISOString() },
        }
      } else {
        cache = {
          ...cache,
          readProgress: { ...cache.readProgress, [id]: clamped },
          lastReadAt: { ...cache.lastReadAt, [id]: new Date().toISOString() },
        }
      }
      persist()
    },
    toggleBookmark(id) {
      const idx = cache.bookmarks.indexOf(id)
      const next = [...cache.bookmarks]
      if (idx === -1) next.push(id)
      else next.splice(idx, 1)
      cache = { ...cache, bookmarks: next }
      persist()
    },
  }
}

/**
 * Format an ISO date as a short relative-style label, e.g. "今天" / "昨天" / "5月3日".
 * @param {string|null|undefined} iso
 */
export function formatLastRead(iso) {
  if (!iso) return ''
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  const now = new Date()
  const startOf = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()
  const diffDays = Math.round((startOf(now) - startOf(date)) / 86400000)
  if (diffDays === 0) return '今天'
  if (diffDays === 1) return '昨天'
  if (diffDays > 0 && diffDays < 7) return `${diffDays} 天前`
  return `${date.getMonth() + 1}月${date.getDate()}日`
}
