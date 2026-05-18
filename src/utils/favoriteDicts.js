import { useState, useEffect } from 'react'

const STORAGE_KEY = 'lf_favorite_dicts'

const listeners = new Set()

let cache = loadFromStorage()

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const data = JSON.parse(raw)
      if (Array.isArray(data)) return data
    }
  } catch { /* ignore */ }
  return []
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cache))
  listeners.forEach(fn => fn())
}

export function getFavorites() {
  return cache
}

export function isFavorite(dictId) {
  return cache.includes(dictId)
}

export function toggleFavorite(dictId) {
  if (cache.includes(dictId)) {
    cache = cache.filter(id => id !== dictId)
  } else {
    cache = [...cache, dictId]
  }
  persist()
}

export function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useFavorites() {
  const [, forceUpdate] = useState(0)
  useEffect(() => {
    const unsub = subscribe(() => forceUpdate(n => n + 1))
    return unsub
  }, [])
  return { favorites: getFavorites(), isFavorite, toggleFavorite }
}
