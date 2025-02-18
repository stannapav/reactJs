import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { useEffect, useState } from "react";

function App() {
  const [gotData, setGotData] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if (gotData) return;

    const getData = async () => {
      const pokemonIds = [
        52, 53, 196, 197, 243, 300, 301, 335, 403, 404, 405, 431, 432, 509, 510,
        667, 668, 677, 678, 700, 725, 726, 727, 791, 807, 863, 906, 907, 908,
        1002,
      ];

      try {
        const responses = await Promise.all(
          pokemonIds.map((id) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
              if (!res.ok) throw new Error(`Failed to fetch Pokémon ${id}`);
              return res.json();
            })
          )
        );

        const formattedPokemons = responses.map((data) => ({
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          type: data.types.map((t) => t.type.name),
          isObtained: false,
          imagePath: data.sprites.front_default,
          linkToPokedex: `https://www.pokemon.com/us/pokedex/${data.name}`,
        }));

        setPokemons(formattedPokemons);
        setGotData(true);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    getData();
  }, [gotData]);

  return (
    <div>
      <Header text="Pokemon List" />
      <Form pokemons={pokemons} />
      <Footer />
    </div>
  );
}

export default App;
