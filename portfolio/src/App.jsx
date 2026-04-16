import { useState } from "react";
import OpenBoxScene from "./components/OpenBoxScene";
import PortfolioSections from "./components/PortfolioSections";
import "./App.css";

function App() {
  const [page, setPage] = useState("intro");

  return (
    <div className="app-shell">
      {page === "intro" && <OpenBoxScene onFinish={() => setPage("portfolio")} />}
      {page === "portfolio" && <PortfolioSections />}
    </div>
  );
}

export default App;