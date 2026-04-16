import { useState } from "react";
import boxClosed from "../assests/box-closed.jpg";
import boxHalf from "../assests/box-half.jpg";
import boxOpen from "../assests/box-open.jpg";

function OpenBoxScene({ onFinish }) {
  const [stage, setStage] = useState("closed");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleBoxClick = () => {
    if (isTransitioning) return;

    if (stage === "closed") {
      setStage("half");
      return;
    }

    if (stage === "half") {
      setStage("open");
      setIsTransitioning(true);

      setTimeout(() => {
        onFinish();
      }, 1200);

      return;
    }
  };

  const getBoxImage = () => {
    if (stage === "closed") return boxClosed;
    if (stage === "half") return boxHalf;
    return boxOpen;
  };

  const getTitle = () => {
    if (stage === "closed") return "Your package has arrived";
    if (stage === "half") return "Curios? Take another look";
    return "Welcome to my portfolio";
  };

  const getSubtitle = () => {
    if (stage === "closed") return "Tap to open";
    if (stage === "half") return "Tap again to reveal everything";
    return "Opening portfolio...";
  };

  return (
    <section className={`hero-box-section ${isTransitioning ? "zoom-out" : ""}`}>
      <div className="hero-box-card" onClick={handleBoxClick}>
        <img src={getBoxImage()} alt="Portfolio box" className="hero-box-image" />
      </div>

      <h1 className="hero-title">{getTitle()}</h1>
      <p className="hero-subtitle">{getSubtitle()}</p>

      <div className="hero-dots">
        <span className={stage === "closed" ? "dot active" : "dot"} />
        <span className={stage === "half" ? "dot active" : "dot"} />
        <span className={stage === "open" ? "dot active" : "dot"} />
      </div>
    </section>
  );
}

export default OpenBoxScene;