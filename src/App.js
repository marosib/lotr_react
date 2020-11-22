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
import menu from './img/menu.png';
import x from './img/x.png';
import NavBar from './components/NavBar';

function App() {
  const [whichPage, setWhichPage] = useState('home');
  const [characters, setCharacters] = useState([]);
  const [movies, setMovies] = useState([]);
  const [navMenu, setNavMenu] = useState(menu);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    getCharacters()
    getMovies()
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
  };

  useEffect(() => {
    backgroundSetter()
  },[whichPage]);

  const backgroundSetter = () => {
    if(whichPage === 'home') { return Wbg};
    if(whichPage === 'chars') { return Cbg};
    if(whichPage === 'movies') { return Mbg};
    if(whichPage === 'quotes') { return Qbg};
  };

  const navMenuHandler = () => {
    if (navMenu === menu) { setNavMenu(x)
      setScale(1) };
    if (navMenu === x) { setNavMenu(menu)
      setScale(0) }
  };

  return (
    <div className="App">
      <header>
        <img className="logo" src={Logo} alt=""/>
        <button onClick={() => setWhichPage('home')} className="home">Home</button>
        <button onClick={() => setWhichPage('chars')} className="chars-button">Characters</button>
        <button onClick={() => setWhichPage('movies')} className="places">Movies</button>
        <img onClick={navMenuHandler} src={navMenu} alt="" className="hamburger"/>
      </header>
      <NavBar setWhichPage={setWhichPage} scale={scale} />
      <div className="center" style={{backgroundImage:`url(${backgroundSetter()})`}} >
        {whichPage === 'home' && <Welcome />}
        {whichPage === 'chars' && <Characters characters={characters} />}
        {whichPage === 'movies' && <Movies movies={movies} />}
      </div>
      <footer>
        <h1></h1>
      </footer>
    </div>
  );
}

export default App;
