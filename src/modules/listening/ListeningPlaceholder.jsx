export default function ListeningPlaceholder() {
  return (
    <div className="min-h-[calc(100vh-3rem-3.5rem)] md:min-h-[calc(100vh-4rem-3.5rem)] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center mb-6 shadow-card-light dark:shadow-card-dark">
        <svg className="w-10 h-10 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-14 0m7 7v4m-4 0h8m-12-11a4 4 0 118 0v3a4 4 0 11-8 0V7z" />
        </svg>
      </div>
      <h2 className="text-title text-content dark:text-gray-100 mb-2">语料中心</h2>
      <p className="text-body text-content-tertiary dark:text-gray-400">即将上线，敬请期待</p>
    </div>
  )
}
