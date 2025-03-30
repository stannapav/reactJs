import { useState } from "react";
import Board from "./components/Board";

function App() {
  const totalBombs = 10;
  const boardSize = 8;
  const [bombsGuess, setBombsGuess] = useState(totalBombs);
  const [reloadGame, setReloadGame] = useState(false);

  function reload() {
    setReloadGame(true);
  }

  return (
    <div>
      <h1>Welcome to my Minesweeper</h1>
      <h3>Bombs left: {bombsGuess}</h3>
      <Board
        boardSize={boardSize}
        totalBombs={totalBombs}
        setBombsGuess={setBombsGuess}
        reloadGame={reloadGame}
        setReloadGame={setReloadGame}
      />
      <button onClick={reload}>Reload Game</button>
    </div>
  );
}

export default App;
