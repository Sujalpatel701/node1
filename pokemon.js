//pokemon
const pokemon = require('pokemon');
const pokemonName = pokemon.random();
console.log(pokemonName);
console.log(pokemon.getName(1));
console.log(pokemon.getId(pokemonName));
console.log(pokemon.all());