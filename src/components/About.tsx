import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import './HomeLayout.css';

export const About = () => {
    const { lang } = useLanguage();
    const navigate = useNavigate();

    const content = {
        fr: {
            halal: {
                title: "Restaurant Halal à Narbonne",
                desc1: "Toutes nos viandes sont 100 % halal et sélectionnées avec le plus grand soin.",
                desc2: "Notre cuisine associe les saveurs des grillades traditionnelles, de la cuisine orientale et des recettes modernes afin de satisfaire tous les gourmands."
            },
            brand: {
                title: "GRILL LOUNGE",
                subtitle: "VOTRE RESTAURANT À NARBONNE",
                desc1: "Situé au 5 Avenue Pierre Semard, toutes nos viandes sont 100 % halal et sélectionnées avec le plus grand soin.",
                desc2: "Notre cuisine associe les saveurs des grillades traditionnelles, de la cuisine orientale et des recettes modernes..",
                cta: "DÉCOUVRIR NOTRE RESTAURANT"
            }
        },
        en: {
            halal: {
                title: "Halal Restaurant in Narbonne",
                desc1: "All our meats are 100% halal and selected with the utmost care.",
                desc2: "Our cuisine combines the flavors of traditional grills, oriental cuisine, and modern recipes to satisfy all food lovers."
            },
            brand: {
                title: "GRILL LOUNGE",
                subtitle: "YOUR RESTAURANT IN NARBONNE",
                desc1: "Located at 5 Avenue Pierre Semard, all our meats are 100% halal and selected with the utmost care.",
                desc2: "Our cuisine combines the flavors of traditional grills, oriental cuisine, and modern recipes.",
                cta: "DISCOVER OUR RESTAURANT"
            }
        },
        es: {
            halal: {
                title: "Restaurante Halal en Narbona",
                desc1: "Todas nuestras carnes son 100% halal y seleccionadas con el mayor cuidado.",
                desc2: "Nuestra cocina combina los sabores de las parrilladas tradicionales, la cocina oriental y recetas modernas para satisfacer a todos los paladares."
            },
            brand: {
                title: "GRILL LOUNGE",
                subtitle: "SU RESTAURANTE EN NARBONA",
                desc1: "Situado en 5 Avenue Pierre Semard, todas nuestras carnes son 100% halal y seleccionadas con el mayor cuidado.",
                desc2: "Nuestra cocina combina los sabores de las parrilladas tradicionales, la cocina oriental y recetas modernas.",
                cta: "DESCUBRIR NUESTRO RESTAURANTE"
            }
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

            <div className="about-content animate__animated animate__fadeInRight" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div className="about-block">
                    <h2 className="section-title" style={{ fontSize: '2.2em', marginBottom: '15px' }}>{text.halal.title}</h2>
                    <p className="about-desc" style={{ fontWeight: 'bold', color: 'var(--accent-red)', marginBottom: '10px' }}>{text.halal.desc1}</p>
                    <p className="about-desc" style={{ margin: 0 }}>{text.halal.desc2}</p>
                </div>

                <div style={{ height: '1px', backgroundColor: 'rgba(25, 67, 70, 0.15)', width: '80%' }} />

                <div className="about-block">
                    <div className="section-subtitle" style={{ fontSize: '1.6em', fontWeight: 'bold', fontStyle: 'normal', color: 'var(--accent-green)', fontFamily: "'Outfit', sans-serif", marginBottom: '5px' }}>{text.brand.title}</div>
                    <h3 style={{ fontSize: '1.2em', color: 'var(--text-muted)', marginBottom: '20px', letterSpacing: '1px' }}>{text.brand.subtitle}</h3>
                    <p className="about-desc" style={{ fontWeight: 'bold', color: 'var(--accent-green)', marginBottom: '10px' }}>{text.brand.desc1}</p>
                    <p className="about-desc" style={{ marginBottom: '30px' }}>{text.brand.desc2}</p>
                    
                    <button 
                        className="cta-button" 
                        onClick={() => navigate(`/${lang}/contact`)}
                        style={{ padding: '12px 30px', fontSize: '1em' }}
                    >
                        {text.brand.cta}
                    </button>
                </div>
            </div>
        </section>
    );
};
