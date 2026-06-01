import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import "./HomeLayout.css";

export const Hero = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const content = {
    fr: {
      subtitle: "Braises, épices et passion",
      title: "Des Saveurs Uniques pour une Expérience ",
      highlight: "Inoubliable",
      desc: "Plaisir gustatif avec nos spécialités de Steak, Burger, Pasta et Tapas à Narbonne, tout près de la Gare SNCF.",
      cta1: "Voir le Menu",
      cta2: "Nous Contacter",
      badge: "Qualité Premium",
    },
    en: {
      subtitle: "Embers, spices and passion",
      title: "Unique Flavors for an Unforgettable ",
      highlight: "Experience",
      desc: "Taste our amazing specialties including Steak, Burger, Pasta and Tapas in Narbonne, right next to the SNCF train station.",
      cta1: "View Menu",
      cta2: "Contact Us",
      badge: "Premium Quality",
    },
    es: {
      subtitle: "Brasas, especias y pasión",
      title: "Sabores Únicos para una Experiencia ",
      highlight: "Inolvidable",
      desc: "Disfruta del placer gustativo con nuestras especialidades de Steak, Burger, Pasta y Tapas en Narbona, al lado de la estación de tren SNCF.",
      cta1: "Ver Menú",
      cta2: "Contactar",
      badge: "Calidad Premium",
    },
  };

  const text = content[lang as keyof typeof content] || content.fr;

  return (
    <section className="hero-section">
      <div className="hero-content animate__animated animate__fadeInLeft">
        <div className="hero-subtitle">{text.subtitle}</div>
        <h1 className="hero-title">
          {text.title} <span>{text.highlight}</span>
        </h1>
        <h2 className="hero-description">{text.desc}</h2>

        <div className="hero-buttons">
          <button
            className="cta-button"
            onClick={() => navigate(`/${lang}/menu`)}
          >
            {text.cta1}
          </button>
          <button
            className="cta-button"
            style={{ backgroundColor: "var(--accent-green)" }}
            onClick={() => navigate(`/${lang}/contact`)}
          >
            {text.cta2}
          </button>
        </div>
      </div>

      <div className="hero-image-container animate__animated animate__fadeInRight">
        <img
          src="/Souris.JPG"
          alt="Grill Lounge Specialty"
          className="hero-main-image"
        />
      </div>
    </section>
  );
};
