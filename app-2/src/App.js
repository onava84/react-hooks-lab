import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios' 
import Character from './Character'

function App() {
const [characters, setCharacters] = useState([])

const getStarWarsCharacter = async () => {
  const response = await axios.get(
    `https://swapi.dev/api/people/`
  );
  setCharacters(response.data.results);
};

useEffect(() => {
  getStarWarsCharacter()
}, [])

  return (
    <div className="App">
      {characters.map((e,i) => {
        return <Character name={e.name} key={i}/>
      })}
    </div>
  );
}

export default App;
