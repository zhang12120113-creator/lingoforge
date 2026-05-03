import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Bookmark, Clock, FileText } from 'lucide-react'
import {
  estimateReadingMinutes,
  getArticleById,
} from '../data/mockArticles'
import { useReadingStore } from '../hooks/useReadingStore'

const DIFFICULTY_DOT = {
  '初级': 'bg-emerald-500',
  '中级': 'bg-amber-500',
  '高级': 'bg-rose-500',
}

const CATEGORY_TAG = {
  '商业': 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300',
  '生活': 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
  '科技': 'bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300',
  '文化': 'bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300',
  '社会': 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300',
  '历史': 'bg-stone-50 text-stone-600 dark:bg-stone-500/10 dark:text-stone-300',
  '自然': 'bg-lime-50 text-lime-600 dark:bg-lime-500/10 dark:text-lime-300',
  '考试': 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300',
}

export default function ArticleDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const store = useReadingStore()
  const article = useMemo(() => getArticleById(id), [id])
  const contentRef = useRef(null)
  const persistTimer = useRef(null)
  const [progress, setProgress] = useState(() => store.getProgress(id))

  useEffect(() => {
    if (!article) return
    const initial = store.getProgress(id)
    setProgress(initial)
    window.scrollTo({ top: 0 })
    // Mark visited so the list page reflects the open
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
      // Progress = how far the bottom of the viewport has read into the article
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

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-content-secondary dark:text-gray-300 mb-4">没有找到这篇文章</p>
        <button
          onClick={() => navigate('/read')}
          className="btn-secondary"
        >
          返回列表
        </button>
      </div>
    )
  }

  const tagClass = CATEGORY_TAG[article.category] || 'bg-gray-100 text-gray-600 dark:bg-white/[0.06] dark:text-gray-300'
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
            <Bookmark
              className="w-4 h-4"
              fill={isBookmarked ? 'currentColor' : 'none'}
              strokeWidth={2}
            />
          </button>
        </div>
        {/* 顶部进度条 */}
        <div className="h-0.5 w-full bg-gray-100 dark:bg-white/[0.05] overflow-hidden">
          <div
            className="h-full bg-primary transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
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

        {/* 正文 */}
        <div
          className="text-[17px] md:text-lg leading-[1.85] text-content dark:text-gray-200 [&>p]:mb-5 [&>p:last-child]:mb-0 [&_strong]:font-semibold [&_strong]:text-content [&_strong]:dark:text-gray-100 [&_em]:italic [&_em]:text-content-secondary [&_em]:dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {/* 底部空间 */}
      <div className="h-20" />
    </div>
  )
}
