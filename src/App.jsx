import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'sonner'
import Layout from './components/Layout'
import PageLoading from './components/PageLoading'

const Home = lazy(() => import('./pages/Home'))
const ChapterSelect = lazy(() => import('./pages/ChapterSelect'))
const Typing = lazy(() => import('./pages/Typing'))
const ReadingModule = lazy(() => import('./modules/reading'))
const ListeningPlaceholder = lazy(() => import('./modules/listening/ListeningPlaceholder'))

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'var(--color-surface)',
            color: 'var(--color-content)',
            border: '1px solid rgba(0,0,0,0.1)',
          },
        }}
      />
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/word" replace />} />
            <Route path="/word" element={<Home />} />
            <Route path="/read/*" element={<ReadingModule />} />
            <Route path="/reading" element={<Navigate to="/read" replace />} />
            <Route path="/listening" element={<ListeningPlaceholder />} />
            <Route path="/dict/:dictId" element={<ChapterSelect />} />
            <Route path="/typing/:dictId/:chapterId" element={<Typing />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
