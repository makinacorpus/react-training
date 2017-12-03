import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import { getAllPokemons } from './services/api'
import PokemonList from './components/PokemonList'
import PokemonDetail from './components/PokemonDetail'

import './App.css';

class App extends Component {
  state = {
    pokemons: [],
    loading: true
  }
  componentDidMount() {
    this.setState({loading: true})
    getAllPokemons()
      .then((response) => {
        this.setState({pokemons: response.results, loading: false})
      })
  }
  render() {
    return (
      <BrowserRouter>
        {this.state.loading ? <p>Chargement...</p> :
          <div>
            <Route exact path="/" component={() => <PokemonList pokemons={this.state.pokemons} />}/>
            <Route path="/pokemon/:id" component={PokemonDetail}/>
          </div>
        }
      </BrowserRouter>

    );
  }
}

export default App;
