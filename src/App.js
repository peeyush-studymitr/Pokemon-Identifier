// App.js
import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import PokemonCard from './components/PokemonCard';

const App = () => {
  // State for storing Pokemon data
  const [pokemonData, setPokemonData] = useState(null);

  const [error, setError] = useState(null);

  // Function to fetch Pokemon data from the API
  const fetchPokemonData = (pokemonName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Pokemon not found: ${response.statusText}`);
        }
        return response.json();
      })

      // Extract relevant information from the API
      .then((data) => {
        const { name, weight, sprites } = data;
        const pokemon = {
          name,
          weight,
          image: sprites.front_default,
        };

        // Update state with the fetched Pokemon data
        setPokemonData(pokemon);
        setError(null);
      })
      // Handle errors
      .catch((error) => {
        setPokemonData(null);
        setError(error.message);
        console.error('Error fetching Pokemon data:', error);
      });
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gray-100" style={{ backgroundImage: `url('https://i.pinimg.com/originals/ab/58/cc/ab58cc75dcb2e42555cf7e614216350a.jpg')` ,backgroundSize:'cover', backgroundPosition:'center'}}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Who's That Pokémon?</h1>
        <SearchBox onSearch={fetchPokemonData} />
        {error && <p className="text-red-500">{error}</p>}
        
        {/* Display PokemonCard component if data is available */}
        {pokemonData && <PokemonCard pokemon={pokemonData} />}
      </div>
    </div>
  );
};

export default App;
