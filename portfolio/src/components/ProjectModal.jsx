import { useEffect, useState } from "react";

function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const images = project?.images ?? [];

  useEffect(() => {
    setImgIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") moveGallery(1);
      if (e.key === "ArrowLeft") moveGallery(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [imgIndex, images.length]);

  const moveGallery = (dir) => {
    setImgIndex((prev) => (prev + dir + images.length) % images.length);
  };

  if (!project) return null;

  return (
    <div className={`modal-overlay open`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">

        {/* Gallery */}
        <div className="modal-gallery">
          {images.length > 0 ? (
            <>
              <div
                className="gallery-slides"
                style={{ transform: `translateX(-${imgIndex * 100}%)` }}
              >
                {images.map((src, i) => (
                  <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} className="gallery-slide" />
                ))}
              </div>

              {images.length > 1 && (
                <>
                  <button className="gallery-nav gallery-prev" onClick={() => moveGallery(-1)}>‹</button>
                  <button className="gallery-nav gallery-next" onClick={() => moveGallery(1)}>›</button>
                  <div className="gallery-dots">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        className={`gallery-dot ${i === imgIndex ? "active" : ""}`}
                        onClick={() => setImgIndex(i)}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#333", fontSize: "0.8rem" }}>
              No images yet
            </div>
          )}
        </div>

        {/* Body */}
        <div className="modal-body">
          <div className="modal-header">
            <h2 className="modal-title">{project.title}</h2>
            <button className="modal-close" onClick={onClose}>✕</button>
          </div>

          <p className="modal-description">{project.longDescription ?? project.description}</p>

          <div className="modal-tech">
            {project.tech.map((t) => (
              <span key={t} className="modal-tech-tag">{t}</span>
            ))}
          </div>

          <div className="modal-actions">
            {project.liveUrl && (
              <a className="modal-btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                Live demo →
              </a>
            )}
            {project.githubUrl && (
              <a className="modal-btn-secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;