import Pokemon from "./components/Pokemon";
import pokemons from "./data/PokemonData";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const pokemonElements = pokemons.map((pokemon) => {
    return (
      <Pokemon
        name={pokemon.name}
        weight={pokemon.weight}
        height={pokemon.height}
        type={pokemon.type}
        image={pokemon.imagePath}
      />
    );
  });

  return (
    <div>
      <Header text="Pokemon List" />
      <div className="pokemons">{pokemonElements}</div>
      <Footer />
    </div>
  );
}

export default App;
