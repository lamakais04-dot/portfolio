
import openBox from "../assests/open_box.png";

export default function Opening({ onNext }) {
  return (
    <div className="stage" onClick={onNext}>
      <img src={openBox} alt="Open box" />
      <p className="hint">Keep opening...</p>
    </div>
  );
}
