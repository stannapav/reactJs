import React from "react";

function Header(props) {
  return (
    <div className={props.darkMode ? "header-dark" : "header"}>
      <h1>{props.text}</h1>
    </div>
  );
}

export default Header;
