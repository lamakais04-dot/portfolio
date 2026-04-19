import { useState } from "react";
import OpenBoxScene from "./components/OpenBoxScene";
import PortfolioSections from "./components/PortfolioSections";
import "./App.css";

function App() {
  const [page, setPage] = useState("intro");

  return (
    <div className="app-shell">
      
      {/* background */}
      <div className="falling-background">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="falling-item" />
        ))}
      </div>

      {/* content */}
      <div className="main-content">
        {page === "intro" && (
          <OpenBoxScene onFinish={() => setPage("portfolio")} />
        )}
        {page === "portfolio" && <PortfolioSections />}
      </div>

    </div>
  );
}

export default App;