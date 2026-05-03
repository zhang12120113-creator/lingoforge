import { ArrowRight, Bookmark } from 'lucide-react'
import { formatLastRead } from '../hooks/useReadingStore'

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

const DEFAULT_TAG = 'bg-gray-100 text-gray-600 dark:bg-white/[0.06] dark:text-gray-300'

export default function ArticleCard({
  article,
  readPercent = 0,
  lastReadAt,
  isBookmarked = false,
  onClick,
  onToggleBookmark,
}) {
  const tagClass = CATEGORY_TAG[article.category] || DEFAULT_TAG
  const dotClass = DIFFICULTY_DOT[article.difficulty] || 'bg-gray-400'
  const dateLabel = formatLastRead(lastReadAt)
  const hasRead = readPercent > 0

  return (
    <div
      onClick={onClick}
      className="group card card-hover relative overflow-hidden cursor-pointer animate-card-enter glow-border-subtle active:scale-[0.98] transition-transform duration-150 flex flex-col"
    >
      {/* 顶部装饰条 — 根据是否读过显示 primary 或半透明 */}
      <div
        className={`absolute top-0 left-0 w-full h-1 ${
          hasRead ? 'bg-primary opacity-90' : article.coverColor || 'bg-primary/40'
        }`}
      />

      {/* 收藏按钮 */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onToggleBookmark?.(article.id)
        }}
        aria-label={isBookmarked ? '取消收藏' : '收藏文章'}
        className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150 active:scale-90 ${
          isBookmarked
            ? 'text-amber-500 bg-amber-50 dark:bg-amber-500/15'
            : 'text-content-tertiary dark:text-gray-500 hover:text-amber-500 hover:bg-amber-50/60 dark:hover:bg-amber-500/10'
        }`}
      >
        <Bookmark
          className="w-4 h-4"
          strokeWidth={2}
          fill={isBookmarked ? 'currentColor' : 'none'}
        />
      </button>

      <div className="p-6 flex flex-col flex-1">
        {/* 元信息行 */}
        <div className="flex items-center gap-2 text-xs text-content-tertiary dark:text-gray-500 mb-3 pr-10">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              hasRead ? 'bg-primary' : 'bg-content-tertiary/50 dark:bg-gray-600'
            }`}
          />
          {hasRead ? (
            <span>
              已读 {readPercent}%{dateLabel ? ` · ${dateLabel}` : ''}
            </span>
          ) : (
            <span>未读</span>
          )}
        </div>

        {/* 分类标签 */}
        <div>
          <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-3 ${tagClass}`}>
            {article.category}
          </span>
        </div>

        {/* 英文标题 */}
        <h3 className="text-xl font-bold leading-tight mb-3 text-content dark:text-gray-100 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>

        {/* 中文描述 */}
        <p className="text-sm text-content-tertiary dark:text-gray-400 line-clamp-3 mb-4 leading-relaxed flex-1">
          {article.description}
        </p>

        {/* 分隔线 */}
        <div className="border-t border-gray-200/70 dark:border-white/[0.06]" />

        {/* 底部 */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${dotClass}`} />
            <span className="text-sm text-content-secondary dark:text-gray-300">
              {article.difficulty}
            </span>
            <span className="text-xs text-content-tertiary dark:text-gray-500 ml-1">
              · {article.wordCount} 词
            </span>
          </div>
          <button
            type="button"
            tabIndex={-1}
            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/[0.06] text-content-secondary dark:text-gray-300 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
