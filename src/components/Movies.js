import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return (
            <div>
              <h4>Name: {movie.title}</h4>
              <p>Time: {movie.time}</p>
              <p>Genres: </p>
              <ul>
                {movie.genres.map(genre => <li>{genre}</li>)}
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default Movies;
