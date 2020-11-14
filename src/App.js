import "./App.css";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Input labelText="Nombre" autoFocus={true} />
    </div>
  );
}

export default App;
