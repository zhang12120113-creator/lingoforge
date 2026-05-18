import { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import CorpusList from './pages/CorpusList'
import CorpusPlayer from './pages/CorpusPlayer'

export default function CorpusModule() {
  const scrollRef = useRef(0)
  return (
    <Routes>
      <Route index element={<CorpusList scrollRef={scrollRef} />} />
      <Route path=":id" element={<CorpusPlayer />} />
    </Routes>
  )
}
