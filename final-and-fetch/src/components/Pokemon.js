import React, { useState } from "react";

function Pokemon(props) {
  const [pokemon, setPokemon] = useState(props);
  const [isShown, setIsShown] = useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  function toggleObtained() {
    setPokemon((prevPokemon) => ({
      ...prevPokemon,
      isObtained: !prevPokemon.isObtained,
    }));
  }

  function toggleObtaineButton(e) {
    e.stopPropagation();
  }

  let pokemonObtained = pokemon.isObtained
    ? "You have this pokemon"
    : "You dont have this pokemon";

  return (
    <div className="pokemon-card" onClick={toggleObtained}>
      {pokemonObtained && <h5>{pokemonObtained}</h5>}
      <img src={props.imagePath} alt={props.imagePath} />
      <h3>{props.name}</h3>

      {isShown && (
        <>
          <div className="info-group">
            <p>
              Height: {props.height} <br />
              Weight: {props.weight} lbs <br />
              Type: {props.type.toString()}
            </p>
          </div>

          <a href={props.linkToPokedex}>More info about {props.name}</a>
        </>
      )}

      <div onClick={toggleObtaineButton}>
        <button onClick={toggleShown}>
          {" "}
          {isShown ? "Hide" : "Show"} pokemon info
        </button>
      </div>
    </div>
  );
}

export default Pokemon;
