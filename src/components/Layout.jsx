import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors">
      <nav className="h-16 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6">
        <Link to="/" className="text-xl font-bold text-indigo-600 dark:text-white">
          TypingWord
        </Link>
        <Link
          to="/"
          className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          返回首页
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
