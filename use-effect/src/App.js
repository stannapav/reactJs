import { useEffect, useState } from "react";

function App() {
  const [textColor, setTextColor] = useState("black");
  const [onceText, setOnceText] = useState(0);
  const [countText, setCountText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (textColor === "black") {
      setTextColor("red");
    } else if (textColor === "red") {
      setTextColor("green");
    } else if (textColor === "green") {
      setTextColor("yellow");
    } else if (textColor === "yellow") {
      setTextColor("blue");
    } else {
      setTextColor("black");
    }
  });

  useEffect(() => {
    setOnceText((prevOnce) => prevOnce + 1);
  }, []);

  useEffect(() => {
    setCountText(`Count is now ${count}`);
  }, [count]);

  return (
    <div>
      <p style={{ color: textColor }}>
        Hey this text will change constantly color
      </p>
      <p>
        I worked only {onceText} times. first time i will be 1 and if i work
        correct i will be 2 after first render
      </p>
      <p>{countText}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
    </div>
  );
}

export default App;
