import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import "./HomeLayout.css";

export const Hero = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const content = {
    fr: {
      title: "Restaurant Grill Lounge à Narbonne",
      label1: "Le restaurant de grillades",
      label2: "LE GOÛT DE L’ EXCELLENCE",
      label3: "à deux minutes de la Gare",
      desc: "Viandes premium grillées à la pierre de lave, burgers maison, spécialités orientales et couscous traditionnel.",
      googleReviews: "Plus de 700 avis Google",
      bullets: [
        { emoji: "🥩", text: "Viandes Premium" },
        { emoji: "🔥", text: "Cuisson à la pierre de lave" },
        { emoji: "🍔", text: "Burgers Maison" },
        { emoji: "📍", text: "À 2 minutes de la Gare SNCF" }
      ],
      cta1: "Réserver une table",
      cta2: "Voir le Menu",
      cta3: "Obtenir l'itinéraire"
    },
    en: {
      title: "Grill Lounge Restaurant in Narbonne",
      label1: "The grill restaurant",
      label2: "THE TASTE OF EXCELLENCE",
      label3: "two minutes from the Station",
      desc: "Premium meats grilled on lava stone, homemade burgers, oriental specialties, and traditional couscous.",
      googleReviews: "More than 700 Google reviews",
      bullets: [
        { emoji: "🥩", text: "Premium Meats" },
        { emoji: "🔥", text: "Lava stone cooking" },
        { emoji: "🍔", text: "Homemade Burgers" },
        { emoji: "📍", text: "2 minutes from the SNCF Station" }
      ],
      cta1: "Book a table",
      cta2: "View Menu",
      cta3: "Get directions"
    },
    es: {
      title: "Restaurante Grill Lounge en Narbona",
      label1: "El restaurante de parrilla",
      label2: "EL SABOR DE LA EXCELENCIA",
      label3: "a dos minutos de la Estación",
      desc: "Carnes premium cocinadas a la piedra de lava, hamburguesas caseras, especialidades orientales y cuscús tradicional.",
      googleReviews: "Más de 700 reseñas de Google",
      bullets: [
        { emoji: "🥩", text: "Carnes Premium" },
        { emoji: "🔥", text: "Cocción a la piedra de lava" },
        { emoji: "🍔", text: "Hamburguesas Caseras" },
        { emoji: "📍", text: "A 2 minutos de la Estación SNCF" }
      ],
      cta1: "Reservar mesa",
      cta2: "Ver el Menú",
      cta3: "Cómo llegar"
    }
  };

  const text = content[lang as keyof typeof content] || content.fr;

  return (
    <section className="hero-section">
      <div className="hero-content animate__animated animate__fadeInLeft">
        <div className="hero-labels">
          <span className="hero-label-item label-highlight">{text.label1}</span>
          <span className="hero-label-item label-emphasis">{text.label2}</span>
          <span className="hero-label-item label-sub">{text.label3}</span>
        </div>
        <h1 className="hero-title">{text.title}</h1>
        <p className="hero-description">{text.desc}</p>

        <div className="hero-trust-badge">
          <span className="star-icon">⭐</span> {text.googleReviews}
        </div>

        <div className="hero-bullets-container">
          {text.bullets.map((bullet, idx) => (
            <React.Fragment key={idx}>
              <span className="hero-bullet-item">
                <span className="bullet-emoji">{bullet.emoji}</span> {bullet.text}
              </span>
              {idx < text.bullets.length - 1 && <span className="bullet-divider">•</span>}
            </React.Fragment>
          ))}
        </div>

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
            onClick={() => navigate(`/${lang}/menu`)}
          >
            {text.cta2}
          </button>
          <button
            className="cta-button"
            style={{ backgroundColor: "var(--accent-red)", opacity: 0.9 }}
            onClick={() => window.open("https://goo.gl/maps/7hAnjQGf3SJPrkCo9", "_blank")}
          >
            {text.cta3}
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

