import { useCallback, useEffect, useRef, useState } from 'react'

export function useCorpusPlayer({ videoRef, subtitles }) {
  const [activeId, setActiveId] = useState(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [rate, setRateState] = useState(1)
  // 单句循环次数：0=关闭, -1=无限, 正数=额外循环次数
  const [loopCount, setLoopCountState] = useState(0)

  // 单句结束自动暂停
  const [pauseAfterCue, setPauseAfterCue] = useState(false)
  // 间隔（秒），用于听写/跟读自动重播时的等待时间
  const [intervalGap, setIntervalGapState] = useState(0)
  // 隐藏字幕面板
  const [hideSubtitle, setHideSubtitle] = useState(false)

  const loopCountRef = useRef(0)
  const loopsRemainingRef = useRef(0)
  const pauseAfterCueRef = useRef(false)
  const activeIdRef = useRef(null)
  const subtitlesRef = useRef(subtitles)
  // 已触发过 pauseAfterCue 的 cueId（防抖：同一句不重复触发）
  const lastPausedCueRef = useRef(null)
  // 间隔相关：当前生效值、待执行的定时器、已触发过的 cueId（防抖）
  const intervalGapRef = useRef(0)
  const intervalTimerRef = useRef(null)
  const lastIntervalCueRef = useRef(null)

  useEffect(() => { loopCountRef.current = loopCount }, [loopCount])
  useEffect(() => { pauseAfterCueRef.current = pauseAfterCue }, [pauseAfterCue])
  useEffect(() => { intervalGapRef.current = intervalGap }, [intervalGap])
  useEffect(() => { subtitlesRef.current = subtitles }, [subtitles])

  const clearIntervalTimer = useCallback(() => {
    if (intervalTimerRef.current) {
      clearTimeout(intervalTimerRef.current)
      intervalTimerRef.current = null
    }
  }, [])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const onTime = () => {
      const t = v.currentTime
      setCurrentTime(t)

      const cues = subtitlesRef.current
      let next = null
      for (const c of cues) {
        if (t >= c.start && t < c.end) {
          next = c
          break
        }
      }
      const nextId = next?.id ?? null
      if (nextId !== activeIdRef.current) {
        activeIdRef.current = nextId
        setActiveId(nextId)
        // 切到新句时清掉 pauseAfterCue 防抖标记
        lastPausedCueRef.current = null
        // 切到新句时清掉 intervalGap 防抖标记
        lastIntervalCueRef.current = null
        // 切到新句时重置循环计数
        loopsRemainingRef.current = loopCountRef.current
      }

      // ---- 优先级：pauseAfterCue > intervalGap > 单句循环 ----
      if (pauseAfterCueRef.current && activeIdRef.current != null) {
        const cur = cues.find((c) => c.id === activeIdRef.current)
        if (cur && t >= cur.end - 0.05 && lastPausedCueRef.current !== cur.id) {
          lastPausedCueRef.current = cur.id
          v.pause()
          return
        }
      } else if (intervalGapRef.current > 0 && activeIdRef.current != null) {
        const cur = cues.find((c) => c.id === activeIdRef.current)
        if (cur && t >= cur.end - 0.05 && lastIntervalCueRef.current !== cur.id) {
          lastIntervalCueRef.current = cur.id
          const gap = intervalGapRef.current
          const lc = loopCountRef.current
          const willLoop = lc !== 0 && (lc === -1 || loopsRemainingRef.current > 0)
          v.pause()
          intervalTimerRef.current = setTimeout(() => {
            intervalTimerRef.current = null
            const vid = videoRef.current
            if (!vid) return
            if (willLoop) {
              if (loopsRemainingRef.current > 0) {
                loopsRemainingRef.current = loopsRemainingRef.current - 1
              }
              vid.currentTime = cur.start
              // 允许在下次到达 cur.end 时再次触发间隔
              lastIntervalCueRef.current = null
              vid.play()
            } else {
              const cues2 = subtitlesRef.current
              const idx = cues2.findIndex((c) => c.id === cur.id)
              if (idx >= 0 && idx < cues2.length - 1) {
                vid.currentTime = cues2[idx + 1].start
                vid.play()
              }
              // 否则为最后一句：保持暂停
            }
          }, gap * 1000)
          return
        }
      } else if (loopCountRef.current !== 0 && activeIdRef.current != null) {
        const cur = cues.find((c) => c.id === activeIdRef.current)
        if (cur && t >= cur.end - 0.02) {
          const remaining = loopsRemainingRef.current
          if (loopCountRef.current === -1 || remaining > 0) {
            if (remaining > 0) {
              loopsRemainingRef.current = remaining - 1
            }
            v.currentTime = cur.start
          }
        }
      }
    }
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onMeta = () => setDuration(v.duration || 0)
    const onRate = () => setRateState(v.playbackRate)

    v.addEventListener('timeupdate', onTime)
    v.addEventListener('play', onPlay)
    v.addEventListener('pause', onPause)
    v.addEventListener('loadedmetadata', onMeta)
    v.addEventListener('ratechange', onRate)

    return () => {
      v.removeEventListener('timeupdate', onTime)
      v.removeEventListener('play', onPlay)
      v.removeEventListener('pause', onPause)
      v.removeEventListener('loadedmetadata', onMeta)
      v.removeEventListener('ratechange', onRate)
      if (intervalTimerRef.current) {
        clearTimeout(intervalTimerRef.current)
        intervalTimerRef.current = null
      }
    }
  }, [videoRef])

  const play = useCallback(() => {
    videoRef.current?.play()
  }, [videoRef])

  const pause = useCallback(() => {
    videoRef.current?.pause()
  }, [videoRef])

  const toggle = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      // 用户主动恢复：取消等待中的间隔
      clearIntervalTimer()
      v.play()
    } else v.pause()
  }, [videoRef, clearIntervalTimer])

  const seek = useCallback(
    (t) => {
      const v = videoRef.current
      if (!v) return
      clearIntervalTimer()
      v.currentTime = Math.max(0, Math.min(t, v.duration || t))
      lastPausedCueRef.current = null
      lastIntervalCueRef.current = null
    },
    [videoRef, clearIntervalTimer]
  )

  const setRate = useCallback(
    (r) => {
      const v = videoRef.current
      if (!v) return
      v.playbackRate = r
      setRateState(r)
    },
    [videoRef]
  )

  // 设置单句循环次数：0=关闭, -1=无限, 正数=额外循环次数
  const setLoopCount = useCallback((count) => {
    const next = count === 0 ? 0 : count === -1 ? -1 : Math.max(1, Math.floor(count))
    setLoopCountState(next)
    if (next !== 0) {
      setPauseAfterCue(false)
      loopsRemainingRef.current = next
    }
  }, [])

  // 互斥：开启单句循环时关闭 pauseAfterCue
  const toggleLoop = useCallback(() => {
    setLoopCountState((prev) => {
      const next = prev === 0 ? -1 : 0
      if (next !== 0) {
        setPauseAfterCue(false)
        loopsRemainingRef.current = next
      }
      return next
    })
  }, [])

  // 互斥：pauseAfterCue 与单句循环
  const togglePauseAfterCue = useCallback(() => {
    setPauseAfterCue((prev) => {
      const next = !prev
      if (next) {
        setLoopCountState(0)
      }
      return next
    })
  }, [])

  const setIntervalGap = useCallback((sec) => {
    const next = Math.max(0, sec)
    // 关闭时如果正处于间隔等待，立即取消并恢复播放
    if (next === 0 && intervalTimerRef.current) {
      clearTimeout(intervalTimerRef.current)
      intervalTimerRef.current = null
      const v = videoRef.current
      if (v?.paused) v.play()
    }
    setIntervalGapState(next)
  }, [videoRef])

  const toggleHideSubtitle = useCallback(() => {
    setHideSubtitle((v) => !v)
  }, [])

  const requestFullscreen = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    const target = v.parentElement || v
    if (document.fullscreenElement) {
      document.exitFullscreen?.()
    } else {
      target.requestFullscreen?.()
    }
  }, [videoRef])

  const jumpToCue = useCallback(
    (id) => {
      const cue = subtitlesRef.current.find((c) => c.id === id)
      const v = videoRef.current
      if (!cue || !v) return
      clearIntervalTimer()
      v.currentTime = cue.start
      activeIdRef.current = id
      setActiveId(id)
      lastPausedCueRef.current = null
      lastIntervalCueRef.current = null
      if (v.paused) v.play()
    },
    [videoRef, clearIntervalTimer]
  )

  const prevCue = useCallback(() => {
    const cues = subtitlesRef.current
    const idx = cues.findIndex((c) => c.id === activeIdRef.current)
    if (idx > 0) jumpToCue(cues[idx - 1].id)
    else if (idx === -1 && cues.length) jumpToCue(cues[0].id)
  }, [jumpToCue])

  const nextCue = useCallback(() => {
    const cues = subtitlesRef.current
    const idx = cues.findIndex((c) => c.id === activeIdRef.current)
    if (idx >= 0 && idx < cues.length - 1) jumpToCue(cues[idx + 1].id)
    else if (idx === -1 && cues.length) jumpToCue(cues[0].id)
  }, [jumpToCue])

  // 句子进度：(当前是第几句, 总句数)
  const cueIndex = activeId == null
    ? 0
    : Math.max(0, subtitles.findIndex((c) => c.id === activeId)) + 1
  const cueTotal = subtitles?.length ?? 0

  return {
    activeId,
    currentTime,
    duration,
    isPlaying,
    rate,
    loopCount,
    pauseAfterCue,
    intervalGap,
    hideSubtitle,
    cueIndex,
    cueTotal,
    play,
    pause,
    toggle,
    seek,
    setRate,
    setLoopCount,
    toggleLoop,
    togglePauseAfterCue,
    setIntervalGap,
    toggleHideSubtitle,
    requestFullscreen,
    jumpToCue,
    prevCue,
    nextCue,
  }
}
