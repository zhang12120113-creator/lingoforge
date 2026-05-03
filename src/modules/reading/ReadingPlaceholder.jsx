import { BookOpen } from 'lucide-react'

export default function ReadingPlaceholder() {
  return (
    <div className="min-h-[calc(100vh-3rem-3.5rem)] md:min-h-[calc(100vh-4rem-3.5rem)] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center mb-6 shadow-card-light dark:shadow-card-dark">
        <BookOpen className="w-10 h-10 text-primary dark:text-primary-dark" />
      </div>
      <h2 className="text-title text-content dark:text-gray-100 mb-2">阅读模块</h2>
      <p className="text-body text-content-tertiary dark:text-gray-400">即将上线，敬请期待</p>
    </div>
  )
}
