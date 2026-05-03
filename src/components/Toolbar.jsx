import { Link, useLocation } from 'react-router-dom'
import { ChartColumn } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useUserConfig } from '../hooks/useUserConfig'

export default function Toolbar() {
  const { theme, setTheme } = useUserConfig()
  const location = useLocation()
  const isStats = location.pathname === '/stats'

  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Link
        to="/stats"
        aria-label="学习数据"
        title="学习数据"
        className={`p-1 md:p-2 rounded-button transition-colors flex flex-col items-center gap-1 ${
          isStats
            ? 'text-primary dark:text-primary-dark bg-primary/5 dark:bg-white/[0.05]'
            : 'text-content-secondary dark:text-gray-400 hover:bg-primary/5 dark:hover:bg-white/[0.05]'
        }`}
      >
        <ChartColumn className="w-5 h-5 md:w-[18px] md:h-[18px]" />
        <span className="text-[11px] hidden sm:inline leading-none">学习数据</span>
      </Link>
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </div>
  )
}
