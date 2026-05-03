import { Link, useLocation } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

const items = [
  {
    to: '/word',
    label: '单词',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    to: '/read',
    label: '阅读',
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    to: '/listening',
    label: '听力',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-14 0m7 7v4m-4 0h8m-12-11a4 4 0 118 0v3a4 4 0 11-8 0V7z" />
      </svg>
    ),
  },
]

export default function BottomNav() {
  const location = useLocation()

  const isActive = (path) => {
    if (location.pathname === path) return true
    if (path !== '/' && location.pathname.startsWith(path + '/')) return true
    return false
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-gray-200/80 dark:border-white/[0.06] backdrop-blur-md">
      <div className="max-w-4xl mx-auto flex justify-around items-center h-14">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors ${
              isActive(item.to)
                ? 'text-primary dark:text-primary-dark'
                : 'text-content-tertiary dark:text-gray-400 hover:text-content-secondary dark:hover:text-gray-300'
            }`}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
