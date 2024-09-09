import React from "react";

function Pokemon(pokemon) {
  let weightText =
    pokemon.weight <= 17 ? "light" : pokemon.weight >= 19 ? "heavy" : "";

  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt="" />
      <h3>{pokemon.name}</h3>

      <div className="info-group">
        <p>
          Height: {pokemon.height} <br />
          Weight: {pokemon.weight} lbs
          {weightText && <small> {weightText}</small>}
          <br />
          Type: {pokemon.type}
        </p>
      </div>
    </div>
  );
}

export default Pokemon;
