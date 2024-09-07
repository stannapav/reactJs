import React from "react";

function Pokemon(props) {
  let pokemonBadge = props.starter ? "Starter" : "Regular";

  return (
    <div className="pokemon-card">
      {pokemonBadge && <div>{pokemonBadge}</div>}
      <img src={props.imagePath} />
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
