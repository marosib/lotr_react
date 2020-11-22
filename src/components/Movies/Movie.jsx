import React, { useState, useEffect } from 'react';

export default function Place({movie}) {
  const [data,setData] = useState(movie);

  useEffect(() => {
    setData(movie)
  },[movie]);

  return (
    <div className="datas">
      {
      data ?
      <div className="data">
        <h1>Name : {data.name}</h1>
        <p>Nominatons : {data.academyAwardNominations} </p>
        <p>Awards : {data.academyAwardWins} </p>
        <p>Budget : {data.budgetInMillions} millions </p>
        <p>Revenue : {data.boxOfficeRevenueInMillions} millions </p>
      </div>
      : <p>Click on a poster!</p>
      }
    </div>
  )
}
