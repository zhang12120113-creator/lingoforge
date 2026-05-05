export default function TrainingCenter() {
  return (
    <div className="min-h-[calc(100vh-3rem-3.5rem)] md:min-h-[calc(100vh-4rem-3.5rem)] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center mb-6 shadow-card-light dark:shadow-card-dark">
        <svg className="w-10 h-10 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      </div>
      <h2 className="text-title text-content dark:text-gray-100 mb-2">训练中心</h2>
      <p className="text-body text-content-tertiary dark:text-gray-400">即将上线，敬请期待</p>
    </div>
  )
}
