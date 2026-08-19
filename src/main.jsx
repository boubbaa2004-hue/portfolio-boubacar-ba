import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  firstName: "Boubacar",
  lastName: "Ba",
  role: "Développeur Web Full Stack Junior",
  location: "Béni Mellal, Maroc",
  mobility: "Maroc entier",
  opportunities: ["Stage", "Alternance", "CDI", "Freelance"],
  email: "boubbaa2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/boubacar-ba-/",
  github: "https://github.com/boubbaa2004-hue",
  cv: "/cv/boubacar-ba-cv.pdf",
  photo: "/images/profile.jpg",
};

const covolivScreenshots = [
  "/projects/covoliv-01.png",
  "/projects/covoliv-02.png",
  "/projects/covoliv-03.png",
  "/projects/covoliv-04.png",
  "/projects/covoliv-05.png",
  "/projects/covoliv-06.png",
  "/projects/covoliv-07.png",
  "/projects/covoliv-08.png",
  "/projects/covoliv-09.png",
  "/projects/covoliv-10.png",
  "/projects/covoliv-11.png",
  "/projects/covoliv-12.png",
  "/projects/covoliv-13.png",
  "/projects/covoliv-14.png",
  "/projects/covoliv-15.png",
];

const skills = {
  Frontend: ["React.js", "JavaScript", "HTML5", "CSS3"],
  Backend: ["Java", "Spring Boot", "Java EE", "PHP", "REST API"],
  "Bases de données": ["MySQL", "Oracle"],
  "Conception & Méthodologie": ["UML", "Merise", "Agile / SCRUM"],
  Réseaux: ["Réseaux informatiques"],
};

