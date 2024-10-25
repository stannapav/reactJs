import React, { useState } from "react";

function Pokemon(props) {
  const [pokemon, setPokemon] = useState(props);

  function toggleObtained() {
    setPokemon((prevPokemon) => ({
      ...prevPokemon,
      isObtained: !prevPokemon.isObtained,
    }));
  }

  let pokemonObtained = pokemon.isObtained
    ? "You have this pokemon"
    : "You dont have this pokemon";

  let pokemonBadge = props.starter ? "Starter" : "Regular";

  console.log(pokemon);

  return (
    <div className="pokemon-card" onClick={toggleObtained}>
      {pokemonBadge && <div>{pokemonBadge}</div>}
      {pokemonObtained && <h3>{pokemonObtained}</h3>}
      <img src={props.imagePath} alt={props.imagePath} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <p>
          Height: {props.height} <br />
          Weight: {props.weight} lbs <br />
          Type: {props.type}
        </p>
      </div>

      <a href={props.linkToPokedex}>More info about {props.name}</a>
    </div>
  );
}

export default Pokemon;