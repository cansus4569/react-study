import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Page 단위
 * 홈페이지                    path : /
 * 영화 전체보여주는 페이지 (서치)  path : /movies
 * 영화 디테일 페이지            path : /movies/:id
 * 추천 영화 페이지              path : /movies/:id/recommendations
 * 리뷰 페이지                  path : /movies/:id/reviews
 */
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="movies">
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieDetailPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
