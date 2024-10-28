import React, { useState } from "react";
import Box from "./components/Box";
import boxes from "./data/boxes";

export default function App(props) {
  const [squares, setSquares] = useState(boxes);

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} />
  ));

  return <main>{squareElements}</main>;
}
