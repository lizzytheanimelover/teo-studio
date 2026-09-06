import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { projects } from "../data/projects";

import "../App.css";
import "../ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();

  const projectIndex = projects.findIndex((item) => item.id === id);
  const project = projects[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <main className="project-page">
        <div className="project-page-inner project-not-found">
          <p className="section-eyebrow">404</p>

          <h1>Project not found.</h1>

          <p>
            The project you're looking for doesn't exist or may have been
            moved.
          </p>

          <Link to="/" className="project-back-link">
            ← Back to work
          </Link>
        </div>
      </main>
    );
  }

  const previousProject =
    projectIndex > 0 ? projects[projectIndex - 1] : null;

  const nextProject =
    projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : null;

  return (
    <main className="project-page">
      <div className="project-page-inner">

        {/* ==================================================
            BACK LINK
        ================================================== */}

        <Link to="/" className="project-back-link">
          ← Back to work
        </Link>

        {/* ==================================================
            HERO
        ================================================== */}

        <header className="project-hero">
          <div className="project-hero-meta">
            <p className="section-eyebrow">
              {project.number} — {project.category}
            </p>

            <p className="project-year">{project.year}</p>
          </div>

          <h1>{project.title}</h1>

          <div className="project-hero-bottom">
            <p className="project-hero-description">
              {project.description}
            </p>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-external-link project-hero-link"
              >
                Visit live website
                <span>↗</span>
              </a>
            )}
          </div>
        </header>

        {/* ==================================================
            MAIN PROJECT VISUAL
        ================================================== */}

        <section className="project-main-preview">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          ) : (
            <div className="project-detail-placeholder">
              <div>
                <span className="placeholder-number">
                  {project.number}
                </span>

                <span>PROJECT PREVIEW</span>
              </div>
            </div>
          )}
        </section>

        {/* ==================================================
            PROJECT DETAILS
        ================================================== */}

        <section className="project-details">
          <div className="project-detail-intro">
            <p className="section-eyebrow">THE PROJECT</p>

            <h2>
              {project.overview}
            </h2>
          </div>

          <div className="project-detail-copy">
            <div className="project-copy-block">
              <p className="project-copy-label">THE CHALLENGE</p>

              <p>{project.challenge}</p>
            </div>

            <div className="project-copy-block">
              <p className="project-copy-label">THE SOLUTION</p>

              <p>{project.solution}</p>
            </div>
          </div>
        </section>

        {/* ==================================================
            PROJECT META
        ================================================== */}

        <section className="project-meta-section">
          <div className="project-meta-block">
            <p className="section-eyebrow">SERVICES</p>

            <div className="project-tag-list">
              {project.services.map((service) => (
                <span key={service} className="project-tag">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="project-meta-block">
            <p className="section-eyebrow">TECHNOLOGY</p>

            <div className="project-tag-list">
              {project.technologies.map((technology) => (
                <span key={technology} className="project-tag">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            GALLERY
        ================================================== */}

        {project.gallery && project.gallery.length > 0 && (
          <section className="project-gallery">
            {project.gallery.map((image, index) => (
              <div className="project-gallery-item" key={image}>
                <img
                  src={image}
                  alt={`${project.title} — ${index + 1}`}
                  className="project-image"
                />
              </div>
            ))}
          </section>
        )}

        {/* ==================================================
            LIVE PROJECT
        ================================================== */}

        {project.url && (
          <section className="project-live-section">
            <div>
              <p className="section-eyebrow">SEE IT IN ACTION</p>

              <h2>
                Visit the
                <span> live project.</span>
              </h2>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              Visit website
              <span>↗</span>
            </a>
          </section>
        )}

        {/* ==================================================
            PROJECT NAVIGATION
        ================================================== */}

        <section className="project-navigation">
          <div className="project-navigation-heading">
            <p className="section-eyebrow">MORE WORK</p>

            <h2>Keep exploring.</h2>
          </div>

          <div className="project-navigation-grid">
            {previousProject ? (
              <Link
                to={`/project/${previousProject.id}`}
                className="project-nav-card project-nav-previous"
              >
                <span className="project-nav-direction">
                  ← Previous project
                </span>

                <span className="project-nav-number">
                  {previousProject.number}
                </span>

                <h3>{previousProject.title}</h3>

                <span className="project-nav-category">
                  {previousProject.category}
                </span>
              </Link>
            ) : (
              <div className="project-nav-empty">
                <span>First project</span>
              </div>
            )}

            {nextProject ? (
              <Link
                to={`/project/${nextProject.id}`}
                className="project-nav-card project-nav-next"
              >
                <span className="project-nav-direction">
                  Next project →
                </span>

                <span className="project-nav-number">
                  {nextProject.number}
                </span>

                <h3>{nextProject.title}</h3>

                <span className="project-nav-category">
                  {nextProject.category}
                </span>
              </Link>
            ) : (
              <div className="project-nav-empty">
                <span>Last project</span>
              </div>
            )}
          </div>
        </section>

        {/* ==================================================
            BACK TO WORK
        ================================================== */}

        <div className="project-final-link">
          <Link to="/" className="project-back-link">
            ← View all work
          </Link>
        </div>
      </div>
    </main>
  );
}