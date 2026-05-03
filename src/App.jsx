import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import PageLoading from './components/PageLoading'

const Home = lazy(() => import('./pages/Home'))
const ChapterSelect = lazy(() => import('./pages/ChapterSelect'))
const Typing = lazy(() => import('./pages/Typing'))
const ReadingPlaceholder = lazy(() => import('./modules/reading/ReadingPlaceholder'))
const ListeningPlaceholder = lazy(() => import('./modules/listening/ListeningPlaceholder'))

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/word" replace />} />
          <Route path="/word" element={<Home />} />
          <Route path="/reading" element={<ReadingPlaceholder />} />
          <Route path="/listening" element={<ListeningPlaceholder />} />
          <Route path="/dict/:dictId" element={<ChapterSelect />} />
          <Route path="/typing/:dictId/:chapterId" element={<Typing />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
