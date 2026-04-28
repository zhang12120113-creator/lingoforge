import { useNavigate } from 'react-router-dom'
import { dictionaryMeta } from '../dictionaries/meta.js'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black p-6">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mt-12 mb-10 text-gray-900 dark:text-white">
          选择词库开始练习
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dictionaryMeta.map((dict) => (
            <div
              key={dict.id}
              onClick={() => navigate(`/dict/${dict.id}`)}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-800"
            >
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">{dict.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{dict.description}</p>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mt-3 inline-block">
                {dict.category}
              </span>
              <p className="text-sm text-gray-400 mt-2">
                共 {dict.totalChapters} 章
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
