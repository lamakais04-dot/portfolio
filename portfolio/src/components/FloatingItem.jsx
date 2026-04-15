function FloatingItem({ item, onClick }) {
  return (
    <button
      className="floating-item"
      style={{
        top: item.position.top,
        left: item.position.left
      }}
      onClick={onClick}
    >
      <div className="floating-card">
        <h4>{item.title}</h4>
      </div>
    </button>
  );
}

export default FloatingItem;