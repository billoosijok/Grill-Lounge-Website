import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import './HomeLayout.css';

export const Features = () => {
    const { lang } = useLanguage();
    const navigate = useNavigate();

    const sectionTitle = {
        fr: "Nos spécialités",
        en: "Our Specialties",
        es: "Nuestras Especialidades"
    };

    const content = {
        fr: [
            { 
                id: "grillades-viandes", 
                image: "/Magret.JPG", 
                title: "Grillades & Viandes Premium", 
                desc: "Entrecôte, côte de bœuf, brochettes, côtelettes d'agneau, souris d'agneau confite, Mix Grill…", 
                url: "/menu#grillades-viandes",
                btnText: "Découvrir nos Grillades"
            },
            { 
                id: "burgers-signatures", 
                image: "/Burger.jpg", 
                title: "Burgers Maison", 
                desc: "Préparés à la commande avec des ingrédients frais, sauces maison et pain moelleux", 
                url: "/menu#burgers-signatures",
                btnText: "Voir nos Burgers"
            },
            { 
                id: "couscous", 
                image: "/couscous.jpg", 
                title: "Couscous Maison", 
                desc: "Chaque week-end, retrouvez notre couscous maison préparé dans la tradition,", 
                url: "/menu-moment",
                btnText: "Découvrir le Menu du Moment"
            }
        ],
        en: [
            { 
                id: "grillades-viandes", 
                image: "/Magret.JPG", 
                title: "Premium Grills & Meats", 
                desc: "Ribeye steak, prime rib, skewers, lamb chops, braised lamb shank, Mix Grill...", 
                url: "/menu#grillades-viandes",
                btnText: "Discover our Grills"
            },
            { 
                id: "burgers-signatures", 
                image: "/Burger.jpg", 
                title: "Homemade Burgers", 
                desc: "Prepared to order with fresh ingredients, homemade sauces, and soft buns", 
                url: "/menu#burgers-signatures",
                btnText: "See our Burgers"
            },
            { 
                id: "couscous", 
                image: "/couscous.jpg", 
                title: "Homemade Couscous", 
                desc: "Every weekend, enjoy our traditional homemade couscous prepared in the pure tradition,", 
                url: "/menu-moment",
                btnText: "Discover the Special Menu"
            }
        ],
        es: [
            { 
                id: "grillades-viandes", 
                image: "/Magret.JPG", 
                title: "Parrilladas y Carnes Premium", 
                desc: "Entrecot, chuletón, brochetas, chuletas de cordero, jarrete de cordero confitado, Mix Grill...", 
                url: "/menu#grillades-viandes",
                btnText: "Descubrir nuestras Parrilladas"
            },
            { 
                id: "burgers-signatures", 
                image: "/Burger.jpg", 
                title: "Hamburguesas Caseras", 
                desc: "Preparadas al momento con ingredientes frescos, salsas caseras y pan tierno", 
                url: "/menu#burgers-signatures",
                btnText: "Ver nuestras Hamburguesas"
            },
            { 
                id: "couscous", 
                image: "/couscous.jpg", 
                title: "Cuscús Casero", 
                desc: "Cada fin de semana, disfrute de nuestro cuscús casero preparado según la tradición,", 
                url: "/menu-moment",
                btnText: "Descubrir el Menú del Momento"
            }
        ]
    };

    const titleText = sectionTitle[lang as keyof typeof sectionTitle] || sectionTitle.fr;
    const features = content[lang as keyof typeof content] || content.fr;

    return (
        <section className="specialties-section" style={{ padding: '60px 5% 80px 5%', textAlign: 'center', backgroundColor: 'var(--white)' }}>
            <h2 className="section-title" style={{ marginBottom: '40px' }}>{titleText}</h2>
            <div className="features-section" style={{ padding: 0, background: 'none' }}>
                {features.map((feature, idx) => (
                    <div 
                        key={idx} 
                        className="feature-card animate__animated animate__fadeInUp" 
                        style={{ 
                            animationDelay: `${idx * 0.1}s`, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            height: 'auto',
                            minHeight: '420px',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div>
                            <div className="feature-image-container">
                                <img src={feature.image} alt={feature.title} className="feature-image" />
                            </div>
                            <h3 className="feature-title" style={{ fontSize: '1.35em', margin: '15px 20px 10px 20px', fontWeight: 'bold' }}>
                                {feature.title}
                            </h3>
                            <p className="feature-desc" style={{ margin: '0 20px 20px 20px', fontSize: '0.95em', minHeight: '60px' }}>
                                {feature.desc}
                            </p>
                        </div>
                        <div style={{ padding: '0 20px 30px 20px' }}>
                            <button 
                                className="cta-button" 
                                style={{ width: '100%', fontSize: '0.95em', padding: '10px 15px' }}
                                onClick={() => navigate(`/${lang}${feature.url}`)}
                            >
                                {feature.btnText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

