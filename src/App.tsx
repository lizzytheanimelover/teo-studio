import { useState } from "react";
import type { FormEvent } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { projects } from "./data/projects";
import ProjectPage from "./pages/ProjectPage";
import ServicePage from "./pages/ServicePage";

function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setFormSubmitted(false);
    setFormError(false);

    try {
      const response = await fetch("https://formspree.io/f/xqpkdbla", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      console.log("Formspree response:", result);
      console.log("Formspree status:", response.status);

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
      } else {
        setFormError(true);
        console.error("Formspree submission failed:", result);
      }
    } catch (error) {
      setFormError(true);
      console.error("Formspree network error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="teo-studio">
      <nav className="navbar">
        <Link to="/" className="brand">
          <img
            src="/brand/teostudio-wordmark-dark.png"
            alt="TeoStudio"
            className="brand-logo"
          />
        </Link>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Start a project
        </a>
      </nav>

      <main>
        {/* ==================================================
            HERO
        ================================================== */}

        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">DIGITAL DESIGN & DEVELOPMENT</p>

            <h1>
              Websites that make
              <span> great products </span>
              look great.
            </h1>

            <p className="hero-description">
              Modern, fast websites for startups and growing businesses.
              Designed to look credible, communicate clearly, and turn
              visitors into customers.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-button">
                View our work
                <span>↗</span>
              </a>

              <a href="#contact" className="secondary-button">
                Start a project
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card hero-card-main">
              <div className="card-top">
                <span className="card-dot"></span>
                <span className="card-dot"></span>
                <span className="card-dot"></span>
              </div>

              <div className="card-content">
                <div className="card-line card-line-short"></div>
                <div className="card-line"></div>
                <div className="card-line card-line-medium"></div>

                <div className="card-grid">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="floating-label label-one">
              <span>01</span>
              Startup websites
            </div>

            <div className="floating-label label-two">
              <span>02</span>
              Business websites
            </div>
          </div>
        </section>

        {/* ==================================================
            WORK
        ================================================== */}

        <section className="work-section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>

              <h2>Built with purpose.</h2>
            </div>

            <p>
              A selection of websites and digital products we've designed
              and built.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                key={project.id}
                className={`project-card ${
                  project.featured ? "project-large" : ""
                }`}
              >
                <Link
                  to={`/project/${project.id}`}
                  className={`project-preview ${
                    project.id === "perfect-thorough-cleaning"
                      ? "project-cleaning"
                      : "project-teo"
                  }`}
                  aria-label={`View ${project.title}`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  ) : (
                    <div className="preview-placeholder">
                      <span>PROJECT PREVIEW</span>
                    </div>
                  )}
                </Link>

                <div className="project-info">
                  <div>
                    <p className="project-number">{project.number}</p>

                    <h3>{project.title}</h3>

                    <p>{project.category}</p>
                  </div>

                  <Link
                    to={`/project/${project.id}`}
                    className="project-arrow"
                    aria-label={`View ${project.title}`}
                  >
                    ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ==================================================
            SERVICES
        ================================================== */}

        <section className="services-section" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE BUILD</p>

              <h2>From idea to online.</h2>
            </div>
          </div>

          <div className="services-list">
            <Link
              to="/services/startup-websites"
              className="service"
            >
              <span className="service-number">01</span>

              <div className="service-content">
                <h3>Startup Websites</h3>

                <p>
                  Landing pages and marketing websites that help
                  early-stage startups communicate their product and
                  build credibility.
                </p>
              </div>

              <span className="service-arrow">↗</span>
            </Link>

            <Link
              to="/services/business-websites"
              className="service"
            >
              <span className="service-number">02</span>

              <div className="service-content">
                <h3>Business Websites</h3>

                <p>
                  Professional websites designed to showcase your
                  services, build trust, and generate enquiries.
                </p>
              </div>

              <span className="service-arrow">↗</span>
            </Link>

            <Link
              to="/services/digital-products"
              className="service"
            >
              <span className="service-number">03</span>

              <div className="service-content">
                <h3>Digital Products</h3>

                <p>
                  Lightweight MVPs, dashboards, internal tools, and
                  web applications for businesses that need more than
                  a website.
                </p>
              </div>

              <span className="service-arrow">↗</span>
            </Link>
          </div>
        </section>

        {/* ==================================================
            ABOUT
        ================================================== */}

        <section className="about-section" id="about">
          <div className="about-number">/ 03</div>

          <div className="about-content">
            <p className="eyebrow">ABOUT TEO STUDIO</p>

            <h2>
              We build digital experiences
              <span> for people with something worth building.</span>
            </h2>

            <div className="about-text">
              <p>
                TeoStudio is a design and development studio focused on
                websites, digital products, and thoughtful interfaces.
              </p>

              <p>
                We work with founders and businesses to turn ideas into
                digital experiences that look good, communicate clearly,
                and actually work.
              </p>
            </div>

            <div className="about-values">
              <div className="about-value">
                <span>01</span>

                <div>
                  <h3>Think clearly</h3>

                  <p>
                    Good design starts with understanding the problem
                    before trying to solve it.
                  </p>
                </div>
              </div>

              <div className="about-value">
                <span>02</span>

                <div>
                  <h3>Keep it useful</h3>

                  <p>
                    We focus on experiences that make things easier,
                    clearer, and more useful for the people using them.
                  </p>
                </div>
              </div>

              <div className="about-value">
                <span>03</span>

                <div>
                  <h3>Build with purpose</h3>

                  <p>
                    Every project should have a reason for existing —
                    not just another pretty interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            CONTACT
        ================================================== */}

        <section className="contact-section" id="contact">
          <div className="contact-intro">
            <p className="eyebrow">HAVE A PROJECT?</p>

            <h2>
              Let's build something
              <span> people remember.</span>
            </h2>

            <p className="contact-description">
              Have a website, product, or idea in mind?
              Tell us what you're building and let's figure out
              how to bring it to life.
            </p>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  <span>Name</span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label>
                  <span>Email</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  <span>Company / Project</span>

                  <input
                    type="text"
                    name="company"
                    placeholder="What are you building?"
                  />
                </label>

                <label>
                  <span>Project type</span>

                  <select
                    name="projectType"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>

                    <option value="Website">
                      Website
                    </option>

                    <option value="Web application">
                      Web application
                    </option>

                    <option value="UI/UX design">
                      UI/UX design
                    </option>

                    <option value="Digital product">
                      Digital product
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </label>
              </div>

              <label>
                <span>Budget</span>

               <select
  name="budget"
  required
  defaultValue=""
