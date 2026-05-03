import { Route, Routes } from 'react-router-dom'
import ArticleList from './pages/ArticleList'
import ArticleDetail from './pages/ArticleDetail'

export default function ReadingModule() {
  return (
    <Routes>
      <Route index element={<ArticleList />} />
      <Route path=":id" element={<ArticleDetail />} />
    </Routes>
  )
}
