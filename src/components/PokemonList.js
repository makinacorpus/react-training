import React from 'react';

export default function PokemonList(props) {
  return (
    <ul>
      {props.pokemons.map(pokemon => (
        <li key={'pokemon_' + pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  )
}
