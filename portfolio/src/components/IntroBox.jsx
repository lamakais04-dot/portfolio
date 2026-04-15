function IntroBox({ onClick }) {
  return (
    <div className="box-container" onClick={onClick}>
      <img
        src="/src/assets/closed-box.png"
        alt="Closed Box"
        className="box-image"
      />
      <p className="hint-text">Click to open</p>
    </div>
  );
}

export default IntroBox;