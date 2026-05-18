import { lazy, useRef, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ArticleList from './pages/ArticleList'
import ArticleDetail from './pages/ArticleDetail'

const GrammarModule = lazy(() => import('../grammar'))

export default function ReadingModule() {
  const scrollRef = useRef(0)
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route index element={<ArticleList scrollRef={scrollRef} />} />
        <Route path="grammar/*" element={<GrammarModule />} />
        <Route path=":id" element={<ArticleDetail />} />
      </Routes>
    </Suspense>
  )
}
