import React from 'react'
import Ring from '../../img/thering.png'

export default function Char({char}) {
  return (
    <div className="card">
      <img className="ring" src={Ring} alt=""/>
      <p className="name"> {char.name === "MINOR_CHARACTER" ? "" : char.name} </p>
      <p className="gender"> {isNaN(char.gender) ? "" : char.gender} </p>
      <p className="race"> {isNaN(char.race) ? "" : char.race} </p>
      {char.wikiUrl && <a href={char.wikiUrl} className="read-more">Read more</a>}
    </div>
  )
}
