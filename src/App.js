import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import PokemonList from './components/PokemonList'
import PokemonDetail from './components/PokemonDetail'

import './App.css';

class App extends Component {
  state = {
    pokemons: []
  }
  componentDidMount() {
    fetch('http://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then((response) => {
        this.setState({pokemons: response.results})
      })
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={() => <PokemonList pokemons={this.state.pokemons} />}/>
          <Route path="/pokemon/:id" component={PokemonDetail}/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
