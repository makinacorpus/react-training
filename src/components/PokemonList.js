import React from 'react'
import { Link } from 'react-router-dom'

export default function PokemonList(props) {
  const getId = (url) => {
    return url.split('/').reverse()[1]
  }

  if (props.loading) {
    return <p>Chargement...</p>
  }

  if (props.pokemons) {
    return (
      <ul>
        {props.pokemons.map(pokemon => (
          <li key={'pokemon_' + pokemon.name}><Link to={'pokemon/' + getId(pokemon.url)}>{pokemon.name}</Link></li>
        ))}
      </ul>
    )
  }

  return null
}
