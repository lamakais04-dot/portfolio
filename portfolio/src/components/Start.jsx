import "./Start.css";
import closedBox from "../assests/closed_box.png";

export default function Start({ onNext }) {
  return (
    <div className="stage">
      <img src={closedBox} className="box" onClick={onNext} alt="Closed box" />

      <p className="hint">Click to open</p>
    </div>
  );
}
