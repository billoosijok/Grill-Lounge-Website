import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import './HomeLayout.css';

export const Features = () => {
    const { lang } = useLanguage();

    const content = {
        fr: [
            { id: "grillades-viandes", icon: "🥩", image: "/Magret.JPG", title: "Viandes Premium", desc: "Des steaks soigneusement sélectionnés et préparés à la perfection.", url: "/menu#grillades-viandes" },
            { id: "burgers-signatures", icon: "🍔", image: "/Burger.jpg", title: "Burgers Maisons", desc: "100% fait maison avec des ingrédients frais et de qualité.", url: "/menu#burgers-signatures" },
            { id: "couscous", icon: "🍲", image: "/couscous.jpg", title: "Couscous du week-end", desc: "Notre fameux couscous maison, disponible tous les week-ends.", url: "/menu-moment" },
            { id: "entrees-tapas", icon: "🍤", image: "/Tapas.jpg", title: "Tapas & Entrées", desc: "Des saveurs à partager pour bien commencer votre repas.", url: "/menu#entrees-tapas" },
        ],
        en: [
            { id: "grillades-viandes", icon: "🥩", image: "/Magret.JPG", title: "Premium Meats", desc: "Carefully selected steaks prepared to perfection.", url: "/menu#grillades-viandes" },
            { id: "burgers-signatures", icon: "🍔", image: "/Burger.jpg", title: "Homemade Burgers", desc: "100% homemade with fresh, high-quality ingredients.", url: "/menu#burgers-signatures" },
            { id: "couscous", icon: "🍲", image: "/couscous.jpg", title: "Weekend Couscous", desc: "Our famous homemade couscous, available every weekend.", url: "/menu-moment" },
            { id: "entrees-tapas", icon: "🍤", image: "/Tapas.jpg", title: "Tapas & Starters", desc: "Delicious flavors to share and start your meal right.", url: "/menu#entrees-tapas" },
        ],
        es: [
            { id: "grillades-viandes", icon: "🥩", image: "/Magret.JPG", title: "Carnes Premium", desc: "Cortes de carne cuidadosamente seleccionados y preparados.", url: "/menu#grillades-viandes" },
            { id: "burgers-signatures", icon: "🍔", image: "/Burger.jpg", title: "Hamburguesas", desc: "100% casero con ingredientes frescos y de calidad.", url: "/menu#burgers-signatures" },
            { id: "couscous", icon: "🍲", image: "/couscous.jpg", title: "Cuscús del fin de semana", desc: "Nuestro famoso cuscús casero, disponible todos los fines de semana.", url: "/menu-moment" },
            { id: "entrees-tapas", icon: "🍤", image: "/Tapas.jpg", title: "Tapas y Entrantes", desc: "Sabores para compartir y empezar bien tu comida.", url: "/menu#entrees-tapas" },
        ]
    };

    const features = content[lang as keyof typeof content] || content.fr;

    return (
        <section className="features-section">
            {features.map((feature, idx) => (
                <Link to={`/${lang}${feature.url}`} key={idx} className="feature-card animate__animated animate__fadeInUp" style={{ animationDelay: `${idx * 0.1}s`, textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    {feature.image ? (
                        <div className="feature-image-container">
                            {feature.image === "/couscous-placeholder" ? (
                                <div className="couscous-placeholder-card">
                                    <span className="placeholder-icon">🍲</span>
                                    <span className="placeholder-badge">{lang === 'fr' ? 'Photo à venir' : lang === 'es' ? 'Foto próximamente' : 'Photo coming soon'}</span>
                                </div>
                            ) : (
                                <img src={feature.image} alt={feature.title} className="feature-image" />
                            )}
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
