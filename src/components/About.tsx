import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import './HomeLayout.css';

export const About = () => {
    const { lang } = useLanguage();

    const content = {
        fr: {
            subtitle: "Qualité & Service",
            title: "Pourquoi nos clients reviennent chez Grill Lounge ?",
            desc: "Situé à deux pas de la Gare SNCF de Narbonne, Grill Lounge Steakhouse est l'endroit idéal pour combler toutes vos envies gourmandes. Notre passion pour la préparation de viandes premium et de repas délectables fait de chaque visite une expérience unique.",
            points: [
                { title: "La qualité avant tout :", text: "Viandes sélectionnées et ingrédients 100 % frais." },
                { title: "Cuisine 100 % Halal :", text: "Une totale transparence pour nos clients." },
                { title: "Cuisson maîtrisée :", text: "Le goût unique des grillades à la pierre de lave." },
                { title: "Service ultra-rapide :", text: "Idéal pour les voyageurs avant leur train." },
                { title: "Large amplitude :", text: "Ouvert 7j/7, midi et soir, sur place ou à emporter." }
            ]
        },
        en: {
            subtitle: "Quality & Service",
            title: "Why our customers keep coming back to Grill Lounge?",
            desc: "Located just a stone's throw from the Narbonne SNCF train station, Grill Lounge Steakhouse is the perfect place to satisfy all your culinary cravings. Our passion for preparing premium meats and delectable meals makes every visit a unique experience.",
            points: [
                { title: "Quality first:", text: "Selected meats and 100% fresh ingredients." },
                { title: "100% Halal Cuisine:", text: "Full transparency for our clients." },
                { title: "Mastered Cooking:", text: "The unique taste of lava stone grilling." },
                { title: "Ultra-fast Service:", text: "Ideal for travelers before their train." },
                { title: "Wide Opening Hours:", text: "Open 7 days a week, lunch and dinner, dine-in or takeout." }
            ]
        },
        es: {
            subtitle: "Calidad y Servicio",
            title: "¿Por qué vuelven nuestros clientes a Grill Lounge?",
            desc: "Ubicado a un paso de la estación de tren SNCF de Narbona, Grill Lounge Steakhouse es el lugar ideal para satisfacer todos tus antojos culinarios. Nuestra pasión por la preparación de carnes premium y platos deliciosos hace de cada visita una experiencia única.",
            points: [
                { title: "La calidad ante todo:", text: "Carnes seleccionadas e ingredientes 100% frescos." },
                { title: "Cocina 100% Halal:", text: "Total transparencia para nuestros clientes." },
                { title: "Cocción controlada:", text: "El sabor único de la parrilla a la piedra de lava." },
                { title: "Servicio ultra rápido:", text: "Ideal para viajeros antes de su tren." },
                { title: "Amplio horario:", text: "Abierto 7 días a la semana, mediodía y noche, para comer allí o para llevar." }
            ]
        }
    };

    const text = content[lang as keyof typeof content] || content.fr;

    return (
        <section className="about-section">
            <div className="about-images animate__animated animate__zoomIn">
                <img src="/collage-1.JPG" alt="Restaurant interior" className="about-img" />
                <img src="/collage-2.JPG" alt="Steak dish" className="about-img" style={{ transform: 'translateY(30px)' }} />
                <img src="/collage-3.JPG" alt="Burger" className="about-img" />
                <img src="/couscous.jpg" alt="Couscous" className="about-img" style={{ transform: 'translateY(30px)' }} />
            </div>

            <div className="about-content animate__animated animate__fadeInRight">
                <div className="section-subtitle">{text.subtitle}</div>
                <h2 className="section-title" style={{ fontSize: '2.5em' }}>{text.title}</h2>
                <p className="about-desc">{text.desc}</p>
                <div className="feature-list" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {text.points.map((point, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <span style={{ backgroundColor: 'var(--accent-red)', color: 'white', padding: '4px 8px', borderRadius: '50%', fontWeight: 'bold', fontSize: '0.9em', display: 'inline-block', flexShrink: 0, marginTop: '2px' }}>✓</span>
                            <span style={{ fontSize: '1.05em', lineHeight: '1.4' }}>
                                <strong style={{ color: 'var(--accent-green)', fontFamily: "'Outfit', sans-serif" }}>{point.title}</strong> {point.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
