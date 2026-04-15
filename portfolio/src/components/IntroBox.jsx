import closedBoxImage from "../assests/box-closed.jpg";

function IntroBox({ onClick }) {
  return (
    <div className="box-container" onClick={onClick}>
      <img
        src={closedBoxImage}
        alt="Closed Box"
        className="box-image"
      />
      <p className="hint-text">Click to open</p>
    </div>
  );
}

export default IntroBox;
