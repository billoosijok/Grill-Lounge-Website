import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import './HomeLayout.css';

export const Features = () => {
    const { lang } = useLanguage();

    const content = {
        fr: [
            { id: "grillades-viandes", icon: "🥩", image: "/Magret.JPG", title: "Viandes Premium", desc: "Des steaks soigneusement sélectionnés et préparés à la perfection." },
            { id: "burgers-signatures", icon: "🍔", image: "/Burger.jpg", title: "Burgers Maisons", desc: "100% fait maison avec des ingrédients frais et de qualité." },
            { id: "pates", icon: "🍝", image: "/Pates.JPG", title: "Pâtes Savoureuses", desc: "Le goût de l'Italie dans notre sélection de pâtes signature." },
            { id: "entrees-tapas", icon: "🍤", image: "/Tapas.jpg", title: "Tapas & Entrées", desc: "Des saveurs à partager pour bien commencer votre repas." },
        ],
        en: [
            { id: "grillades-viandes", icon: "🥩", image: "/Magret.JPG", title: "Premium Meats", desc: "Carefully selected steaks prepared to perfection." },
            { id: "burgers-signatures", icon: "🍔", image: "/Burger.jpg", title: "Homemade Burgers", desc: "100% homemade with fresh, high-quality ingredients." },
            { id: "pates", icon: "🍝", image: "/Pates.JPG", title: "Tasty Pasta", desc: "The taste of Italy in our signature pasta selection." },
            { id: "entrees-tapas", icon: "🍤", image: "/Tapas.jpg", title: "Tapas & Starters", desc: "Delicious flavors to share and start your meal right." },
        ],
        es: [
            { id: "grillades-viandes", icon: "🥩", image: "/Magret.JPG", title: "Carnes Premium", desc: "Cortes de carne cuidadosamente seleccionados y preparados." },
            { id: "burgers-signatures", icon: "🍔", image: "/Burger.jpg", title: "Hamburguesas", desc: "100% casero con ingredientes frescos y de calidad." },
            { id: "pates", icon: "🍝", image: "/Pates.JPG", title: "Sabrosas Pastas", desc: "El sabor de Italia en nuestra selección de pastas." },
            { id: "entrees-tapas", icon: "🍤", image: "/Tapas.jpg", title: "Tapas y Entrantes", desc: "Sabores para compartir y empezar bien tu comida." },
        ]
    };

    const features = content[lang as keyof typeof content] || content.fr;

    return (
        <section className="features-section">
            {features.map((feature, idx) => (
                <Link to={`/menu#${feature.id}`} key={idx} className="feature-card animate__animated animate__fadeInUp" style={{ animationDelay: `${idx * 0.1}s`, textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    {feature.image ? (
                        <div className="feature-image-container">
                            <img src={feature.image} alt={feature.title} className="feature-image" />
                        </div>
                    ) : (
                        <div className="feature-icon">{feature.icon}</div>
                    )}
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-desc">{feature.desc}</p>
                </Link>
            ))}
        </section>
    );
};
