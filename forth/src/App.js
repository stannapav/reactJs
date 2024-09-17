import { useState } from "react";

function App() {
  const [fruits, setFruit] = useState(["banana", "ananas"]);

  function addItem() {
    const newFruit = prompt("write fruit to add", "apple");

    setFruit((prevState) => [...prevState, newFruit]);
  }

  const fruitElements = fruits.map((fruit) => <p key={fruit}>{fruit}</p>);

  return (
    <div>
      <button onClick={addItem}>Add fruit</button>

      {fruitElements}
    </div>
  );
}

export default App;
