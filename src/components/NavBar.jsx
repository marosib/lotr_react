import React from 'react'

export default function NavBar({setWhichPage, scale}) {
  return (
    <div className="nav-bar" style={{transform: `scaleY(${scale})`}}>
        <button onClick={() => setWhichPage('home')} className="home">Home</button>
        <button onClick={() => setWhichPage('chars')} className="chars-button">Characters</button>
        <button onClick={() => setWhichPage('movies')} className="places">Movies</button>
    </div>
  )
}
