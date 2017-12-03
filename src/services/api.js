export function getAllPokemons() {
  return fetch('http://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
}

export function getPokemon(id) {
  return fetch('http://pokeapi.co/api/v2/pokemon/' + id)
    .then(response => response.json())
}