import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import "./ServicePage.css";

type ServiceKey =
  | "startup-websites"
  | "business-websites"
  | "digital-products";

interface ServiceData {
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
  description: string;

  whoFor: string;

  benefits: {
    number: string;
    title: string;
    description: string;
  }[];

  includes: string[];

  process: {
    number: string;
    title: string;
    description: string;
  }[];

  projectIds: string[];
}

const services: Record<ServiceKey, ServiceData> = {
  /* ==================================================
     STARTUP WEBSITES
  ================================================== */

  "startup-websites": {
    number: "01",

    eyebrow: "STARTUP WEBSITES",

    title: "Launch with a website that makes people care.",

    intro:
      "Your website is often the first place someone experiences your startup. It should explain the product quickly, look credible, and give people a reason to take the next step.",

    description:
      "We design and build focused marketing websites and landing pages for startups that need to communicate their idea clearly, establish credibility, and move quickly.",

    whoFor:
      "For founders, early-stage teams, SaaS products, and new digital businesses that need a strong online presence without spending months building it.",

    benefits: [
      {
        number: "01",
        title: "Explain the idea",
        description:
          "Turn a complicated product into a clear story that visitors can understand without needing a sales call.",
      },
      {
        number: "02",
        title: "Look credible",
        description:
          "A thoughtful visual identity and polished interface can make an early-stage product feel ready for the market.",
      },
      {
        number: "03",
        title: "Drive action",
        description:
          "Every section has a purpose, guiding visitors toward signing up, booking a demo, contacting you, or taking the next step.",
      },
      {
        number: "04",
        title: "Move quickly",
        description:
          "We focus on what your launch actually needs instead of adding unnecessary complexity before you have users.",
      },
    ],

    includes: [
      "Landing pages",
      "Startup marketing websites",
      "SaaS websites",
      "Product positioning",
      "Responsive UI design",
      "Conversion-focused layouts",
      "Call-to-action strategy",
      "Frontend development",
      "CMS integration",
      "Deployment & launch",
    ],

    process: [
      {
        number: "01",
        title: "Understand",
        description:
          "We get clear on your product, audience, goals, positioning, and what the website needs to achieve.",
      },
      {
        number: "02",
        title: "Structure",
        description:
          "We organize the story of your product so visitors can understand what it is, why it matters, and what to do next.",
      },
      {
        number: "03",
        title: "Design",
        description:
          "We turn the strategy into a visual direction and interface that gives your product a distinct, credible presence.",
      },
      {
        number: "04",
        title: "Build",
        description:
          "We develop the website into a fast, responsive experience that works across phones, tablets, and desktops.",
      },
      {
        number: "05",
        title: "Launch",
        description:
          "We test the experience, make the final refinements, and get everything ready to put in front of your audience.",
      },
    ],

    projectIds: [],
  },

  /* ==================================================
     BUSINESS WEBSITES
  ================================================== */

  "business-websites": {
    number: "02",

    eyebrow: "BUSINESS WEBSITES",

    title: "A better website for a better first impression.",

    intro:
      "People judge businesses online before they ever make contact. Your website should make your company feel established, trustworthy, and worth choosing.",

    description:
      "We create professional business websites that present your services clearly, build trust with visitors, and make it easy for potential customers to get in touch.",

    whoFor:
      "For service businesses, agencies, local companies, consultants, professionals, and growing businesses that have outgrown a basic or outdated website.",

    benefits: [
      {
        number: "01",
        title: "Build trust",
        description:
          "A professional website gives potential customers confidence that they're dealing with a real, established business.",
      },
      {
        number: "02",
        title: "Show what you do",
        description:
          "Services, pricing, previous work, company information, and important details are presented clearly and intentionally.",
      },
      {
        number: "03",
        title: "Generate enquiries",
        description:
          "Clear calls to action make it simple for interested visitors to contact you, request a quote, or book your service.",
      },
      {
        number: "04",
        title: "Stand out",
        description:
          "Instead of looking like every other business in your industry, your website becomes part of your brand.",
      },
    ],

    includes: [
      "Business websites",
      "Service pages",
      "About pages",
      "Pricing sections",
      "Project & work galleries",
      "Testimonials",
      "Contact & enquiry flows",
      "Booking integrations",
      "Responsive design",
      "Frontend development",
    ],

    process: [
      {
        number: "01",
        title: "Discover",
        description:
          "We understand your business, customers, services, competitors, and what makes your company worth choosing.",
      },
      {
        number: "02",
        title: "Structure",
        description:
          "We organize your information so visitors can quickly understand what you offer and find what they need.",
      },
      {
        number: "03",
        title: "Design",
        description:
          "We create a visual direction that reflects your business and gives the website a polished, professional feel.",
      },
      {
        number: "04",
        title: "Build",
        description:
          "We develop the website into a responsive experience that looks great and works reliably across devices.",
      },
      {
        number: "05",
        title: "Launch",
        description:
          "After testing and final refinements, your new website is ready for customers to discover and use.",
      },
    ],

    projectIds: ["perfect-thorough-cleaning"],
  },

  /* ==================================================
     DIGITAL PRODUCTS
  ================================================== */

  "digital-products": {
    number: "03",

    eyebrow: "DIGITAL PRODUCTS",

    title: "More than a website. Build something people can use.",

    intro:
      "Some ideas need more than a marketing page. They need dashboards, workflows, accounts, data, and real product experiences.",

    description:
      "We design and develop lightweight digital products, MVPs, dashboards, internal tools, and web applications that turn ideas into usable products.",

    whoFor:
      "For founders, businesses, and teams with a product idea, an inefficient workflow, or a problem that needs software instead of another spreadsheet.",

    benefits: [
      {
        number: "01",
        title: "Validate ideas",
        description:
          "Build the core version of a product and put it in front of real users without overbuilding from day one.",
      },
      {
        number: "02",
        title: "Simplify workflows",
        description:
          "Turn repetitive manual processes into focused digital tools that save time and reduce unnecessary work.",
      },
      {
        number: "03",
        title: "Connect the pieces",
        description:
          "Bring interfaces, databases, APIs, authentication, AI services, and other systems together into one experience.",
      },
      {
        number: "04",
        title: "Build for growth",
        description:
          "Start with a practical foundation that can evolve as you learn what your users actually need.",
      },
    ],

    includes: [
      "MVP development",
      "Web applications",
      "Dashboards",
      "Internal tools",
      "Product UI/UX",
      "Authentication",
      "Database integration",
      "API integrations",
      "AI-powered features",
      "Desktop applications",
    ],

    process: [
      {
        number: "01",
        title: "Define",
        description:
          "We reduce the idea to the core problem, users, features, and workflow that matter most.",
      },
      {
        number: "02",
        title: "Map",
        description:
          "We define how users move through the product and how the different pieces of the system connect.",
      },
      {
        number: "03",
        title: "Design",
        description:
          "We design the product experience and interfaces users will actually interact with.",
      },
      {
        number: "04",
        title: "Develop",
        description:
          "We build the product with practical technologies and a structure that can grow with the idea.",
      },
      {
        number: "05",
        title: "Iterate",
        description:
          "We test the experience, refine what matters, and prepare the product for real users.",
      },
    ],

    projectIds: ["teoassist"],
  },
};

