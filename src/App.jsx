import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ChapterSelect from './pages/ChapterSelect'
import Typing from './pages/Typing'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dict/:dictId" element={<ChapterSelect />} />
        <Route path="/typing/:dictId/:chapterId" element={<Typing />} />
      </Route>
    </Routes>
  )
}

export default App
