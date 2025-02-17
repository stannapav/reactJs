import { useState } from "react";
import Pokemon from "./Pokemon";

export default function App() {
  const [pokemonData, setPokemonData] = useState({
    name: "empty",
    height: 0,
    weight: 0,
    sprites: "",
    types: [],
  });
  const [pokemonId, setPokemonId] = useState(1);

  function handleChange(event) {
    const value = event.target.value;

    if (value >= 1 && value <= 1025) setPokemonId(value);
    else if (value !== "")
      alert("Айді може бути тільки в проміжку з 1 до 1025");
  }

  function handleButton() {
    getData();
  }

  async function getData() {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      await response.json().then((data) => setPokemonData(data));
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <p>
        Введіть айді покемона якого хочете побачить інформацію.Айді може бути з
        1 до 1025
      </p>
      <input
        type="text"
        id="pokemonId"
        name="pokemonId"
        onChange={handleChange}
      />
      <button onClick={handleButton}>Знайти покемона</button>
      <Pokemon {...pokemonData} />
    </div>
  );
}
