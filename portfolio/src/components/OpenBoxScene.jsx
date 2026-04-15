import { useState } from "react";
import FloatingItem from "./FloatingItem";
import ContentModal from "./ContentModal";
import { portfolioItems } from "../data/portfolioData";

function OpenBoxScene() {
  const [stage, setStage] = useState("closed");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleBoxClick = () => {
    if (stage === "closed") setStage("opening1");
    else if (stage === "opening1") setStage("opening2");
    else if (stage === "opening2") setStage("open");
  };

  const getBoxImage = () => {
    if (stage === "closed") return "src/assets/closed-box.png";
    if (stage === "opening1") return "/src/assets/half-open-box.png";
    if (stage === "opening2") return "/src/assets/opening-box.png";
    return boxOpen;
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