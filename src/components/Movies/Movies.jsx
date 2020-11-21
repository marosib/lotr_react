import React, { useState } from 'react';
import lotr1 from '../../img/lotr1.jpg';
import lotr2 from '../../img/lotr2.jpg';
import lotr3 from '../../img/lotr3.jpg';
import Movie from './Movie';

export default function Places({movies}) {
  const [lotr,setLotr] = useState(movies.slice(5,8));
  const [hobbit,setHobbit] = useState(movies.slice(2,5));
  const [lotrMovie,setLotrMovie] = useState('');
  const [hobbitMovie,setHobbitMove] = useState('');

  return (
    <div className="movies">
      <div className="lotr">
        <div className="series">
          <h1>Name : {movies[0].name}</h1>
          <p>Nominatons : {movies[0].academyAwardNominations} </p>
          <p>Awards : {movies[0].academyAwardWins} </p>
          <p>Budget : {movies[0].budgetInMillions} millions </p>
          <p>Revenue : {movies[0].boxOfficeRevenueInMillions} millions </p>
        </div>
        <div className="movie">
          <img onClick={() => setLotrMovie(lotr[0])} src={lotr1} alt=""/>
          <img onClick={() => setLotrMovie(lotr[1])} src={lotr2} alt=""/>
          <img onClick={() => setLotrMovie(lotr[2])} src={lotr3} alt=""/>
        </div>
        <Movie movie={lotrMovie} />
      </div>
      <div className="hobbit">
        <div className="series">
          <h1>Name : {hobbit[0].name}</h1>
          <p>Nominatons : {hobbit[0].academyAwardNominations} </p>
          <p>Awards : {hobbit[0].academyAwardWins} </p>
          <p>Budget : {hobbit[0].budgetInMillions} millions </p>
          <p>Revenue : {hobbit[0].boxOfficeRevenueInMillions} millions </p>
        </div>
        <div className="movie">

        </div>

      </div>
    </div>
  )
}
