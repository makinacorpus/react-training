import React, { Component } from 'react';

import { POKEMONS } from './config'
import PokemonList from './components/PokemonList'

import './App.css';

class App extends Component {
  render() {
    return (
      <PokemonList pokemons={POKEMONS} />
    );
  }
}

export default App;
