import React, { Component } from 'react';

import { POKEMONS } from './config'
import PokemonList from './components/PokemonList'
import PokemonDetail from './components/PokemonDetail'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <PokemonList pokemons={POKEMONS} />
        <PokemonDetail />
      </div>
    );
  }
}

export default App;
