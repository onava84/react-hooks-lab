import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function PokemonList() {
    const [pokemons, setPokemons] = useState([])

    const getPokemonCharacters = async () => {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon`
        );
        setPokemons(res.data.results);
      };

    useEffect(() => {
        getPokemonCharacters()
    }, [])

    return (
        <div>
            {pokemons.map((pokemon) => {
                return (
                <Link to={`/pokemon/${pokemon.name}`}>
                    <h2>{pokemon.name}</h2>
                </Link>
                )
            })}
        </div>
    )
}

export default PokemonList