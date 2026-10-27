import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="work">
      <div className="container">
        <span className="eyebrow">Work</span>
        <h2 className="section-heading">Selected projects</h2>
        <p className="section-sub">
          A mix of personal builds, a university capstone, and work in progress.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__top">
                <span className={`status-badge status-badge--${project.status}`}>
                  {project.statusLabel}
                </span>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__summary">{project.summary}</p>

              <div className="project-card__stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag mono">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-card__links">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">
                    GitHub &rarr;
                  </a>
                ) : (
                  <span className="project-card__link project-card__link--disabled">
                    Repo coming soon
                  </span>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__link">
                    Live demo &rarr;
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
