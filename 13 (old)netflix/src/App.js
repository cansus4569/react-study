import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Navigation from './components/Navigation'

/*
< 개발 리스트 정리 >
1. 3개의 페이지 필요 (Home /Movie /MovieDetail)

2. 홈페이지에서 배너를 볼 수 있다.
3. 3가지 섹션의 영화를 볼수 있다. (Popular / Top rated / Upcoming)
4. 각 영화에 마우스를 올려두면 다음과 같은 정보가 나타난다.
  - 제목 / 장르 / 점수 / 인기도 /청불여부
5. 영화를 슬라이드로 넘기면서 볼 수 있다.

6. 영화 디테일 페이지에서 영화에 대한 디테일한 정보를 볼 수 있다.
  - 포스터/제목/줄거리/점수/인기도 /청불여부/예산/이익/러닝타임/기타 등등
7. 트레일러를 누르면 트레일러 영상을 볼 수 있다.
8. 영화에 리뷰도 볼 수 있다.
9. 관련된 영화도 볼 수 있다.

10. 영화 검색을 할 수 있다.
11. 영화 정렬할 수 있다.
12. 영화를 필터링할 수도 있다.
*/

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:id" element={<MovieDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
