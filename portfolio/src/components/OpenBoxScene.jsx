import { useState } from "react";
import boxClosed from "../assests/box-closed.jpg";
import boxHalf from "../assests/box-half.jpg";
import boxOpen from "../assests/box-open.jpg";

function OpenBoxScene() {
  const [stage, setStage] = useState("closed");

  const handleBoxClick = () => {
    if (stage === "closed") {
      setStage("opening1");
      return;
    }

    if (stage === "opening1") {
      setStage("open");
      return;
    }

    if (stage === "open") {
      const portfolioSection = document.getElementById("portfolio-start");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const getBoxImage = () => {
    if (stage === "closed") return boxClosed;
    if (stage === "opening1") return boxHalf;
    return boxOpen;
  };

  const getTitle = () => {
    if (stage === "closed") return "Your package has arrived";
    if (stage === "opening1") return "A sneak peek inside...";
    return "Welcome to my portfolio";
  };

  const getSubtitle = () => {
    if (stage === "closed") return "Tap to open";
    if (stage === "opening1") return "Tap to reveal everything";
    return "Scroll down to explore";
  };

  return (
    <section className="hero-box-section">
      <div className="hero-box-card" onClick={handleBoxClick}>
        <img src={getBoxImage()} alt="Portfolio box" className="hero-box-image" />
      </div>

      <h1 className="hero-title">{getTitle()}</h1>
      <p className="hero-subtitle">{getSubtitle()}</p>

      <div className="hero-dots">
        <span className={stage === "closed" ? "dot active" : "dot"} />
        <span className={stage === "opening1" ? "dot active" : "dot"} />
        <span className={stage === "open" ? "dot active" : "dot"} />
      </div>

      {stage === "open" && (
        <button
          className="scroll-btn"
          onClick={() => {
            const portfolioSection = document.getElementById("portfolio-start");
            if (portfolioSection) {
              portfolioSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Explore Portfolio
        </button>
      )}
    </section>
  );
}

export default OpenBoxScene;