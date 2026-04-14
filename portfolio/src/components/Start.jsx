import "./Start.css";
export default function Start({ onNext }) {
  return (
    <div className="stage">
      <img
        src="../assests/closed_box.png"
        className="box"
        onClick={onNext}
      />

      <p className="hint">Click to open</p>
    </div>
  );
}