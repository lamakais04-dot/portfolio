import { useState } from "react";
import fullOpenBox from "../assests/full_open_box.png";
import "./FullyOpen.css";

const portfolioParts = [
  {
    id: "projects",
    label: "Projects",
    title: "Projects",
    description: "A deep-dive into selected builds: problem, process, stack, and outcomes.",
    position: { top: "38%", left: "27%" },
  },
  {
    id: "skills",
    label: "Skills",
    title: "Skills",
    description: "Core technical strengths, tooling, and what I use most in real projects.",
    position: { top: "30%", left: "49%" },
  },
  {
    id: "about",
    label: "About",
    title: "About Me",
    description: "Background, work style, and the kind of teams and products I like to build.",
    position: { top: "49%", left: "65%" },
  },
  {
    id: "contact",
    label: "Contact",
    title: "Contact",
    description: "Ways to reach me, collaboration options, and next steps.",
    position: { top: "58%", left: "43%" },
  },
];

export default function FullyOpen() {
  const [selectedPart, setSelectedPart] = useState(null);

  if (selectedPart) {
    return (
      <div className="stage detail-page">
        <div className="detail-card">
          <h2>{selectedPart.title}</h2>
          <p>{selectedPart.description}</p>
          <button type="button" onClick={() => setSelectedPart(null)}>
            Back to box
          </button>
        </div>
      </div>
    );
  }

import fullOpenBox from "../assests/full_open_box.png";

export default function FullyOpen({ onNext }) {
  return (
    <div className="stage" onClick={onNext}>
      <img src={fullOpenBox} alt="Fully open box" />
      <p className="hint">Almost there...</p>
    </div>
  );
}
