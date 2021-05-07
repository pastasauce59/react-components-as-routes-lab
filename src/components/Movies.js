import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie => <div>{movie.title}
        <h4>Run-time: {movie.time} minutes</h4>
        <ul>Genres:
        <li>{movie.genres[0]}</li>
        <li>{movie.genres[1]}</li>    
        <li>{movie.genres[2]}</li>
        <li>{movie.genres[3]}</li>
        <li>{movie.genres[4]}</li>
        </ul>
        <h4>Metascore: {movie.metascore}</h4>

        </div>)}
    </div>
  );
};

export default Movies;
