import { useState, useEffect } from "react";
import Cell from "./Cell";

function Board(props) {
  const { boardSize, totalBombs, setBombsGuess, reloadGame, setReloadGame } =
    props;
  const [cells, setCells] = useState(generateBoard(totalBombs));
  const [totalFlags, setTotalFlags] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  function generateBoard(totalBombs) {
    let board = Array.from({ length: boardSize }, (_, i) =>
      Array.from({ length: boardSize }, (_, j) => ({
        id: i * boardSize + j,
        x: i,
        y: j,
        value: 0,
        isRevealed: false,
        isBomb: false,
        isFlagged: false,
      }))
    );

    let bombPositions = new Set();
    while (bombPositions.size < totalBombs) {
      let x = Math.floor(Math.random() * boardSize);
      let y = Math.floor(Math.random() * boardSize);

      bombPositions.add(`${x},${y}`);
    }

    bombPositions.forEach((pos) => {
      const [x, y] = pos.split(",").map(Number);
      board[x][y].isBomb = true;
    });

    return board;
  }

  function countSurroundingBombs(x, y, board) {
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    return directions.reduce((count, [dx, dy]) => {
      let newX = x + dx;
      let newY = y + dy;

      return count + (board[newX]?.[newY]?.isBomb ? 1 : 0);
    }, 0);
  }

  function clearSurrounding(x, y, newCells) {
    const queue = [[x, y]];

    while (queue.length) {
      const [cx, cy] = queue.shift();
      if (newCells[cx][cy].isRevealed) {
        continue;
      }

      newCells[cx][cy].isRevealed = true;

      const bombCount = countSurroundingBombs(cx, cy, newCells);
      newCells[cx][cy].value = bombCount;

      if (bombCount === 0) {
        const directions = [
          [-1, -1],
          [-1, 0],
          [-1, 1],
          [0, -1],
          [0, 1],
          [1, -1],
          [1, 0],
          [1, 1],
        ];

        directions.forEach(([dx, dy]) => {
          let nx = cx + dx,
            ny = cy + dy;
          if (nx >= 0 && nx < boardSize && ny >= 0 && ny < boardSize) {
            if (!newCells[nx][ny].isRevealed && !newCells[nx][ny].isBomb) {
              queue.push([nx, ny]);
            }
          }
        });
      }
    }
  }

  function onLeftClick(x, y) {
    if (cells[x][y].isFlagged || cells[x][y].isRevealed || isGameOver) {
      return;
    }

    const newCells = cells.map((row) => row.map((cell) => ({ ...cell })));

    if (newCells[x][y].isBomb) {
      newCells[x][y].isRevealed = true;
      setCells(newCells);
      setIsGameOver(true);

      alert("Game Over! You hit a bomb!");
      return;
    }

    clearSurrounding(x, y, newCells);
    setCells(newCells);
  }

  function onRightClick(event, x, y) {
    event.preventDefault();
    if (cells[x][y].isRevealed || isGameOver) {
      return;
    }

    setCells((prevCells) =>
      prevCells.map((row) =>
        row.map((cell) => {
          if (cell.x === x && cell.y === y) {
            const newFlagState = !cell.isFlagged;

            return { ...cell, isFlagged: newFlagState };
          }

          return cell;
        })
      )
    );
  }

  useEffect(() => {
    if (reloadGame) {
      setCells(generateBoard(totalBombs));
      setReloadGame(false);
      setIsGameOver(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadGame]);

  useEffect(() => {
    let flagCount = cells.flat().filter((cell) => cell.isFlagged).length;

    setTotalFlags(flagCount);
    setBombsGuess(totalBombs - flagCount);
  }, [cells, totalBombs, setBombsGuess]);

  useEffect(() => {
    let correctFlags = cells
      .flat()
      .filter((cell) => cell.isFlagged && cell.isBomb).length;

    if (correctFlags === totalBombs && totalFlags === totalBombs) {
      alert("WIN YAY");

      setIsGameOver(true);
    }
  }, [cells, totalBombs, totalFlags, setIsGameOver]);

  return (
    <div className="board">
      {cells.map((row) =>
        row.map((cell) => (
          <Cell
            key={cell.id}
            isGameOver={isGameOver}
            {...cell}
            onLeftClick={() => onLeftClick(cell.x, cell.y)}
            onRightClick={(e) => onRightClick(e, cell.x, cell.y)}
          />
        ))
      )}
    </div>
  );
}

export default Board;