function ServicePage() {
  const { service } = useParams();

  const [showEmailOptions, setShowEmailOptions] = useState(false);

  const serviceData = services[service as ServiceKey];

  /* ==================================================
     404
  ================================================== */

  if (!serviceData) {
    return (
      <div className="service-page service-page-not-found">
        <nav className="navbar">
          <Link to="/" className="brand">
            Teo<span>Studio</span>
          </Link>

          <Link to="/" className="nav-cta">
            Back home
          </Link>
        </nav>

        <main className="service-not-found-content">
          <p className="eyebrow">404</p>

          <h1>
            This service
            <span> doesn't exist.</span>
          </h1>

          <Link to="/" className="primary-button">
            Back to home
            <span>↗</span>
          </Link>
        </main>
      </div>
    );
  }

  /* ==================================================
     RELATED PROJECTS
  ================================================== */

  const relatedProjects = serviceData.projectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);

  return (
    <div className="service-page">
      {/* ==================================================
          NAVBAR
      ================================================== */}

      <nav className="navbar service-navbar">
        <Link to="/" className="brand">
          Teo<span>Studio</span>
        </Link>

        <div className="nav-links">
          <Link to="/#work">Work</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#contact">Contact</Link>
        </div>

        <button
          type="button"
          className="nav-cta"
          onClick={() => setShowEmailOptions(true)}
        >
          Start a project
        </button>
      </nav>

      <main>
        {/* ==================================================
            HERO
        ================================================== */}

        <section className="service-hero">
          <div className="service-hero-meta">
            <span>/ {serviceData.number}</span>

            <span>{serviceData.eyebrow}</span>
          </div>

          <div className="service-hero-content">
            <h1>{serviceData.title}</h1>

            <p>{serviceData.intro}</p>

            <a href="#overview" className="primary-button">
              Explore the service
              <span>↓</span>
            </a>
          </div>
        </section>

        {/* ==================================================
            OVERVIEW
        ================================================== */}

        <section
          className="service-overview"
          id="overview"
        >
          <div className="service-section-label">
            <span>/ 01</span>
            <span>THE SERVICE</span>
          </div>

          <div className="service-overview-content">
            <h2>{serviceData.description}</h2>
          </div>
        </section>

        {/* ==================================================
            WHO IT'S FOR
        ================================================== */}

        <section className="service-audience">
          <div className="service-section-label">
            <span>/ 02</span>
            <span>WHO IT'S FOR</span>
          </div>

          <div className="service-audience-content">
            <p>{serviceData.whoFor}</p>
          </div>
        </section>

        {/* ==================================================
            WHY IT MATTERS
        ================================================== */}

        <section className="service-benefits">
          <div className="service-section-heading">
            <div>
              <p className="eyebrow">WHY IT MATTERS</p>

              <h2>Built around the outcome.</h2>
            </div>

            <p>
              Good digital work isn't just about how something looks.
              It's about making the right things easier for the people
              using it.
            </p>
          </div>

          <div className="benefits-grid">
            {serviceData.benefits.map((benefit) => (
              <div
                className="benefit-item"
                key={benefit.number}
              >
                <span className="benefit-number">
                  {benefit.number}
                </span>

                <div>
                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            WHAT'S INCLUDED
        ================================================== */}

        <section
          className="service-included"
          id="included"
        >
          <div className="service-section-heading">
            <div>
              <p className="eyebrow">WHAT YOU GET</p>

              <h2>Everything you need.</h2>
            </div>

            <p>
              Every project is tailored to the problem we're solving,
              but these are the areas we can help with.
            </p>
          </div>

          <div className="included-grid">
            {serviceData.includes.map((item, index) => (
              <div
                className="included-item"
                key={item}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item}</h3>

                <span className="included-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            PROCESS
        ================================================== */}

        <section className="service-process">
          <div className="service-section-heading">
            <div>
              <p className="eyebrow">HOW WE WORK</p>

              <h2>A simple process.</h2>
            </div>

            <p>
              No unnecessary complexity. Just a clear path from the
              first conversation to a finished product.
            </p>
          </div>

          <div className="process-list">
            {serviceData.process.map((step) => (
              <div
                className="process-step"
                key={step.number}
              >
                <span className="process-number">
                  {step.number}
                </span>

                <div className="process-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            RELATED WORK
        ================================================== */}

        {relatedProjects.length > 0 && (
          <section className="service-work">
            <div className="service-section-heading">
              <div>
                <p className="eyebrow">RELATED WORK</p>

                <h2>We've built this before.</h2>
              </div>

              <p>
                A look at a project that shows this service in
                practice.
              </p>
            </div>

            <div className="service-projects">
              {relatedProjects.map((project) => (
                <Link
                  key={project!.id}
                  to={`/project/${project!.id}`}
                  className="service-project-card"
                >
                  <div className="service-project-image">
                    {project!.image ? (
                      <img
                        src={project!.image}
                        alt={project!.title}
                      />
                    ) : (
                      <div className="preview-placeholder">
                        <span>PROJECT PREVIEW</span>
                      </div>
                    )}
                  </div>

                  <div className="service-project-info">
                    <div>
                      <span>{project!.number}</span>

                      <h3>{project!.title}</h3>

                      <p>{project!.category}</p>
                    </div>

                    <span className="service-project-arrow">
                      ↗
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ==================================================
            CTA
        ================================================== */}

        <section className="service-cta">
          <p className="eyebrow">READY TO START?</p>

          <h2>
            Let's make something
            <span> worth building.</span>
          </h2>

          <p>
            Tell us what you're working on and we'll figure out
            the best way to bring it online.
          </p>

          <button
            type="button"
            className="contact-button"
            onClick={() => setShowEmailOptions(true)}
          >
            Start a project
            <span>↗</span>
          </button>
        </section>
      </main>

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

            <p className="eyebrow">CONTACT TEO STUDIO</p>

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
        <Link to="/" className="brand">
          Teo<span>Studio</span>
        </Link>

        <p>Digital design & development.</p>

        <p>© {new Date().getFullYear()} Teo Studio</p>
      </footer>
    </div>
  );
}

export default ServicePage;