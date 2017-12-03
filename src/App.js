import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import { POKEMONS } from './config'
import PokemonList from './components/PokemonList'
import PokemonDetail from './components/PokemonDetail'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={() => <PokemonList pokemons={POKEMONS} />}/>
          <Route path="/pokemon" component={PokemonDetail}/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
