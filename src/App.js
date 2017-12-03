import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import { getAllPokemons } from './services/api'
import PokemonList from './components/PokemonList'
import PokemonDetail from './components/PokemonDetail'
import { Contact } from './components/Contact'

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
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <Route exact path="/" component={() => <PokemonList loading={this.state.loading} pokemons={this.state.pokemons} />}/>
          <Route path="/pokemon/:id" component={PokemonDetail}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
