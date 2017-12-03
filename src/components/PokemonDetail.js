import React, { Component } from 'react';
import classnames from 'classnames'

export default class PokemonDetail extends Component {
  state = {
    pokemon: null,
    loading: true
  }
  getPokemon(id) {
    this.setState({loading: true})
    fetch('http://pokeapi.co/api/v2/pokemon/' + id)
      .then(response => response.json())
      .then((response) => {
        this.setState({pokemon: response, loading: false})
      })
  }

  componentDidMount() {
    this.getPokemon(this.props.match.params.id)
  }

  render() {
    let typeClass
    const { pokemon, loading } = this.state
    
    if (pokemon) {
      typeClass = classnames({
        orange: pokemon.type === 'electric',
        red: pokemon.type === 'fire',
        green: pokemon.type === 'grass',
      })
    }
  
    return (
      loading ? <p>Chargement...</p> :
      <div>
        <h1>{pokemon.name}</h1>
        <p>Size: {pokemon.size}</p>
        <p>PV: {pokemon.pv}</p>
        <p>Type: <span className={typeClass}>{pokemon.type}</span></p>
      </div>
    )
  }
}
