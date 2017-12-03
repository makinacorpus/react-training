import React, { Component } from 'react';
import './App.css';

function PokemonList(props) {
  return (
    <ul>
      {props.pokemons.map(pokemon => (
        <li key={'pokemon_' + pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  )
}

class App extends Component {
  render() {
    const pokemons = [
      { id: 0, name: 'Pikachu' },
      { id: 1, name: 'Salamèche' },
      { id: 2, name: 'Bulbisar' }
    ]
    
    return (
      <PokemonList pokemons={pokemons} />
    );
  }
}

export default App;
