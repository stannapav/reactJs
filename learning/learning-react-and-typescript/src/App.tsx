import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button
        color="secondary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        Alerting
      </Button>
    </div>
  );
}

export default App;