>
  <option value="" disabled>
    Select a budget range
  </option>

  <option value="Under S$600">
    Under S$600
  </option>

  <option value="S$600 – S$1,000">
    S$600 – S$1,000
  </option>

  <option value="S$1,000 – S$1,800">
    S$1,000 – S$1,800
  </option>

  <option value="S$1,800 – S$3,000">
    S$1,800 – S$3,000
  </option>

  <option value="S$3,000+">
    S$3,000+
  </option>

  <option value="Not sure yet">
    Not sure yet
  </option>
</select>
              </label>

              <label>
                <span>Tell us about the project</span>

                <textarea
                  name="details"
                  placeholder="What are you looking to build? Tell us a little about the project, what you need, and what you're hoping to achieve."
                  rows={6}
                  required
                ></textarea>
              </label>

              <div className="contact-form-footer">
                <div>
                  {formError && (
                    <p className="form-success">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="contact-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send enquiry"}

                  <span>↗</span>
                </button>
              </div>
            </form>

            <div className="contact-direct">
              <span>Prefer email?</span>

              <button
                type="button"
                className="contact-email-link"
                onClick={() => setShowEmailOptions(true)}
              >
                elizabethakorah88@gmail.com
                <span>↗</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ==================================================
          SUCCESS POPUP
      ================================================== */}

      {formSubmitted && (
        <div className="success-popup">
          <div className="success-popup-icon">✓</div>

          <div className="success-popup-content">
            <strong>Sent successfully</strong>

            <span>
              Thanks for reaching out. I'll get back to you as soon
              as possible.
            </span>
          </div>

          <button
            type="button"
            className="success-popup-close"
            onClick={() => setFormSubmitted(false)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}

      {/* ==================================================
          EMAIL OPTIONS MODAL
      ================================================== */}

      {showEmailOptions && (
        <div
          className="email-options-overlay"
          onClick={() => setShowEmailOptions(false)}
        >
          <div
            className="email-options-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="email-options-close"
              onClick={() => setShowEmailOptions(false)}
              aria-label="Close"
            >
              ×
            </button>

            <p className="eyebrow">
              CONTACT TEO STUDIO
            </p>

            <h3>Choose your email</h3>

            <p>
              How would you like to send your enquiry?
            </p>

            <div className="email-options-buttons">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=elizabethakorah88@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowEmailOptions(false)}
              >
                <span>Gmail</span>
                <span>↗</span>
              </a>

              <a
                href="https://outlook.live.com/mail/0/deeplink/compose?to=elizabethakorah88@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowEmailOptions(false)}
              >
                <span>Outlook</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="footer">
        <Link to="/" className="brand footer-brand">
          <img
            src="/brand/teostudio-wordmark-light.png"
            alt="TeoStudio"
            className="brand-logo"
          />
        </Link>

        <p>Digital design & development.</p>

        <p>
          © {new Date().getFullYear()} Teo Studio
        </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/project/:id"
        element={<ProjectPage />}
      />

      <Route
        path="/services/:service"
        element={<ServicePage />}
      />
    </Routes>
  );
}

export default App;