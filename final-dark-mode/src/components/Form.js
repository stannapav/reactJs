import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

function Form(props) {
  const [pokemonsFilter, setPokemonsFilter] = useState(props.pokemons);
  const [type, setType] = useState({
    isFire: false,
    isNormal: false,
    isDark: false,
    isIce: false,
    isGrass: false,
    isSteel: false,
    isElectric: false,
    isPsychic: false,
    isFairy: false,
  });

  useEffect(() => {
    setPokemonsFilter(props.pokemons);
  }, [props.pokemons]);

  function handleChange(event) {
    const { name, checked } = event.target;
    setType((prevType) => ({
      ...prevType,
      [`is${name}`]: checked,
    }));
  }

  function handleFilter() {
    const selectedTypes = Object.keys(type)
      .filter((key) => type[key])
      .map((key) => key.replace("is", "").toLowerCase());

    if (selectedTypes.length === 0) {
      setPokemonsFilter(props.pokemons);
    } else {
      const filteredPokemons = props.pokemons.filter((pokemon) =>
        pokemon.type.some((pokeType) => selectedTypes.includes(pokeType))
      );
      setPokemonsFilter(filteredPokemons);
    }
  }

  const pokemonElements = pokemonsFilter.map((pokemon) => (
    <Pokemon
      darkMode={props.darkMode}
      key={pokemon.id}
      item={pokemon}
      {...pokemon}
    />
  ));

  return (
    <>
      <div className={props.darkMode ? "form-dark" : "form"}>
        <h3>Choose what type to filter</h3>
        <input
          type="checkbox"
          name="Fire"
          checked={type.isFire}
          onChange={handleChange}
        />
        <label>Fire</label>

        <input
          type="checkbox"
          name="Normal"
          checked={type.isNormal}
          onChange={handleChange}
        />
        <label>Normal</label>

        <input
          type="checkbox"
          name="Dark"
          checked={type.isDark}
          onChange={handleChange}
        />
        <label>Dark</label>

        <input
          type="checkbox"
          name="Ice"
          checked={type.isIce}
          onChange={handleChange}
        />
        <label>Ice</label>

        <input
          type="checkbox"
          name="Grass"
          checked={type.isGrass}
          onChange={handleChange}
        />
        <label>Grass</label>

        <input
          type="checkbox"
          name="Steel"
          checked={type.isSteel}
          onChange={handleChange}
        />
        <label>Steel</label>

        <input
          type="checkbox"
          name="Electric"
          checked={type.isElectric}
          onChange={handleChange}
        />
        <label>Electric</label>

        <input
          type="checkbox"
          name="Psychic"
          checked={type.isPsychic}
          onChange={handleChange}
        />
        <label>Psychic</label>

        <input
          type="checkbox"
          name="Fairy"
          checked={type.isFairy}
          onChange={handleChange}
        />
        <label>Fairy</label>

        <button onClick={handleFilter}>Filter</button>
      </div>

      <div className={props.darkMode ? "pokemons-dark" : "pokemons"}>
        {pokemonElements}
      </div>
    </>
  );
}

export default Form;
