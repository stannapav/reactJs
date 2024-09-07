import React from "react";

function Pokemon(pokemon) {
  return (
    <div className="pokemon-card">
      <img src={pokemon.image} />
      <h3>{pokemon.name}</h3>

      <div className="info-group">
        <p>
          Height: {pokemon.height} <br />
          Weight: {pokemon.weight} lbs <br />
          Type: {pokemon.type}
        </p>
      </div>
    </div>
  );
}

export default Pokemon;
