import { aboutData, projectsData, skillsData, contactData } from "../data/portfolioData";

function PortfolioSections() {
  return (
    <main id="portfolio-start" className="portfolio-sections">
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
          <div className="about-icon-box">&lt;/&gt;</div>
          <div className="about-content">
            <h2>{aboutData.name}</h2>
            <p className="about-role">{aboutData.role}</p>
            <p className="about-text">{aboutData.bio}</p>

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
        <h2 className="section-heading">What I’ve Built</h2>

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

        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div key={skill.name} className="skill-card">
              <h3>{skill.name}</h3>
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
          <a className="contact-button" href={`mailto:${contactData.email}`}>
            Send a Message
          </a>
        </div>
      </section>
    </main>
  );
}

export default PortfolioSections;