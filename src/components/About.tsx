import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import './HomeLayout.css';

export const About = () => {
    const { lang } = useLanguage();

    const content = {
        fr: {
            subtitle: "À Propos de Nous",
            title: "Pourquoi Nous Sommes Les Meilleurs",
            desc: "Situé à Narbonne, Grill Lounge Steakhouse est l'endroit idéal pour combler toutes vos envies gourmandes. Nous nous engageons à servir une cuisine de qualité dans un environnement agréable. Notre passion pour la préparation de viandes et de repas délectables fait de chaque visite une expérience unique.",
            badge: "Passions & Saveurs"
        },
        en: {
            subtitle: "About Us",
            title: "Why We Are The Best",
            desc: "Located in Narbonne, Grill Lounge Steakhouse is the perfect place to satisfy all your culinary cravings. We are committed to serving quality food in a pleasant environment. Our passion for preparing delectable meats and meals makes every visit a unique experience.",
            badge: "Passion & Flavors"
        },
        es: {
            subtitle: "Sobre Nosotros",
            title: "Por Qué Somos Los Mejores",
            desc: "Ubicado en Narbona, Grill Lounge Steakhouse es el lugar ideal para satisfacer todos tus antojos culinarios. Nos comprometemos a servir comida de calidad en un entorno agradable. Nuestra pasión por la preparación de carnes y comidas deliciosas hace de cada visita una experiencia única.",
            badge: "Pasión y Sabores"
        }
    };

    const text = content[lang as keyof typeof content] || content.fr;

    return (
        <section className="about-section">
            <div className="about-images animate__animated animate__zoomIn">
                <img src="/collage-1.JPG" alt="Restaurant interior" className="about-img" />
                <img src="/collage-2.JPG" alt="Steak dish" className="about-img" style={{ transform: 'translateY(30px)' }} />
                <img src="/collage-3.JPG" alt="Burger" className="about-img" />
                <img src="/collage-4.JPG" alt="Pasta" className="about-img" style={{ transform: 'translateY(30px)' }} />
            </div>

            <div className="about-content animate__animated animate__fadeInRight">
                <div className="section-subtitle">{text.subtitle}</div>
                <h2 className="section-title">{text.title}</h2>
                <p className="about-desc">{text.desc}</p>
                <div className="feature-list" style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                        <span style={{ backgroundColor: 'var(--accent-red)', color: 'white', padding: '10px', borderRadius: '8px' }}>✓</span>
                        <strong style={{ fontSize: '1.2em' }}>100% Qualité Supérieure</strong>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ backgroundColor: 'var(--accent-red)', color: 'white', padding: '10px', borderRadius: '8px' }}>✓</span>
                        <strong style={{ fontSize: '1.2em' }}>Service Rapide et Accueillant</strong>
                    </div>
                </div>
            </div>
        </section>
    );
};
