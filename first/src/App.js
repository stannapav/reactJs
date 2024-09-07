import './App.css';
import Header from './components/Header';
import CoolFacts from './components/CoolFacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header text="A very cool header :3"/>
      <CoolFacts/>
      <Footer/>
    </div>
  );
}

export default App;
