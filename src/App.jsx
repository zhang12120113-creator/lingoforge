import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import PageLoading from './components/PageLoading'

const Home = lazy(() => import('./pages/Home'))
const ChapterSelect = lazy(() => import('./pages/ChapterSelect'))
const Typing = lazy(() => import('./pages/Typing'))
const ReadingRoutes = lazy(() => import('./modules/reading/ReadingRoutes'))
const ReadingLandingPage = lazy(() => import('./modules/reading/pages/ReadingLandingPage'))
const ArticleListPage = lazy(() => import('./modules/reading/pages/ArticleListPage'))
const ArticleReadPage = lazy(() => import('./modules/reading/pages/ArticleReadPage'))
const NotebookPage = lazy(() => import('./modules/reading/pages/NotebookPage'))
const StatsPage = lazy(() => import('./modules/reading/pages/StatsPage'))
const ListeningPlaceholder = lazy(() => import('./modules/listening/ListeningPlaceholder'))

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/word" replace />} />
          <Route path="/word" element={<Home />} />
          <Route path="/read" element={<ReadingRoutes />}>
            <Route path="" element={<ReadingLandingPage />} />
            <Route path="articles" element={<ArticleListPage />} />
            <Route path="article/:id" element={<ArticleReadPage />} />
            <Route path="notebook" element={<NotebookPage />} />
            <Route path="stats" element={<StatsPage />} />
          </Route>
          <Route path="/reading" element={<Navigate to="/read" replace />} />
          <Route path="/listening" element={<ListeningPlaceholder />} />
          <Route path="/dict/:dictId" element={<ChapterSelect />} />
          <Route path="/typing/:dictId/:chapterId" element={<Typing />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
