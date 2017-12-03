import React, { Component } from 'react';
import classnames from 'classnames'

export default class PokemonDetail extends Component {
  state = {
    pokemon: null
  }
  getPokemon(id) {
    fetch('http://pokeapi.co/api/v2/pokemon/' + id)
      .then(response => response.json())
      .then((response) => {
        this.setState({pokemon: response})
      })
  }

  componentDidMount() {
    this.getPokemon(this.props.match.params.id)
  }

  render() {
    let error = false
    let typeClass
    const { pokemon } = this.state
    
    if (!pokemon) {
      error = 'Aucun pokemon trouvé'
    } else {
      typeClass = classnames({
        orange: pokemon.type === 'electric',
        red: pokemon.type === 'fire',
        green: pokemon.type === 'grass',
      })
    }
  
    return (
      error ? <p>{error}</p> :
      <div>
        <h1>{pokemon.name}</h1>
        <p>Size: {pokemon.size}</p>
        <p>PV: {pokemon.pv}</p>
        <p>Type: <span className={typeClass}>{pokemon.type}</span></p>
      </div>
    )
  }
}
