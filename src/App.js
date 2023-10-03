import logo from './rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();
    setCharacters(characterApi.results);

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={logo} className="img-home" alt="logo" />
            <button onClick={reqApi} className='btn-search'>Buscar personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
