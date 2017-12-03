import React from 'react'
import { Link } from 'react-router-dom'
import List, { ListItem } from 'material-ui/List'
import { CircularProgress } from 'material-ui/Progress';

export default function PokemonList(props) {
  const getId = (url) => {
    return url.split('/').reverse()[1]
  }

  if (props.loading) {
    return <CircularProgress />
  }

  if (props.pokemons) {
    return (
      <List>
        {props.pokemons.map(pokemon => (
          <ListItem button key={'pokemon_' + pokemon.name} component={Link} to={'/pokemon/' + getId(pokemon.url)}>{pokemon.name}</ListItem>
        ))}
      </List>
    )
  }

  return null
}
