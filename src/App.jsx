import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import PageLoading from './components/PageLoading'

const Home = lazy(() => import('./pages/Home'))
const ChapterSelect = lazy(() => import('./pages/ChapterSelect'))
const Typing = lazy(() => import('./pages/Typing'))

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dict/:dictId" element={<ChapterSelect />} />
          <Route path="/typing/:dictId/:chapterId" element={<Typing />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
