import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [divSize, setDivSize] = useState(50);
  const divRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    function watchDiv() {
      setDivSize((prevSize) => prevSize + 10);
    }

    const changeDiv = divRef.current;
    if (changeDiv) {
      changeDiv.addEventListener("click", watchDiv);
    }

    return () => {
      if (changeDiv) {
        changeDiv.removeEventListener("click", watchDiv);
      }
    };
  }, []);

  return (
    <>
      <div>
        <p>Counting by itself with interval and then does cleanup: {count}</p>
      </div>
      <div
        ref={divRef}
        style={{ width: divSize, height: divSize, background: "green" }}
      ></div>
    </>
  );
}

export default App;
