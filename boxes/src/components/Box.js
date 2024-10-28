import React, { useState } from "react";
export default function Box(props) {
  const [on, setOn] = useState(props.on);
  const [over, setOver] = useState(false);

  const styles = {
    backgroundColor: on ? "#222222" : "transparent",
    cursor: over ? "help" : "auto",
  };

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  function mouseOver() {
    setOver(true);
  }

  return (
    <div
      style={styles}
      className="box"
      onClick={toggle}
      onMouseOver={mouseOver}
    ></div>
  );
}
