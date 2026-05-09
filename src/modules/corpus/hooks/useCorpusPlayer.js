import { useCallback, useEffect, useRef, useState } from 'react'

export function useCorpusPlayer({ videoRef, subtitles }) {
  const [activeId, setActiveId] = useState(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [rate, setRateState] = useState(1)
  const [isLooping, setIsLooping] = useState(false)

  // AB 循环：a/b 都为 null 表示未点；只有 a 表示 A 已设、等待 B；二者都有且 enabled=true 表示循环中
  const [abLoop, setAbLoopState] = useState({ a: null, b: null, enabled: false })
  // 单句结束自动暂停
  const [pauseAfterCue, setPauseAfterCue] = useState(false)
  // 间隔（秒），用于听写/跟读自动重播时的等待时间
  const [intervalGap, setIntervalGapState] = useState(0)
  // 隐藏视频（只听不看）
  const [hideVideo, setHideVideo] = useState(false)

  const loopingRef = useRef(false)
  const abLoopRef = useRef(abLoop)
  const pauseAfterCueRef = useRef(false)
  const activeIdRef = useRef(null)
  const subtitlesRef = useRef(subtitles)
  // 已触发过 pauseAfterCue 的 cueId（防抖：同一句不重复触发）
  const lastPausedCueRef = useRef(null)

  useEffect(() => { loopingRef.current = isLooping }, [isLooping])
  useEffect(() => { abLoopRef.current = abLoop }, [abLoop])
  useEffect(() => { pauseAfterCueRef.current = pauseAfterCue }, [pauseAfterCue])
  useEffect(() => { subtitlesRef.current = subtitles }, [subtitles])

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
      }

      // ---- 优先级：AB 循环 > pauseAfterCue > 单句循环 ----
      const ab = abLoopRef.current
      if (ab.enabled && ab.a != null && ab.b != null) {
        if (t >= ab.b - 0.02) {
          v.currentTime = ab.a
          return
        }
      } else if (pauseAfterCueRef.current && activeIdRef.current != null) {
        const cur = cues.find((c) => c.id === activeIdRef.current)
        if (cur && t >= cur.end - 0.05 && lastPausedCueRef.current !== cur.id) {
          lastPausedCueRef.current = cur.id
          v.pause()
          return
        }
      } else if (loopingRef.current && activeIdRef.current != null) {
        const cur = cues.find((c) => c.id === activeIdRef.current)
        if (cur && t >= cur.end - 0.02) {
          v.currentTime = cur.start
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
    if (v.paused) v.play()
    else v.pause()
  }, [videoRef])

  const seek = useCallback(
    (t) => {
      const v = videoRef.current
      if (!v) return
      v.currentTime = Math.max(0, Math.min(t, v.duration || t))
      lastPausedCueRef.current = null
    },
    [videoRef]
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

  // 互斥：开启单句循环时关闭 AB / pauseAfterCue
  const toggleLoop = useCallback(() => {
    setIsLooping((prev) => {
      const next = !prev
      if (next) {
        setAbLoopState({ a: null, b: null, enabled: false })
        setPauseAfterCue(false)
      }
      return next
    })
  }, [])

  // AB 按钮：第一次设 A、第二次设 B（自动开循环）、第三次清除
  const setAbPoint = useCallback(() => {
    setAbLoopState((prev) => {
      const t = videoRef.current?.currentTime ?? 0
      if (prev.a == null) {
        // 首次点击：设 A
        setIsLooping(false)
        setPauseAfterCue(false)
        return { a: t, b: null, enabled: false }
      }
      if (prev.b == null) {
        // 二次点击：设 B（必须晚于 A，否则忽略）
        if (t > prev.a + 0.05) {
          return { a: prev.a, b: t, enabled: true }
        }
        return prev
      }
      // 三次点击：清除
      return { a: null, b: null, enabled: false }
    })
  }, [videoRef])

  const clearAbLoop = useCallback(() => {
    setAbLoopState({ a: null, b: null, enabled: false })
  }, [])

  // 互斥：pauseAfterCue 与其他两者
  const togglePauseAfterCue = useCallback(() => {
    setPauseAfterCue((prev) => {
      const next = !prev
      if (next) {
        setIsLooping(false)
        setAbLoopState({ a: null, b: null, enabled: false })
      }
      return next
    })
  }, [])

  const setIntervalGap = useCallback((sec) => {
    setIntervalGapState(Math.max(0, sec))
  }, [])

  const toggleHideVideo = useCallback(() => {
    setHideVideo((v) => !v)
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
      v.currentTime = cue.start
      activeIdRef.current = id
      setActiveId(id)
      lastPausedCueRef.current = null
      if (v.paused) v.play()
    },
    [videoRef]
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
    isLooping,
    abLoop,
    pauseAfterCue,
    intervalGap,
    hideVideo,
    cueIndex,
    cueTotal,
    play,
    pause,
    toggle,
    seek,
    setRate,
    toggleLoop,
    setAbPoint,
    clearAbLoop,
    togglePauseAfterCue,
    setIntervalGap,
    toggleHideVideo,
    requestFullscreen,
    jumpToCue,
    prevCue,
    nextCue,
  }
}