const i18n = {
  fr: {
    nav: ["Accueil", "À propos", "Compétences", "Projets", "Contact"],

    badge: "Ouvert aux opportunités",

    eyebrow: "BIENVENUE SUR MON PORTFOLIO",

    hero:
      "Je conçois et développe des applications web modernes en combinant frontend, backend et bases de données.",

    projects: "Voir mes projets",

    cv: "Télécharger mon CV",

    about: "À propos",

    aboutTitle: "Construire du web utile, propre et moderne.",

    aboutText:
      "Diplômé d’une Licence Informatique, je me spécialise dans le développement web Full Stack. J’aime transformer des besoins concrets en applications web structurées, modernes et utiles.",

    skills: "Compétences",

    skillsTitle: "Les technologies que j’utilise.",

    projectTitle: "Projets sélectionnés",

    projectHeading:
      "Un projet principal qui montre mon approche Full Stack.",

    featured: "PROJET PRINCIPAL · PROJET DE FIN D’ÉTUDES",

    covoIntro:
      "CovoLiv est une plateforme web de mise en relation qui combine deux services : le covoiturage et la livraison de colis.",

    covoDescription:
      "L’objectif de CovoLiv est de permettre aux utilisateurs de partager leurs trajets tout en offrant la possibilité de transporter des colis de manière simple, sécurisée et flexible. La plateforme facilite la mise en relation entre les conducteurs et les personnes souhaitant faire transporter un colis.",

    covoContext:
      "Ce projet a été conçu et développé dans le cadre de mon Projet de Fin d’Études en Licence Informatique. Il m’a permis de mettre en pratique mes compétences en conception, développement frontend et backend, gestion de base de données, authentification, géolocalisation et développement d’API REST.",

    featuresTitle: "Fonctionnalités principales",

    features: [
      "Création et gestion des trajets",
      "Mise en relation conducteurs et passagers",
      "Publication et transport de colis",
      "Négociation du prix",
      "Suivi des trajets en temps réel",
      "Géolocalisation avec carte interactive",
      "Sécurisation des livraisons par code OTP",
      "Authentification et sécurisation avec JWT",
    ],

    techTitle: "Technologies utilisées",

    frontend: "GitHub Frontend",

    backend: "GitHub Backend",

    contact: "Travaillons ensemble",

    contactTitle: "Une opportunité ? Parlons-en.",

    contactText:
      "Vous avez une opportunité, un projet ou souhaitez simplement échanger ? Je suis disponible pour discuter.",

    emailButton: "Me contacter par e-mail",

    footer: "© 2026 Boubacar Ba. Tous droits réservés.",

    location: "Localisation",

    mobility: "Mobilité",

    opportunities: "Opportunités",

    degree: "Formation",

    degreeValue: "Licence Informatique",

    available: "Disponible pour",

    gallery: "Quelques captures d’écran de CovoLiv",

    previous: "Capture précédente",

    next: "Capture suivante",

    close: "Fermer",

    screenshot: "Capture",

    openImage: "Ouvrir l’image en grand",
  },

  en: {
    nav: ["Home", "About", "Skills", "Projects", "Contact"],

    badge: "Open to opportunities",

    eyebrow: "WELCOME TO MY PORTFOLIO",

    hero:
      "I design and build modern web applications by combining frontend, backend and database technologies.",

    projects: "View projects",

    cv: "Download my CV",

    about: "About",

    aboutTitle: "Building useful, clean and modern web experiences.",

    aboutText:
      "With a Bachelor's degree in Computer Science, I focus on Full Stack web development. I enjoy turning real needs into structured, modern and useful web applications.",

    skills: "Skills",

    skillsTitle: "Technologies I work with.",

    projectTitle: "Selected projects",

    projectHeading:
      "A featured project showing my Full Stack approach.",

    featured: "FEATURED PROJECT · GRADUATION PROJECT",

    covoIntro:
      "CovoLiv is a web platform that combines two services: carpooling and parcel delivery.",

    covoDescription:
      "The goal of CovoLiv is to allow users to share their trips while providing a simple, secure and flexible way to transport parcels. The platform connects drivers with people who need to send parcels.",

    covoContext:
      "This project was designed and developed as part of my Bachelor's graduation project in Computer Science. It allowed me to apply my skills in software design, frontend and backend development, database management, authentication, geolocation and REST API development.",

    featuresTitle: "Main features",

    features: [
      "Trip creation and management",
      "Driver and passenger matching",
      "Parcel publication and delivery",
      "Price negotiation",
      "Real-time trip tracking",
      "Interactive map and geolocation",
      "OTP-based delivery security",
      "JWT authentication and security",
    ],

    techTitle: "Technologies used",

    frontend: "Frontend GitHub",

    backend: "Backend GitHub",

    contact: "Let's work together",

    contactTitle: "An opportunity? Let's talk.",

    contactText:
      "Have an opportunity, a project, or simply want to connect? I would be happy to talk.",

    emailButton: "Contact me by email",

    footer: "© 2026 Boubacar Ba. All rights reserved.",

    location: "Location",

    mobility: "Mobility",

    opportunities: "Opportunities",

    degree: "Education",

    degreeValue: "Bachelor's Degree in Computer Science",

    available: "Available for",

    gallery: "CovoLiv Gallery",

    previous: "Previous screenshot",

    next: "Next screenshot",

    close: "Close",

    screenshot: "Screenshot",

    openImage: "Open image fullscreen",
  },
};

