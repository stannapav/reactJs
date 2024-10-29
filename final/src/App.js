import pokemons from "./data/pokemons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Header text="Pokemon List" />
      <Form pokemons={pokemons} />
      <Footer />
    </div>
  );
}

export default App;
