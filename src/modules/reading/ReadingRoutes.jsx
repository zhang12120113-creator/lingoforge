import { Outlet, useLocation } from 'react-router-dom';
import ReadingNav from './components/ReadingNav';

export default function ReadingRoutes() {
  const { pathname } = useLocation();
  const isArticleRead = pathname.startsWith('/read/article/');

  return (
    <>
      {!isArticleRead && <ReadingNav />}
      <Outlet />
    </>
  );
}
