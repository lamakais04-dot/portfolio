
import fullOpenBox from "../assests/full_open_box.png";

export default function FullyOpen({ onNext }) {
  return (
    <div className="stage" onClick={onNext}>
      <img src={fullOpenBox} alt="Fully open box" />
      <p className="hint">Almost there...</p>
    </div>
  );
}
