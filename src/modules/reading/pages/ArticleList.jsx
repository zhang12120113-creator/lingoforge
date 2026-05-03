import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bookmark, ChevronDown } from 'lucide-react'
import { mockArticles, categoryOptions, difficultyOptions } from '../data/mockArticles'
import { useReadingStore } from '../hooks/useReadingStore'
import ArticleCard from '../components/ArticleCard'

function Dropdown({ label, value, options, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const display = value === '全部' ? label : value

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
              {opt === '全部' ? label : opt}
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
  const [difficultyFilter, setDifficultyFilter] = useState('全部')
  const [bookmarkOnly, setBookmarkOnly] = useState(false)

  const filtered = useMemo(() => {
    return mockArticles.filter((a) => {
      if (categoryFilter !== '全部' && a.category !== categoryFilter) return false
      if (difficultyFilter !== '全部' && a.difficulty !== difficultyFilter) return false
      if (bookmarkOnly && !store.bookmarks.includes(a.id)) return false
      return true
    })
  }, [categoryFilter, difficultyFilter, bookmarkOnly, store.bookmarks])

  return (
    <div className="min-h-screen bg-background dark:bg-transparent p-4 md:p-6 transition-colors duration-500 animate-page-fade-in">
      <div className="max-w-6xl mx-auto px-2 md:px-6">
        {/* 顶部标题区 */}
        <div className="mt-10 md:mt-16 mb-10 md:mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="text-left">
              <h1 className="text-display gradient-text mb-3 tracking-tight text-glow-primary">
                阅读 &amp; 学习
              </h1>
              <p className="text-content-tertiary text-body max-w-xl leading-relaxed">
                精选英语文章，沉浸式阅读体验，在语境中自然掌握词汇。
              </p>
            </div>

            {/* 筛选栏 */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <Dropdown
                label="全部类型"
                value={categoryFilter}
                options={categoryOptions}
                onChange={setCategoryFilter}
              />
              <Dropdown
                label="全部难度"
                value={difficultyFilter}
                options={difficultyOptions}
                onChange={setDifficultyFilter}
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

        {/* 卡片网格 */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((article, index) => (
              <div
                key={article.id}
                style={{ animationDelay: `${index * 0.05}s` }}
                className="animate-card-enter"
              >
                <ArticleCard
                  article={article}
                  readPercent={store.getProgress(article.id)}
                  lastReadAt={store.getLastReadAt(article.id)}
                  isBookmarked={store.isBookmarked(article.id)}
                  onClick={() => navigate(`/read/${article.id}`)}
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
