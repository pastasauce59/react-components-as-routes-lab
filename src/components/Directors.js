import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log(directors)
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => <div className='director'>
      {director.name}
      <ul>Directors:
        <li>{director.movies[0]}</li>
        <li>{director.movies[1]}</li>
        <li>{director.movies[2]}</li>
      </ul>
      </div>)}
    </div>
  );
}

export default Directors
