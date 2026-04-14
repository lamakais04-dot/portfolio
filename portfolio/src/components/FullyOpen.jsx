
export default function FullyOpen({ onNext }) {
  return (
    <div className="stage" onClick={onNext}>
      <img src="../assests/full_open_box.png" />
      <p className="hint">Almost there...</p>
    </div>
  );
}