import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bookmark, ChevronDown, BookOpen, Search, Volume2 } from 'lucide-react'
import {
  mockArticles,
  categories,
  years,
  totalCount,
  readingCount,
  listeningCount,
} from '../data/mockArticles'
import { useReadingStore } from '../hooks/useReadingStore'
import { getReadingWordBookCount } from '../../../utils/readingWordBook.js'
import ArticleCard from '../components/ArticleCard'

function Dropdown({ label, value, options, onChange, formatOption }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const display = value === '全部' ? label : (formatOption?.(value) || value)

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-2 glass-card rounded-button text-sm font-medium text-content-secondary dark:text-gray-300 hover:border-primary/40 transition-colors cursor-pointer"
      >
        <span>{display}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="dropdown-menu">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt)
                setOpen(false)
              }}
              className={`dropdown-item ${
                value === opt ? 'dropdown-item-active' : 'dropdown-item-inactive'
              }`}
            >
              {opt === '全部' ? label : (formatOption?.(opt) || opt)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ArticleList() {
  const navigate = useNavigate()
  const store = useReadingStore()

  const [categoryFilter, setCategoryFilter] = useState('全部')
  const [yearFilter, setYearFilter] = useState('全部')
  const [searchQuery, setSearchQuery] = useState('')
  const [bookmarkOnly, setBookmarkOnly] = useState(false)
  const [readingWordCount, setReadingWordCount] = useState(0)
  const scrollRestoredRef = useRef(false)

  useEffect(() => {
    if (scrollRestoredRef.current) return
    scrollRestoredRef.current = true

    setReadingWordCount(getReadingWordBookCount())
    const savedScroll = sessionStorage.getItem('reading_list_scroll')
    if (savedScroll !== null) {
      window.scrollTo({ top: parseInt(savedScroll, 10), behavior: 'instant' })
      sessionStorage.removeItem('reading_list_scroll')
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [])

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return mockArticles.filter((a) => {
      if (categoryFilter !== '全部' && a.category !== categoryFilter) return false
      if (yearFilter !== '全部' && String(a.year) !== yearFilter) return false
      if (bookmarkOnly && !store.bookmarks.includes(a.id)) return false
      if (q) {
        const hay = (
          (a.enTitle || a.title || '') +
          ' ' +
          (a.cnTitle || '') +
          ' ' +
          (a.description || '')
        ).toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [categoryFilter, yearFilter, bookmarkOnly, searchQuery, store.bookmarks])

  return (
    <div className="min-h-screen bg-background dark:bg-transparent p-4 md:p-6 transition-colors duration-500 animate-page-fade-in">
      <div className="max-w-6xl mx-auto px-2 md:px-6">
        {/* 顶部标题区 */}
        <div className="mt-10 md:mt-16 mb-8 md:mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="text-left">
              <h1 className="text-display gradient-text mb-3 tracking-tight text-glow-primary">
                阅读& 听力
              </h1>
              <p className="text-content-tertiary text-body max-w-xl leading-relaxed">
                精选英语文章，沉浸式阅读与听力体验，在语境中自然掌握词汇。
              </p>
              {/* 统计信息 */}
              <div className="mt-3 flex items-center gap-3 text-sm text-content-tertiary dark:text-gray-500">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  共 {totalCount} 篇
                </span>
                <span className="text-gray-300 dark:text-gray-700">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  阅读 {readingCount} 篇
                </span>
                <span className="text-gray-300 dark:text-gray-700">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5" />
                  听力 {listeningCount} 篇
                </span>
              </div>
            </div>

            {/* 筛选栏 */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <button
                onClick={() => navigate('/dict/reading-word-book')}
                className="flex items-center gap-2 px-4 py-2 glass-card rounded-button text-sm font-medium text-content-secondary dark:text-gray-300 hover:border-primary/40 transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>阅读词本</span>
                {readingWordCount > 0 && (
                  <span className="ml-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-500/20 px-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300">
                    {readingWordCount}
                  </span>
                )}
              </button>
              <Dropdown
                label="全部分类"
                value={categoryFilter}
                options={categories}
                onChange={setCategoryFilter}
              />
              <Dropdown
                label="全部年份"
                value={yearFilter}
                options={years.map(String)}
                onChange={setYearFilter}
              />
              <button
                onClick={() => setBookmarkOnly((v) => !v)}
                className={`flex items-center gap-2 px-4 py-2 rounded-button text-sm font-medium transition-colors cursor-pointer ${
                  bookmarkOnly
                    ? 'bg-primary text-white shadow-sm'
                    : 'glass-card text-content-secondary dark:text-gray-300 hover:border-primary/40'
                }`}
                aria-pressed={bookmarkOnly}
              >
                <Bookmark
                  className="w-4 h-4"
                  fill={bookmarkOnly ? 'currentColor' : 'none'}
                  strokeWidth={2}
                />
                <span>{bookmarkOnly ? '已收藏' : '只看收藏'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 搜索框 */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-content-tertiary dark:text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索标题或描述..."
              className="w-full pl-10 pr-4 py-2.5 bg-surface border border-gray-200 dark:border-white/[0.08] rounded-button text-sm text-content placeholder-gray-400 focus:outline-none focus:border-primary/50 transition-all"
            />
          </div>
        </div>

        {/* 卡片网格 */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((article, index) => (
              <div
                key={article.id}
                style={{ animationDelay: `${index * 0.05}s` }}
                className="animate-card-enter h-full"
              >
                <ArticleCard
                  article={article}
                  readPercent={store.getProgress(article.id)}
                  lastReadAt={store.getLastReadAt(article.id)}
                  isBookmarked={store.isBookmarked(article.id)}
                  onClick={() => {
                    sessionStorage.setItem('reading_list_scroll', String(window.scrollY))
                    navigate(`/reading/${article.id}`)
                  }}
                  onToggleBookmark={(id) => store.toggleBookmark(id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-card p-12 text-center">
            <p className="text-content-secondary dark:text-gray-300 mb-2">没有匹配的文章</p>
            <p className="text-sm text-content-tertiary dark:text-gray-500">
              试试调整筛选条件，或清除收藏过滤
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
