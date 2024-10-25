import Body from "./components/Body";
import Header from "./components/Header";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState("Joe");

  return (
    <div>
      <Header user={user} />
      <Body user={user} />
    </div>
  );
}

export default App;
