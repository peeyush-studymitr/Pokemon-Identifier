import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h2>{pokemon.name}</h2>
      <p>Weight: {pokemon.weight}</p>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  );
};

export default PokemonCard;
