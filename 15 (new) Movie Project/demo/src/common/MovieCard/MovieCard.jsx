/* eslint-disable react/prop-types */

import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery(); // : 변수명 => 변수명 재정의

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };
  return (
    <div
      style={{
        backgroundImage:
          'url(' +
          `https://www.themoviedb.org/t/p/w220_and_h330_bestv2${movie.poster_path}` +
          ')',
      }}
      className="movie-card"
    >
      <div className="overlay p-2">
        <h3>{movie.title}</h3>
        {showGenre(movie.genre_ids).map((id, index) => (
          <Badge key={index} bg="danger">
            {id}
          </Badge>
        ))}
        <div>
          <div>{movie.vote_average}</div>
          <div>{movie.popularity}</div>
          <div>{movie.adult ? 'over18' : 'under18'}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
