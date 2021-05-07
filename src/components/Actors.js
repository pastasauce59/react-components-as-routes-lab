import React from 'react';
import { actors } from '../data';

const Actors = () => {
  // actors.map(actor => actor.movies.forEach(movie => console.log(movie)))
  
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => <div className='actor'>{actor.name}
      <ul>Movies:
      <li>{actor.movies[0]}</li>
      <li>{actor.movies[1]}</li>
      <li>{actor.movies[2]}</li>
      </ul>
      </div>)}

      {/* <h1>example</h1>
      {actors.map(actor => actor.movies.forEach(movie => ))} */}

    </div>
  );
};

export default Actors;
