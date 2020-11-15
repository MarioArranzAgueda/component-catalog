import "./App.css";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Mario");

  return (
    <div className="App">
      <form onSubmit={() => console.log(name)}>
        <Input
          label="Nombre"
          value={name}
          autoFocus={true}
          disabled={true}
          events={{
            onChange: (data) => setName(data),
          }}
        />
        <Checkbox
          isChecked={false}
          label="¿Acepta las condiciones de uso?"
          labelDirection="right"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
