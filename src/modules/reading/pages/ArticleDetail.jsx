import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Bookmark, ChevronDown, Clock, FileText, Headphones, Pause, Play } from 'lucide-react'
import { estimateReadingMinutes, getArticleById } from '../data/mockArticles'
import { useReadingStore } from '../hooks/useReadingStore'
import useStudyTracker from '../hooks/useStudyTracker'
import { loadDictionary } from '../../../utils/loadDictionary.js'
import {
  addToReadingWordBook,
  isInReadingWordBook,
  removeFromReadingWordBook,
} from '../../../utils/readingWordBook.js'
import WordPopup from '../components/WordPopup.jsx'

const FULL_TEXT_INDEX = -1

const DIFFICULTY_DOT = {
  初级: 'bg-emerald-500',
  中级: 'bg-amber-500',
  高级: 'bg-rose-500',
}

const CATEGORY_TAG = {
  商业: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300',
  生活: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
  科技: 'bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300',
  文化: 'bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300',
  社会: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300',
  历史: 'bg-stone-50 text-stone-600 dark:bg-stone-500/10 dark:text-stone-300',
  自然: 'bg-lime-50 text-lime-600 dark:bg-lime-500/10 dark:text-lime-300',
  考试: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300',
}

function formatTime(seconds) {
  const s = Math.max(0, Math.floor(seconds))
  const m = Math.floor(s / 60)
  const rem = s % 60
  return `${m}:${rem.toString().padStart(2, '0')}`
}

// 行内元素的 getBoundingClientRect 会包含 line-height 带来的额外空间，
// getClientRects()[0] 通常更贴近实际渲染的文本边界。
function getWordRect(target) {
  if (!target) return null
  if (typeof target.getClientRects === 'function') {
    const rects = target.getClientRects()
    if (rects && rects.length > 0) return rects[0]
  }
  return typeof target.getBoundingClientRect === 'function'
    ? target.getBoundingClientRect()
    : null
}

const isValidWord = (str) => {
  if (!str || typeof str !== 'string') return false
  return /[a-zA-Z]/.test(str)
}

const cleanWordForLookup = (raw) => {
  if (!raw) return ''
  return raw.replace(/^[^a-zA-Z]+|[^a-zA-Z]+$/g, '').toLowerCase()
}

const renderParagraph = (text, paraIndex, onWordClick) => {
  if (!text || typeof text !== 'string') {
    console.warn(`[Reading] Paragraph ${paraIndex} is not string:`, text)
    return <p className="article-paragraph" key={paraIndex}>{text}</p>
  }

  let decoded = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")

  const elements = []
  const regex = /[a-zA-Z]+(?:['-][a-zA-Z0-9]+)*/g
  let match
  let lastIndex = 0

  while ((match = regex.exec(decoded)) !== null) {
    const rawWord = match[0]
    const index = match.index

    if (index > lastIndex) {
      elements.push(
        <span key={`${paraIndex}-pre-${lastIndex}`} className="non-clickable">
          {decoded.slice(lastIndex, index)}
        </span>
      )
    }

    const lookupWord = cleanWordForLookup(rawWord)

    if (isValidWord(lookupWord)) {
      elements.push(
        <span
          key={`${paraIndex}-word-${index}`}
          className="word-clickable cursor-pointer hover:underline hover:opacity-80 transition-opacity select-none"
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            onWordClick(lookupWord, getWordRect(e.target), e.target)
          }}
          title={lookupWord}
        >
          {rawWord}
        </span>
      )
    } else {
      elements.push(
        <span key={`${paraIndex}-txt-${index}`}>{rawWord}</span>
      )
    }

    lastIndex = index + rawWord.length
  }

  if (lastIndex < decoded.length) {
    elements.push(
      <span key={`${paraIndex}-post-${lastIndex}`} className="non-clickable">
        {decoded.slice(lastIndex)}
      </span>
    )
  }

  return (
    <p className="article-paragraph text-[17px] md:text-lg leading-[1.85] text-content dark:text-gray-200" key={paraIndex}>
      {elements}
    </p>
  )
}

