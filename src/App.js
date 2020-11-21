import React,{ useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Characters from './components/Characters/Chars';
import Movies from './components/Movies/Movies';
import Wbg from './img/welcomebg.jpg';
import Cbg from './img/charactersbg.jpg';
import Mbg from './img/moviesbg.jpg';
import Qbg from './img/quotesbg.jpg';
import Logo from './img/logo.png';

function App() {
  const [wichPage,setWichPage] = useState('home');
  const [characters,setCharacters] = useState([]);
  const [movies,setMovies] = useState([]);

  useEffect(() => {
    getCharacters()
    getMovies()
    console.log("rendereltem");
  },[]);

  const getCharacters = async () => {
    const response = await fetch("https://the-one-api.dev/v2/character",
      {method:'GET',
      headers: {'Authorization': 'Bearer fWdMfkEvw_GFrcQO85GJ'}
      });
    const data = await response.json();
    setCharacters(data.docs);
  };
  const getMovies = async () => {
    const response = await fetch("https://the-one-api.dev/v2/movie",
      {method:'GET',
      headers: {'Authorization': 'Bearer fWdMfkEvw_GFrcQO85GJ'}
      });
    const data = await response.json();
    setMovies(data.docs);
    console.log(data.docs);
  };


  useEffect(() => {
    backgroundSetter()
  },[wichPage]);

  const backgroundSetter = () => {
    if(wichPage === 'home') { return Wbg};
    if(wichPage === 'chars') { return Cbg};
    if(wichPage === 'movies') { return Mbg};
    if(wichPage === 'quotes') { return Qbg};
  };

  return (
    <div className="App">
      <header>
        <img className="logo" src={Logo} alt=""/>
        <button onClick={() => setWichPage('home')} className="home">Home</button>
        <button onClick={() => setWichPage('chars')} className="chars-button">Characters</button>
        <button onClick={() => setWichPage('movies')} className="places">Movies</button>
      </header>
      <div className="center" style={{backgroundImage:`url(${backgroundSetter()})`}} >
        {wichPage === 'home' && <Welcome />}
        {wichPage === 'chars' && <Characters characters={characters} />}
        {wichPage === 'movies' && <Movies movies={movies} />}
      </div>
      <footer>
        <h1></h1>
      </footer>
    </div>
  );
}

export default App;
