import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [pokemonName, setPokemonName] = useState('');

  // Event handler for input changes
  const handleInputChange = (e) => {
    setPokemonName(e.target.value);
  };

  // Event handler for search button click
  const handleSearch = () => {
    onSearch(pokemonName);
  };

  return (
    <div className=' place-content-center my-10 space-y-5' >
      <input className=' hover:shadow-indigo-500/40 shadow-lg bg-transparent border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mx-5 px-3 py-2' 
      type="search" 
      value={pokemonName} 
      onChange={handleInputChange} 
      placeholder="Enter Pokemon name..." />
      <button className=' rounded-lg mx-5 px-3 py-2 shadow-lg hover:shadow-indigo-500/40' variant="outline-success" 
      onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
