import React from 'react'
import { Link } from 'react-router-dom'

export default function PokemonList(props) {
  return (
    <ul>
      {props.pokemons.map(pokemon => (
        <li key={'pokemon_' + pokemon.id}><Link to={'pokemon/' + pokemon.id}>{pokemon.name}</Link></li>
      ))}
    </ul>
  )
}
