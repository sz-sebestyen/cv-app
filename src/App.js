import "./App.css";
import { useState } from "react";

import ResetButton from "./components/ResetButton/ResetButton";
import TextInput from "./components/TextInput/TextInput";
import TextDisplay from "./components/TextDisplay/TextDisplay";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <ResetButton onClick={(event) => setText("")} />

      <div className="container">
        <TextInput
          value={text}
          onInput={(event) => setText(event.target.value)}
        />

        <TextDisplay>{text}</TextDisplay>
      </div>
    </div>
  );
}

export default App;
