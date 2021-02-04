import "./App.css";
import { useState } from "react";

import ResetButton from "./components/ResetButton/ResetButton";
import TextInput from "./components/TextInput/TextInput";
import TextDisplay from "./components/TextDisplay/TextDisplay";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <ResetButton setText={setText} />

      <div className="container">
        <TextInput setText={setText} value={text} />

        <TextDisplay text={text} />
      </div>
    </div>
  );
}

export default App;
