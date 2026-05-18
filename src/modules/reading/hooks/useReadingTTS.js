import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * 阅读模块的浏览器 TTS 听力 hook（基于 Web Speech API）。
 *
 * 状态：
 *   playingIndex    当前播放段落索引；-1 = 空闲
 *   isPlayingAll    是否正在听全文
 *   segmentProgress 当前段播放进度 0~100（基于 onboundary 字符位置 + 时间兜底）
 *   voiceStatus     'checking' | 'ok' | 'no-english' | 'unsupported'
 *                   ok=找到英文 voice；no-english=只有非英文 voice（多数浏览器读英文会静默或异常）；
 *                   unsupported=浏览器不支持 Web Speech API
 *   error           最近一次失败的错误信息（字符串），无错为 null
 *
 * 方法：
 *   playOne(text, index)   切换播放指定段落（再次点击同段落 = 停止）
 *   playAll(paragraphs)    从头依次播放全部段落（再次点击 = 停止）
 *   stop()                 立即停止
 *   clearError()           清除错误提示
 */
export default function useReadingTTS({ rate = 0.95 } = {}) {
  const [playingIndex, setPlayingIndex] = useState(-1)
  const [isPlayingAll, setIsPlayingAll] = useState(false)
  const [segmentProgress, setSegmentProgress] = useState(0)
  const [voiceStatus, setVoiceStatus] = useState('checking')
  const [error, setError] = useState(null)

  const playAllQueueRef = useRef(null)
  const playAllPosRef = useRef(0)
  const cancelTokenRef = useRef(0)
  const progressTimerRef = useRef(null)
  const progressRef = useRef(0)
  const cachedVoiceRef = useRef(null)

  // 检测浏览器与英文 voice 可用性
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setVoiceStatus('unsupported')
      return
    }
    const synth = window.speechSynthesis
    const check = () => {
      const voices = synth.getVoices()
      if (!voices || voices.length === 0) return
      const enVoice = voices.find(
        (v) => v.lang && v.lang.toLowerCase().startsWith('en')
      )
      if (enVoice) cachedVoiceRef.current = enVoice
      const hasEnglish = !!enVoice
      setVoiceStatus(hasEnglish ? 'ok' : 'no-english')
    }
    check()
    synth.addEventListener?.('voiceschanged', check)
    // 兜底：部分浏览器只在 onvoiceschanged 上挂载有效
    const prevHandler = synth.onvoiceschanged
    synth.onvoiceschanged = () => {
      prevHandler?.()
      check()
    }
    return () => {
      synth.removeEventListener?.('voiceschanged', check)
      if (synth.onvoiceschanged) synth.onvoiceschanged = null
    }
  }, [])

  const clearProgressTimer = useCallback(() => {
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current)
      progressTimerRef.current = null
    }
  }, [])

  const cleanup = useCallback(() => {
    cancelTokenRef.current += 1
    playAllQueueRef.current = null
    playAllPosRef.current = 0
    clearProgressTimer()
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel()
      } catch {
        /* ignore */
      }
    }
    setPlayingIndex(-1)
    setIsPlayingAll(false)
    setSegmentProgress(0)
    progressRef.current = 0
  }, [clearProgressTimer])

  const stop = useCallback(() => {
    cleanup()
  }, [cleanup])

  const clearError = useCallback(() => setError(null), [])

  const speak = useCallback(
    (text, { onEnd, onError } = {}) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        setError('当前浏览器不支持语音合成（Web Speech API）')
        onError && onError()
        return
      }
      const token = cancelTokenRef.current
      const synth = window.speechSynthesis

      const doSpeak = () => {
        if (token !== cancelTokenRef.current) return
        try {
          synth.cancel()
          // Chrome 长文本 bug 兜底：speak 后 paused 状态，需要 resume
          if (synth.paused) {
            try {
              synth.resume()
            } catch {
              /* ignore */
            }
          }
          const utter = new SpeechSynthesisUtterance(text)
          utter.lang = 'en-US'
          utter.rate = rate

          const enVoice = cachedVoiceRef.current
          if (enVoice) {
            utter.voice = enVoice
          } else {
            const voices = synth.getVoices()
            const found = voices.find(
              (v) => v.lang && v.lang.toLowerCase().startsWith('en')
            )
            if (found) {
              cachedVoiceRef.current = found
              utter.voice = found
            } else if (voices.length > 0) {
              // 系统无英文 voice：仍然 speak，但提示用户
              setError(
                '当前系统未安装英文语音包，朗读可能无声或不准确。请在系统设置中添加英语语音。'
              )
            }
          }

          // 进度跟踪：用 ref 避免 onboundary 与 timer 竞争导致进度回跳
          const startTime = Date.now()
          // 英文母语朗读约 14~16 字符/秒（含空格、150 wpm），rate 影响实际速度
          const estimatedDuration = Math.max(
            1500,
            (text.length / (14 * rate)) * 1000
          )
          progressRef.current = 0

          const updateProgress = (value) => {
            if (token !== cancelTokenRef.current) return
            const v = Math.min(100, Math.max(0, value))
            if (progressRef.current !== v) {
              progressRef.current = v
              setSegmentProgress(v)
            }
          }

          utter.onstart = () => {
            if (token !== cancelTokenRef.current) return
            clearProgressTimer()
            progressTimerRef.current = setInterval(() => {
              if (token !== cancelTokenRef.current) {
                clearProgressTimer()
                return
              }
              // Chrome 长文本 stuck bug 兜底：意外进入 paused 时拉回播放
              if (synth.paused && synth.speaking) {
                try {
                  synth.resume()
                } catch {
                  /* ignore */
                }
              }
              const elapsed = Date.now() - startTime
              const timeBased = (elapsed / estimatedDuration) * 100
              const next = Math.min(99, Math.max(progressRef.current, timeBased))
              updateProgress(next)
            }, 200)
          }

          utter.onboundary = (event) => {
            if (token !== cancelTokenRef.current) return
            if (typeof event.charIndex === 'number' && text.length > 0) {
              const bp =
                ((event.charIndex + (event.charLength || 0)) / text.length) * 100
              if (bp > progressRef.current) {
                progressRef.current = bp
                setSegmentProgress(Math.min(99, bp))
              }
            }
          }

          utter.onend = () => {
            clearProgressTimer()
            if (token !== cancelTokenRef.current) return
            updateProgress(100)
            onEnd && onEnd()
          }
          utter.onerror = (event) => {
            clearProgressTimer()
            if (token !== cancelTokenRef.current) return
            // 用户主动 cancel 也会触发 onerror({error:'canceled'})；不算失败
            if (
              event &&
              (event.error === 'canceled' || event.error === 'interrupted')
            )
              return
            const code = event?.error || 'unknown'
            const msgMap = {
              'not-allowed': '浏览器阻止了语音播放，请检查站点权限或重试',
              'audio-busy': '系统音频忙，请稍后再试',
              'audio-hardware': '系统音频设备不可用',
              'network': '语音引擎所需的网络资源加载失败',
              'synthesis-failed': '语音合成失败',
              'synthesis-unavailable': '语音合成不可用',
              'language-unavailable': '系统未安装英语语音包',
              'voice-unavailable': '找不到可用的语音',
              'text-too-long': '段落过长，浏览器拒绝朗读',
              'invalid-argument': '语音参数无效',
            }
            setError(msgMap[code] || `朗读失败（${code}）`)
            onError && onError(event)
          }
          synth.speak(utter)
        } catch (err) {
          clearProgressTimer()
          setError('启动语音合成时出错：' + (err?.message || String(err)))
          onError && onError(err)
        }
      }

      const voices = synth.getVoices()
      if (voices.length > 0) {
        doSpeak()
      } else {
        // 等待 voices 加载；Chrome/Edge 异步，Firefox 通常同步
        let fired = false
        const tryFire = () => {
          if (fired) return
          fired = true
          doSpeak()
        }
        const onVoices = () => {
          synth.removeEventListener?.('voiceschanged', onVoices)
          tryFire()
        }
        synth.addEventListener?.('voiceschanged', onVoices)
        // 给 voiceschanged 1.5s 时间；过了仍然尝试 doSpeak（让浏览器自己用默认 voice）
        setTimeout(tryFire, 1500)
      }
    },
    [rate, clearProgressTimer]
  )

  const playOne = useCallback(
    (text, index) => {
      if (!text) return
      // 再次点击同一段 = 停止
      if (!isPlayingAll && playingIndex === index) {
        cleanup()
        return
      }
      cleanup()
      setError(null)
      cancelTokenRef.current += 1
      progressRef.current = 0
      setIsPlayingAll(false)
      setPlayingIndex(index)
      setSegmentProgress(0)
      speak(text, {
        onEnd: () => {
          setPlayingIndex(-1)
          setSegmentProgress(0)
        },
        onError: () => {
          setPlayingIndex(-1)
          setSegmentProgress(0)
        },
      })
    },
    [cleanup, isPlayingAll, playingIndex, speak]
  )

  const playAll = useCallback(
    (paragraphs) => {
      // 再次点击 = 停止
      if (isPlayingAll) {
        cleanup()
        return
      }
      const list = Array.isArray(paragraphs)
        ? paragraphs.map((p) => (typeof p === 'string' ? p : p?.en || '')).filter(Boolean)
        : []
      if (list.length === 0) return

      cleanup()
      setError(null)
      cancelTokenRef.current += 1
      progressRef.current = 0
      playAllQueueRef.current = list
      playAllPosRef.current = 0
      setIsPlayingAll(true)
      setPlayingIndex(0)
      setSegmentProgress(0)

      const playNext = () => {
        const queue = playAllQueueRef.current
        const pos = playAllPosRef.current
        if (!queue || pos >= queue.length) {
          cleanup()
          return
        }
        setPlayingIndex(pos)
        setSegmentProgress(0)
        speak(queue[pos], {
          onEnd: () => {
            playAllPosRef.current += 1
            playNext()
          },
          onError: () => {
            cleanup()
          },
        })
      }
      playNext()
    },
    [cleanup, isPlayingAll, speak]
  )

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      cancelTokenRef.current += 1
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current)
        progressTimerRef.current = null
      }
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel()
        } catch {
          /* ignore */
        }
      }
    }
  }, [])

  return {
    playingIndex,
    isPlayingAll,
    segmentProgress,
    voiceStatus,
    error,
    playOne,
    playAll,
    stop,
    clearError,
  }
}
