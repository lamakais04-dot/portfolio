import { useState } from "react";
import Start from "./components/Start";
import Cutting from "./components/Cutting";
import Opening from "./components/Opening";
import FullyOpen from "./components/FullyOpen";
import "./App.css";

function App() {
  const [stage, setStage] = useState(0);

  return (
    <div className="app">
      {stage === 0 && <Start onNext={() => setStage(1)} />}
      {stage === 1 && <Cutting onNext={() => setStage(2)} />}
      {stage === 2 && <Opening onNext={() => setStage(3)} />}
      {stage === 3 && <FullyOpen onNext={() => setStage(4)} />}
    </div>
  );
}

export default App;