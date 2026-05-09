import { Route, Routes } from 'react-router-dom'
import CorpusList from './pages/CorpusList'
import CorpusPlayer from './pages/CorpusPlayer'

export default function CorpusModule() {
  return (
    <Routes>
      <Route index element={<CorpusList />} />
      <Route path=":id" element={<CorpusPlayer />} />
    </Routes>
  )
}
