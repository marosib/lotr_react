import React, { useState } from 'react';
import lotr1 from '../../img/lotr1.jpg';
import lotr2 from '../../img/lotr2.jpg';
import lotr3 from '../../img/lotr3.jpg';
import Movie from './Movie';
import hobbit1 from '../../img/hobbit1.jpg';
import hobbit2 from '../../img/hobbit2.jpg';
import hobbit3 from '../../img/hobbit3.jpg';
import Movie2 from './Movie2';

export default function Places({movies}) {
  const [lotrMovie,setLotrMovie] = useState('');
  const [hobbitMovie,setHobbitMovie] = useState('');

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
          <img onClick={() => setLotrMovie(movies[5])} src={lotr1} alt=""/>
          <img onClick={() => setLotrMovie(movies[6])} src={lotr2} alt=""/>
          <img onClick={() => setLotrMovie(movies[7])} src={lotr3} alt=""/>
        </div>
        <Movie movie={lotrMovie} />
      </div>
      <div className="hobbit">
        <div className="series">
          <h1>Name : {movies[1].name}</h1>
          <p>Nominatons : {movies[1].academyAwardNominations} </p>
          <p>Awards : {movies[1].academyAwardWins} </p>
          <p>Budget : {movies[1].budgetInMillions} millions </p>
          <p>Revenue : {movies[1].boxOfficeRevenueInMillions} millions </p>
        </div>
        <div className="movie">
          <img onClick={() => setHobbitMovie(movies[2])} src={hobbit1} alt=""/>
          <img onClick={() => setHobbitMovie(movies[3])} src={hobbit2} alt=""/>
          <img onClick={() => setHobbitMovie(movies[4])} src={hobbit3} alt=""/>
        </div>
        <Movie2 movie={hobbitMovie} />
      </div>
    </div>
  )
}
