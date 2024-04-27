/* eslint-disable react/prop-types */

import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          'url(' +
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ')',
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h3>{movie.title}</h3>
        {movie.genre_ids.map((id, index) => (
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
