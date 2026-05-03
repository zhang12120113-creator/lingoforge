import { useEffect, useRef } from 'react'
import { useReadingStore } from './useReadingStore'

const FLUSH_INTERVAL_MS = 30 * 1000
const MAX_SESSION_MS = 30 * 60 * 1000

export default function useStudyTracker(articleId) {
  const store = useReadingStore()
  const addReadingSecondsRef = useRef(store.addReadingSeconds)
  addReadingSecondsRef.current = store.addReadingSeconds
  const sessionStart = useRef(null)
  const accumulated = useRef(0)

  useEffect(() => {
    if (!articleId) return

    const start = () => {
      if (sessionStart.current == null) sessionStart.current = Date.now()
    }

    const pause = () => {
      if (sessionStart.current == null) return
      const delta = Math.min(Date.now() - sessionStart.current, MAX_SESSION_MS)
      accumulated.current += Math.max(0, delta)
      sessionStart.current = null
    }

    const flush = () => {
      pause()
      const sec = Math.floor(accumulated.current / 1000)
      if (sec > 0) {
        addReadingSecondsRef.current(sec)
        accumulated.current -= sec * 1000
      }
    }

    const handleVisibility = () => {
      if (document.hidden) flush()
      else start()
    }

    if (document.visibilityState !== 'hidden') start()

    const interval = setInterval(flush, FLUSH_INTERVAL_MS)
    document.addEventListener('visibilitychange', handleVisibility)
    window.addEventListener('beforeunload', flush)

    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', handleVisibility)
      window.removeEventListener('beforeunload', flush)
      flush()
    }
  }, [articleId])
}
