import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return(
          <div>
            <h4>{actor.name}</h4>
            <p>Movies:</p>
            <ul>
              {actor.movies.map(movie => <li>{movie}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
