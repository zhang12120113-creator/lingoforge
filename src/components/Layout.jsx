import { Link, Outlet, useLocation } from 'react-router-dom'
import StarryBackground from './StarryBackground'

function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark transition-colors duration-500 relative">
      <StarryBackground />
      <nav className="h-12 md:h-16 shrink-0 glass-card border-b border-gray-200/80 dark:border-white/[0.06] flex items-center justify-between px-4 md:px-6 sticky top-0 z-50 nav-glow transition-shadow duration-500">
        <Link to="/" className="text-xl font-bold text-primary dark:text-primary-dark flex items-center gap-2 transition-all duration-300 hover:opacity-90 dark:hover:drop-shadow-[0_0_8px_rgba(129,140,248,0.4)]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          LingoForge
        </Link>
        {!isHome && (
          <Link
            to="/"
            className="text-sm text-content-tertiary dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/[0.05]"
          >
            返回首页
          </Link>
        )}
      </nav>
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
