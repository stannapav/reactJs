import Pokemon from "./components/Pokemon";
import pokemons from "./data/PokemonData";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const pokemonElements = pokemons.map((pokemon) => {
    return <Pokemon key={pokemon.id} item={pokemon} {...pokemon} />;
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