function App() {
  const [lang, setLang] = useState("fr");
  const [menu, setMenu] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const t = i18n[lang];

  const closeMenu = () => {
    setMenu(false);
  };

  const scrollTo = (id) => {
    closeMenu();

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? covolivScreenshots.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setSelectedImage((current) =>
      current === covolivScreenshots.length - 1 ? 0 : current + 1
    );
  };

  const openLightbox = (index = selectedImage) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">
        <button
          className="brand"
          type="button"
          onClick={() => scrollTo("home")}
        >
          Boubacar<span>.</span>
        </button>

        <nav className={`nav-links ${menu ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            {t.nav[0]}
          </a>

          <a href="#about" onClick={closeMenu}>
            {t.nav[1]}
          </a>

          <a href="#skills" onClick={closeMenu}>
            {t.nav[2]}
          </a>

          <a href="#projects" onClick={closeMenu}>
            {t.nav[3]}
          </a>

          <a href="#contact" onClick={closeMenu}>
            {t.nav[4]}
          </a>
        </nav>

        <div className="nav-actions">
          <div className="lang">
            <button
              type="button"
              className={lang === "fr" ? "active" : ""}
              onClick={() => setLang("fr")}
            >
              FR
            </button>

            <button
              type="button"
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>

          <a
            className="nav-cv"
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenu((value) => !value)}
          >
            <i />
            <i />
            <i />
          </button>
        </div>
      </header>

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}

        <section id="home" className="section hero">
          <div className="hero-content">
            <div className="availability">
              <span />
              {t.badge}
            </div>

            <p className="eyebrow">{t.eyebrow}</p>

            <h1>
              <span>{profile.firstName}</span>
              <strong>{profile.lastName}</strong>
            </h1>

            <h2>{profile.role}</h2>

            <p className="hero-text">{t.hero}</p>

            <div className="meta">
              <span>📍 {profile.location}</span>
              <span>• {profile.mobility}</span>
            </div>

            <div className="actions">
              <a
                className="btn primary"
                href="#projects"
                onClick={(event) => {
                  event.preventDefault();
                  scrollTo("projects");
                }}
              >
                {t.projects} →
              </a>

              <a
                className="btn secondary"
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.cv}
              </a>
            </div>

            <div className="social">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a href={`mailto:${profile.email}`}>Email ↗</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow" />

            <div className="photo-card">
              <div className="photo-ring">
                <img
                  src={profile.photo}
                  alt="Boubacar Ba"
                  className="profile-photo"
                />
              </div>

              <div className="photo-label">
                <span className="green-dot" />

                <div>
                  <small>FULL STACK</small>
                  <b>Web Developer</b>
                </div>
              </div>

              <span className="chip one">React.js</span>
              <span className="chip two">Spring Boot</span>
              <span className="chip three">MySQL</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section id="about" className="content">
          <div className="section">
            <div className="heading">
              <span>01</span>

              <div>
                <p className="eyebrow">{t.about}</p>
                <h2>{t.aboutTitle}</h2>
              </div>
            </div>

            <div className="about-grid">
              <div className="about-main">
                <p className="large">{t.aboutText}</p>

                <div className="about-highlights">
                  <div>
                    <span>01</span>
                    <strong>Full Stack</strong>
                    <small>Frontend + Backend</small>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>Web Development</strong>
                    <small>Applications modernes</small>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>CovoLiv</strong>
                    <small>Projet de fin d'études</small>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div>
                  <small>{t.location}</small>
                  <b>{profile.location}</b>
                </div>

                <div>
                  <small>{t.mobility}</small>
                  <b>{profile.mobility}</b>
                </div>

                <div>
                  <small>{t.degree}</small>
                  <b>{t.degreeValue}</b>
                </div>

                <div>
                  <small>{t.available}</small>
                  <b>{profile.opportunities.join(" · ")}</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SKILLS
        ===================================================== */}

        <section id="skills" className="content">
          <div className="section">
            <div className="heading">
              <span>02</span>

              <div>
                <p className="eyebrow">{t.skills}</p>
                <h2>{t.skillsTitle}</h2>
              </div>
            </div>

            <div className="skills-grid">
              {Object.entries(skills).map(([category, items], index) => (
                <article className="skill-card" key={category}>
                  <span className="num">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{category}</h3>

                  <div className="tags">
                    {items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section id="projects" className="content">
          <div className="section">
            <div className="heading">
              <span>03</span>

              <div>
                <p className="eyebrow">{t.projectTitle}</p>
                <h2>{t.projectHeading}</h2>
              </div>
            </div>

            <article className="project">
              {/* =================================================
                  PRESENTATION COVOLIV
              ================================================= */}

              <div className="project-body">
                <p className="label">{t.featured}</p>

                <h3>CovoLiv</h3>

                <p className="project-intro">
                  {t.covoIntro}
                </p>

                <p className="project-description">
                  {t.covoDescription}
                </p>

                <p className="project-context">
                  {t.covoContext}
                </p>

                {/* FONCTIONNALITÉS */}

                <div className="project-features">
                  <h4>{t.featuresTitle}</h4>

                  <div className="feature-list">
                    {t.features.map((feature, index) => (
                      <div className="feature-item" key={feature}>
                        <span>
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TECHNOLOGIES */}

                <div className="project-technologies">
                  <h4>{t.techTitle}</h4>

                  <div className="tags">
                    <span>React.js</span>
                    <span>Vite</span>
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>Spring Security</span>
                    <span>JWT</span>
                    <span>MySQL</span>
                    <span>REST API</span>
                    <span>Leaflet.js</span>
                    <span>OpenStreetMap</span>
                  </div>
                </div>

                {/* LIENS */}

                <div className="project-links">
                  <a
                    href="https://github.com/boubbaa2004-hue/Covoiturage-PFE.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.frontend} ↗
                  </a>

                  <a
                    href="https://github.com/boubbaa2004-hue/Backend-Covoiturage-PFE.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.backend} ↗
                  </a>
                </div>
              </div>

              {/* =================================================
                  GALERIE
              ================================================= */}

              <div className="project-visual covoliv-gallery">
                <div className="gallery-title">
                  <span>04</span>

                  <div>
                    <small>{t.gallery}</small>
                    <strong>CovoLiv — Interface</strong>
                  </div>
                </div>

                <div className="gallery-main">
                  <button
                    type="button"
                    className="gallery-image-button"
                    onClick={() => openLightbox(selectedImage)}
                    aria-label={t.openImage}
                  >
                    <img
                      src={covolivScreenshots[selectedImage]}
                      alt={`${t.screenshot} ${selectedImage + 1} - CovoLiv`}
                    />

                    <span className="gallery-zoom">
                      ⛶
                    </span>
                  </button>

                  <button
                    type="button"
                    className="gallery-arrow gallery-arrow-left"
                    onClick={previousImage}
                    aria-label={t.previous}
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    className="gallery-arrow gallery-arrow-right"
                    onClick={nextImage}
                    aria-label={t.next}
                  >
                    ›
                  </button>

                  <div className="gallery-counter">
                    {selectedImage + 1} / {covolivScreenshots.length}
                  </div>
                </div>

                <div className="gallery-thumbnails">
                  {covolivScreenshots.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      className={`gallery-thumb ${
                        selectedImage === index ? "active" : ""
                      }`}
                      onClick={() => setSelectedImage(index)}
                      aria-label={`${t.screenshot} ${index + 1}`}
                    >
                      <img
                        src={image}
                        alt={`${t.screenshot} ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section id="contact" className="section contact">
          <div>
            <p className="eyebrow">{t.contact}</p>

            <h2>
              {lang === "fr" ? (
                <>
                  Une opportunité ?
                  <br />
                  <span>Parlons-en.</span>
                </>
              ) : (
                <>
                  An opportunity?
                  <br />
                  <span>Let's talk.</span>
                </>
              )}
            </h2>

            <p>{t.contactText}</p>
          </div>

          <div className="actions">
            <a
              className="btn primary"
              href={`mailto:${profile.email}`}
            >
              {t.emailButton} →
            </a>

            <a
              className="btn secondary"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <b>
          Boubacar<span>.</span>
        </b>

        <span>{t.footer}</span>

        <div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          {" · "}

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {lightboxOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label={t.close}
          >
            ×
          </button>

          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-left"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label={t.previous}
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={covolivScreenshots[selectedImage]}
              alt={`${t.screenshot} ${selectedImage + 1} - CovoLiv`}
            />

            <div className="lightbox-counter">
              {selectedImage + 1} / {covolivScreenshots.length}
            </div>
          </div>

          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-right"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label={t.next}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);