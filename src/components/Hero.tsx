import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import "./HomeLayout.css";

export const Hero = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const content = {
    fr: {
      subtitle: "À 2 minutes de la Gare SNCF • Ouvert midi et soir",
      title: "Steakhouse & Grillades à Narbonne",
      desc: "Découvrez nos viandes halal premium saisies à la pierre de lave, nos burgers maison et nos tapas à partager dans une ambiance chaleureuse.",
      cta1: "Réserver",
      cta2: "Itinéraire",
    },
    en: {
      subtitle: "2 minutes from the SNCF Station • Open for lunch and dinner",
      title: "Steakhouse & Grills in Narbonne",
      desc: "Discover our premium halal meats seared on lava stone, our homemade burgers and our tapas to share in a warm atmosphere.",
      cta1: "Book a Table",
      cta2: "Directions",
    },
    es: {
      subtitle: "A 2 minutos de la estación SNCF • Abierto mediodía y noche",
      title: "Steakhouse y Parrillada en Narbona",
      desc: "Descubra nuestras carnes halal premium hechas a la piedra de lava, nuestras hamburguesas caseras y nuestras tapas para compartir en un ambiente cálido.",
      cta1: "Reservar",
      cta2: "Cómo llegar",
    },
  };

  const text = content[lang as keyof typeof content] || content.fr;

  return (
    <section className="hero-section">
      <div className="hero-content animate__animated animate__fadeInLeft">
        <div className="hero-subtitle">{text.subtitle}</div>
        <h1 className="hero-title">
          {text.title}
        </h1>
        <h2 className="hero-description">{text.desc}</h2>

        <div className="hero-buttons">
          <button
            className="cta-button"
            onClick={() => navigate(`/${lang}/contact`)}
          >
            {text.cta1}
          </button>
          <button
            className="cta-button"
            style={{ backgroundColor: "var(--accent-green)" }}
            onClick={() => window.open("https://goo.gl/maps/7hAnjQGf3SJPrkCo9", "_blank")}
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
