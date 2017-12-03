import React from 'react';
import classnames from 'classnames'

import { POKEMONS } from '../config'

export default function PokemonDetail(props) {
  const pokemon = POKEMONS[props.match.params.id]
  const typeClass = classnames({
    orange: pokemon.type === 'electric',
    red: pokemon.type === 'fire',
    green: pokemon.type === 'grass',
  })

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>Size: {pokemon.size}</p>
      <p>PV: {pokemon.pv}</p>
      <p>Type: <span className={typeClass}>{pokemon.type}</span></p>
    </div>
  )
}
