export default function ReadingPlaceholder() {
  return (
    <div className="min-h-[calc(100vh-3rem-3.5rem)] md:min-h-[calc(100vh-4rem-3.5rem)] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center mb-6 shadow-card-light dark:shadow-card-dark">
        <svg className="w-10 h-10 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h2 className="text-title text-content dark:text-gray-100 mb-2">阅读模块</h2>
      <p className="text-body text-content-tertiary dark:text-gray-400">即将上线，敬请期待</p>
    </div>
  )
}
