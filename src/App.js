import React, { Component } from 'react';
import './App.css';

function PokemonList() {
  return (
    <ul>
      <li>Pikachu</li>
      <li>Salamèche</li>
      <li>Bulbisar</li>
    </ul>
  )
}

class App extends Component {
  render() {
    return (
      <PokemonList />
    );
  }
}

export default App;
