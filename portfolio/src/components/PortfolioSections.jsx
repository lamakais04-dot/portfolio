import { aboutData, projectsData, skillsData, contactData } from "../data/portfolioData";

function PortfolioSections() {
  const [activeProject, setActiveProject] = useState(projectsData[0]?.title ?? "");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const selectedProject = useMemo(
    () => projectsData.find((project) => project.title === activeProject) ?? projectsData[0],
    [activeProject],
  );

  const selectedImages = selectedProject?.images ?? [];
  const canMoveGallery = selectedImages.length > 1;

  const moveGallery = (direction) => {
    if (!canMoveGallery) return;

    setActiveImageIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % selectedImages.length;
      }

      return (prev - 1 + selectedImages.length) % selectedImages.length;
    });
  };

  const handleProjectOpen = (title) => {
    setActiveProject(title);
    setActiveImageIndex(0);
  };

  return (
    <main className="portfolio-page">
      <nav className="top-nav">
        <div className="logo">Lama.dev</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="about" className="content-section">
        <p className="section-label">ABOUT ME</p>

        <div className="about-card">
          <div className="about-image-wrap">
            <img
              src={aboutData.profileImage}
              alt={aboutData.name}
              className="about-image"
            />
          </div>

          <div className="about-content">
            <h2>{aboutData.name}</h2>
            <p className="about-role">{aboutData.role}</p>
            <p className="about-text">{aboutData.bio}</p>

            <div className="about-highlights">
              {aboutData.highlights.map((highlight) => (
                <p key={highlight} className="highlight-pill">
                  {highlight}
                </p>
              ))}
            </div>

            <div className="tag-row">
              {aboutData.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="content-section">
        <p className="section-label">PROJECTS</p>
        <h2 className="section-heading">Interactive Project Explorer</h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-icon">□</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tag-row">
                {project.tech.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="content-section">
        <p className="section-label">SKILLS</p>
        <h2 className="section-heading">My Toolkit</h2>

        <div className="skills-grid nicer-skills">
          {skillsData.map((skill) => (
            <div key={skill.name} className="skill-card better-skill-card">
              <div className="skill-top">
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.name}</h3>
              </div>
              <p>{skill.type}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="content-section contact-section">
        <p className="section-label">CONTACT</p>
        <h2 className="section-heading centered">Let&apos;s Connect</h2>
        <p className="contact-intro">{contactData.intro}</p>

        <div className="contact-card">
          <div className="contact-icon">✉</div>
          <h3>{contactData.email}</h3>
          <p>{contactData.status}</p>

          <div className="contact-actions">
            <a
              className="contact-button"
              href={`mailto:${contactData.email}`}
            >
              Send a Message
            </a>

            <a
              className="contact-secondary"
              href={contactData.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="contact-secondary"
              href={contactData.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PortfolioSections;
