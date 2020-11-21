import React, { useState } from 'react';
import Char from './Char';
import Arrow from '../../img/arrow.png';

export default function Chars({characters}) {
  const [pageNumber,setPageNumber] = useState(1);
  const [search,setSearch] = useState('');
  const pageSize = 100;
  const [result,setResult] = useState(characters);

 const searchHandler = () => {
    setResult(characters.filter(
      char => 
        char.name.toLowerCase().includes(search.toLowerCase())
    ))
  };

  return (
    <div className="chars">
      <div className="search">
        <input onChange={(e) => setSearch(e.target.value)} type="text" className="search-bar" value={search} />
        <button onClick={searchHandler} className="search-button">Search</button>
      </div>
      <div className="pagination">
        <button onClick={() => setPageNumber(pageNumber === 1 ? 1 : pageNumber-1)} className="left-button" ><img className="arrow" src={Arrow} alt=""/></button>
        <p> {pageNumber} </p>
        <button onClick={() => setPageNumber(pageNumber === 9 ? 9 : pageNumber+1)} className="right-button" ><img className="arrow" src={Arrow} alt=""/></button>
      </div>
      <div className="cards">
        {result.slice((pageNumber-1) * pageSize, pageNumber * pageSize).map(char => (char.name === 'MINOR_CHARACTER' ? null : <Char key={char._id} char={char} />))}
      </div>
    </div>
  )
}