function ParagraphBlock({ en, zh, index, audioState, onToggle, onSeek, onWordClick }) {
  const [showTrans, setShowTrans] = useState(false)
  const id = `para-${index}`
  const isActive = audioState.currentIndex === index
  const isPlaying = isActive && audioState.status === 'playing'

  function handleSeek(e) {
    if (!isActive) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    onSeek(index, en, ratio)
  }

  return (
    <div
      id={id}
      className="group mb-4 rounded-2xl bg-[#e8e6e1] dark:bg-white/[0.05] p-5 md:p-6 transition-colors"
    >
      <div className="flex items-start gap-3.5">
        {/* 播放按钮 */}
        <button
          className={`mt-1 shrink-0 w-8 h-8 rounded-full shadow-sm flex items-center justify-center transition-colors ${
            isActive
              ? 'bg-primary text-white'
              : 'bg-white dark:bg-white/10 text-content-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primary'
          }`}
          aria-label={isPlaying ? '暂停' : '朗读'}
          onClick={() => onToggle(index, en)}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          )}
        </button>

        {/* 英文段落 */}
        <div className="flex-1 min-w-0">
          {renderParagraph(en, index, onWordClick)}
        </div>
      </div>

      {/* 翻译切换 */}
      <div className="mt-3 pl-11">
        <button
          onClick={() => setShowTrans((s) => !s)}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-content-tertiary dark:text-gray-500 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
        >
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${showTrans ? 'rotate-180' : ''}`}
          />
          <span>{showTrans ? '隐藏翻译' : '显示翻译'}</span>
        </button>
      </div>

      {/* 中文翻译（可折叠） */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${showTrans ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="mt-3 pl-11 border-l-2 border-primary/30 dark:border-primary/40">
            <p className="text-[15px] md:text-base leading-[1.8] text-content-secondary dark:text-gray-400 pl-4">
              {zh}
            </p>
          </div>
        </div>
      </div>

      {/* 朗读进度条 */}
      {isActive && (
        <div className="mt-4 pl-11">
          <div className="flex items-center gap-2">
            <span className="text-xs tabular-nums text-content-tertiary dark:text-gray-500 w-10 text-right">
              {formatTime(audioState.elapsed)}
            </span>
            <div
              className="flex-1 h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden cursor-pointer"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-primary rounded-full transition-[width] duration-100"
                style={{ width: `${audioState.progress}%` }}
              />
            </div>
            <span className="text-xs tabular-nums text-content-tertiary dark:text-gray-500 w-10">
              {formatTime(audioState.duration)}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ArticleDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const store = useReadingStore()
  const article = useMemo(() => getArticleById(id), [id])
  const fullText = useMemo(
    () => (article ? article.paragraphs.map((p) => p.en).join(' ') : ''),
    [article],
  )
  const contentRef = useRef(null)
  const persistTimer = useRef(null)
  const [progress, setProgress] = useState(() => store.getProgress(id))

  // TTS 播放器状态
  const [audioState, setAudioState] = useState({
    currentIndex: null,
    status: 'idle',
    progress: 0,
    elapsed: 0,
    duration: 0,
  })
  const utteranceRef = useRef(null)
  const timerRef = useRef(null)
  const elapsedRef = useRef(0)
  const currentUtteranceRef = useRef(null)

  // Word lookup states
  const [wordMap, setWordMap] = useState(new Map())
  const [popup, setPopup] = useState(null)
  const activeTokenRef = useRef(null)

  useStudyTracker(article ? id : null)

  // Load all dictionaries for word lookup
  useEffect(() => {
    let cancelled = false
    const loadAll = async () => {
      const dictIds = [
        'junior', 'zhongkao', 'senior', 'gaokao',
        'cet4', 'cet4freq', 'cet6', 'cet6freq',
        'tem4', 'tem8', 'ielts', 'toefl', 'sat',
        'postgraduate', 'programmer',
      ]
      const results = await Promise.all(
        dictIds.map((id) => loadDictionary(id).catch(() => null))
      )
      if (cancelled) return
      const map = new Map()
      results.forEach((dict) => {
        if (!dict?.chapters) return
        dict.chapters.forEach((ch) => {
          if (!ch?.words) return
          ch.words.forEach((w) => {
            if (w?.name) {
              map.set(w.name.toLowerCase(), w)
            }
          })
        })
      })
      setWordMap(map)
    }
    loadAll()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!article) return
    const initial = store.getProgress(id)
    setProgress(initial)
    window.scrollTo({ top: 0 })
    if (!store.lastReadAt[id]) {
      store.setProgress(id, Math.max(initial, 1))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    if (!article) return
    function updateProgress() {
      const el = contentRef.current
      if (!el) return
      const docEl = document.documentElement
      const scrollTop = window.scrollY || docEl.scrollTop || 0
      const elTop = el.offsetTop
      const elHeight = el.offsetHeight
      const viewport = window.innerHeight || docEl.clientHeight || 0
      const readEnd = scrollTop + viewport
      const articleEnd = elTop + elHeight
      const articleStart = elTop
      let pct = ((readEnd - articleStart) / (articleEnd - articleStart)) * 100
      if (!Number.isFinite(pct)) pct = 0
      pct = Math.max(0, Math.min(100, Math.round(pct)))
      setProgress(pct)
      if (persistTimer.current) clearTimeout(persistTimer.current)
      persistTimer.current = setTimeout(() => {
        store.setProgress(id, pct)
      }, 400)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      if (persistTimer.current) clearTimeout(persistTimer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, article])

  // 估算段落朗读时长（秒）
  function estimateDuration(text) {
    const cleanText = text.replace(/<[^>]+>/g, '')
    const wordCount = cleanText.trim().split(/\s+/).filter(Boolean).length
    return Math.max(1, Math.ceil(wordCount / 2.2))
  }

  function startProgressTimer(duration, initialElapsed = 0) {
    if (timerRef.current) clearInterval(timerRef.current)
    elapsedRef.current = initialElapsed
    timerRef.current = setInterval(() => {
      elapsedRef.current += 0.1
      const progress = Math.min(100, (elapsedRef.current / duration) * 100)
      setAudioState((prev) => ({ ...prev, elapsed: elapsedRef.current, progress }))
    }, 100)
  }

  function stopProgressTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  function resetAudioState() {
    stopProgressTimer()
    setAudioState({
      currentIndex: null,
      status: 'idle',
      progress: 0,
      elapsed: 0,
      duration: 0,
    })
    elapsedRef.current = 0
    currentUtteranceRef.current = null
  }

  function playParagraph(index, text, startRatio = 0) {
    window.speechSynthesis.cancel()
    const fullText = text.replace(/<[^>]+>/g, '')
    const allWords = fullText.trim().split(/\s+/).filter(Boolean)

    const targetWordIndex = Math.floor(startRatio * allWords.length)
    const remainingWords = allWords.slice(targetWordIndex)
    const cleanText = remainingWords.join(' ')

    const fullDuration = estimateDuration(fullText)

    if (cleanText.length === 0) {
      resetAudioState()
      return
    }

    const startElapsed = (targetWordIndex / allWords.length) * fullDuration
    const startProgress = (targetWordIndex / allWords.length) * 100

    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.lang = 'en-US'
    utterance.rate = 0.9

    const thisUtterance = utterance
    currentUtteranceRef.current = thisUtterance

    utterance.onstart = () => {
      if (currentUtteranceRef.current !== thisUtterance) return
      setAudioState({
        currentIndex: index,
        status: 'playing',
        progress: startProgress,
        elapsed: startElapsed,
        duration: fullDuration,
      })
      elapsedRef.current = startElapsed
      startProgressTimer(fullDuration, startElapsed)
    }

    utterance.onend = () => {
      if (currentUtteranceRef.current !== thisUtterance) return
      resetAudioState()
    }

    utterance.onboundary = (e) => {
      if (currentUtteranceRef.current !== thisUtterance) return
      if (e.name === 'word' || e.name === 'sentence') {
        const relativeProgress = cleanText.length > 0 ? (e.charIndex / cleanText.length) : 0
        const actualProgress = Math.min(100, startProgress + relativeProgress * (100 - startProgress))
        elapsedRef.current = startElapsed + relativeProgress * (fullDuration - startElapsed)
        setAudioState((prev) => ({
          ...prev,
          progress: actualProgress,
          elapsed: elapsedRef.current,
        }))
      }
    }

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }

  function seekParagraph(index, text, ratio) {
    if (audioState.currentIndex !== index) return
    stopProgressTimer()
    window.speechSynthesis.cancel()

    // 立即更新 UI，消除 TTS 引擎启动带来的延迟感
    const fullText = text.replace(/<[^>]+>/g, '')
    const allWords = fullText.trim().split(/\s+/).filter(Boolean)
    const targetWordIndex = Math.floor(ratio * allWords.length)
    const fullDuration = estimateDuration(fullText)
    const startElapsed = (targetWordIndex / allWords.length) * fullDuration
    const startProgress = (targetWordIndex / allWords.length) * 100

    setAudioState({
      currentIndex: index,
      status: 'playing',
      progress: startProgress,
      elapsed: startElapsed,
      duration: fullDuration,
    })
    elapsedRef.current = startElapsed

    playParagraph(index, text, ratio)
  }

  function toggleParagraph(index, text) {
    if (audioState.currentIndex === index) {
      if (audioState.status === 'playing') {
        window.speechSynthesis.pause()
        stopProgressTimer()
        setAudioState((prev) => ({ ...prev, status: 'paused' }))
      } else if (audioState.status === 'paused') {
        window.speechSynthesis.resume()
        startProgressTimer(audioState.duration)
        setAudioState((prev) => ({ ...prev, status: 'playing' }))
      }
    } else {
      playParagraph(index, text)
    }
  }

  // 单词点击：直接弹出查词面板
  function handleWordClick(word, rect, tokenEl) {
    console.log('[Reading] Word clicked:', word, tokenEl)
    if (!word) return
    const cleanWord = word.toLowerCase().trim().replace(/[^a-z'-]/g, '')
    if (!cleanWord) return

    if (activeTokenRef.current) {
      activeTokenRef.current.classList.remove('word-token-active')
    }
    if (tokenEl) {
      tokenEl.classList.add('word-token-active')
      activeTokenRef.current = tokenEl
    }

    const wordData = wordMap.get(cleanWord) || {
      name: cleanWord,
      usphone: '',
      ukphone: '',
      trans: [],
    }
    setPopup({
      wordData,
      rect,
      isSaved: isInReadingWordBook(wordData.name),
    })
  }

  function handleSaveWord() {
    if (!popup?.wordData) return
    addToReadingWordBook({
      ...popup.wordData,
      sourceArticleId: id,
    })
    setPopup((prev) => (prev ? { ...prev, isSaved: true } : null))
  }

  function handleRemoveWord() {
    if (!popup?.wordData) return
    removeFromReadingWordBook(popup.wordData.name)
    setPopup((prev) => (prev ? { ...prev, isSaved: false } : null))
  }

  function handleClosePopup() {
    if (activeTokenRef.current) {
      activeTokenRef.current.classList.remove('word-token-active')
      activeTokenRef.current = null
    }
    setPopup(null)
  }

  // 切换文章或卸载时停止语音
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel()
      stopProgressTimer()
    }
  }, [id])

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-content-secondary dark:text-gray-300 mb-4">没有找到这篇文章</p>
        <button onClick={() => navigate('/read')} className="btn-secondary">
          返回列表
        </button>
      </div>
    )
  }

  const tagClass =
    CATEGORY_TAG[article.category] ||
    'bg-gray-100 text-gray-600 dark:bg-white/[0.06] dark:text-gray-300'
  const dotClass = DIFFICULTY_DOT[article.difficulty] || 'bg-gray-400'
  const isBookmarked = store.isBookmarked(article.id)
  const readingMinutes = estimateReadingMinutes(article.wordCount)

  return (
    <div className="min-h-screen bg-background dark:bg-transparent transition-colors duration-500 animate-page-fade-in">
      {/* 顶部返回栏 */}
      <div className="sticky top-12 md:top-16 z-40 glass-card border-b border-gray-200/70 dark:border-white/[0.06] backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 md:px-6 h-12 flex items-center justify-between gap-3">
          <button
            onClick={() => navigate('/read')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm text-content-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回列表</span>
          </button>
          <div className="flex-1 min-w-0 text-center">
            <p className="text-sm font-medium text-content dark:text-gray-200 truncate px-3">
              {article.title}
            </p>
          </div>
          <button
            onClick={() => store.toggleBookmark(article.id)}
            aria-label={isBookmarked ? '取消收藏' : '收藏文章'}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150 active:scale-90 ${
              isBookmarked
                ? 'text-amber-500 bg-amber-50 dark:bg-amber-500/15'
                : 'text-content-tertiary dark:text-gray-400 hover:text-amber-500 hover:bg-amber-50/60 dark:hover:bg-amber-500/10'
            }`}
          >
            <Bookmark className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} strokeWidth={2} />
          </button>
        </div>
        {/* 顶部进度条 */}
        <div className="h-0.5 w-full bg-gray-100 dark:bg-white/[0.05] overflow-hidden">
          <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* 阅读区 */}
      <article ref={contentRef} className="max-w-3xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* 分类标签 */}
        <div className="mb-4">
          <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${tagClass}`}>
            {article.category}
          </span>
        </div>

        {/* 标题 */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-content dark:text-gray-100 mb-5">
          {article.title}
        </h1>

        {/* 元信息 */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-content-tertiary dark:text-gray-500 mb-8">
          <div className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${dotClass}`} />
            <span>{article.difficulty}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5" />
            <span>{article.wordCount} 词</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>约 {readingMinutes} 分钟</span>
          </div>
        </div>

        {/* 中文摘要 */}
        <div className="mb-8 p-4 md:p-5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border-l-4 border-primary/60">
          <p className="text-sm md:text-[15px] text-content-secondary dark:text-gray-300 leading-relaxed">
            {article.description}
          </p>
        </div>

        {/* 听全文 */}
        {(() => {
          const isFullActive = audioState.currentIndex === FULL_TEXT_INDEX
          const isFullPlaying = isFullActive && audioState.status === 'playing'
          function handleFullSeek(e) {
            if (!isFullActive) return
            const rect = e.currentTarget.getBoundingClientRect()
            const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
            seekParagraph(FULL_TEXT_INDEX, fullText, ratio)
          }
          return (
            <div className="mb-8 p-4 md:p-5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
              <div className="flex items-center gap-3">
                <button
                  className={`shrink-0 w-10 h-10 rounded-full shadow-sm flex items-center justify-center transition-colors ${
                    isFullActive
                      ? 'bg-primary text-white'
                      : 'bg-white dark:bg-white/10 text-content-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primary'
                  }`}
                  aria-label={isFullPlaying ? '暂停全文朗读' : '朗读全文'}
                  onClick={() => toggleParagraph(FULL_TEXT_INDEX, fullText)}
                >
                  {isFullPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </button>
                <div className="flex items-center gap-1.5 text-sm font-medium text-content dark:text-gray-200">
                  <Headphones className="w-4 h-4 text-primary" />
                  <span>听全文</span>
                </div>
              </div>
              {isFullActive && (
                <div className="mt-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs tabular-nums text-content-tertiary dark:text-gray-500 w-10 text-right">
                      {formatTime(audioState.elapsed)}
                    </span>
                    <div
                      className="flex-1 h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden cursor-pointer"
                      onClick={handleFullSeek}
                    >
                      <div
                        className="h-full bg-primary rounded-full transition-[width] duration-100"
                        style={{ width: `${audioState.progress}%` }}
                      />
                    </div>
                    <span className="text-xs tabular-nums text-content-tertiary dark:text-gray-500 w-10">
                      {formatTime(audioState.duration)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )
        })()}

        {/* 正文段落 */}
        <div>
          {article.paragraphs.map((para, i) => (
            <ParagraphBlock
              key={i}
              index={i}
              en={para.en}
              zh={para.zh}
              audioState={audioState}
              onToggle={toggleParagraph}
              onSeek={seekParagraph}
              onWordClick={handleWordClick}
            />
          ))}
        </div>
      </article>

      {/* 底部空间 */}
      <div className="h-20" />

      {/* 单词弹窗 */}
      {popup && (
        <WordPopup
          wordData={popup.wordData}
          rect={popup.rect}
          isSaved={popup.isSaved}
          onSave={handleSaveWord}
          onRemove={handleRemoveWord}
          onClose={handleClosePopup}
        />
      )}
    </div>
  )
}
