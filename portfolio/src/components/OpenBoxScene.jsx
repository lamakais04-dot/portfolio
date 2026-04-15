import { useState } from "react";
import FloatingItem from "./FloatingItem";
import ContentModal from "./ContentModal";
import { portfolioItems } from "../data/portfolioData";
import closedBoxImage from "../assets/box-closed.jpg";
import halfOpenBoxImage from "../assets/box-half.jpg";
import openBoxImage from "../assets/box-open.jpg";

function OpenBoxScene() {
  const [stage, setStage] = useState("closed");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleBoxClick = () => {
    if (stage === "closed") setStage("opening1");
    else if (stage === "opening1") setStage("opening2");
    else if (stage === "opening2") setStage("open");
  };

  const getBoxImage = () => {
    if (stage === "closed") return closedBoxImage;
    if (stage === "opening1") return halfOpenBoxImage;
    return openBoxImage;
  };

  return (
    <div className="scene">
      <div className="box-wrapper" onClick={handleBoxClick}>
        <img src={getBoxImage()} alt="Box" className="box-image" />
      </div>

      {stage === "open" && (
        <div className="floating-items">
          {portfolioItems.map((item) => (
            <FloatingItem
              key={item.id}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      )}

      {selectedItem && (
        <ContentModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

export default OpenBoxScene;
