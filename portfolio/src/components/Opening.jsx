
export default function Opening({ onNext }) {
  return (
    <div className="stage" onClick={onNext}>
      <img src="../assests/open_box.png" />
      <p className="hint">Keep opening...</p>
    </div>
  );
}