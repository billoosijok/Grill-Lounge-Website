import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import './HomeLayout.css';

export const MenuPreview = () => {
    const navigate = useNavigate();
    const { lang } = useLanguage();

    const content = {
        fr: {
            subtitle: "Formules & Saveurs",
            title: "Menu du Moment & Formules",
            desc: "Découvrez nos formules fraîches du jour et nos suggestions préparées par le chef pour réveiller vos papilles.",
            items: [
                { title: "Plat du jour dès 12 €", desc: "Chaque midi en semaine, savourez un plat frais élaboré avec passion par notre chef." },
                { title: "Couscous maison du week-end", desc: "Notre spécialité traditionnelle préparée avec amour et générosité." },
                { title: "Grillades & poissons", desc: "Des viandes premium grillées à la pierre de lave et nos poissons du moment." }
            ],
            cta: "Découvrir nos Formules & Tarifs"
        },
        en: {
            subtitle: "Menus & Flavors",
            title: "Special Menu & Formulas",
            desc: "Discover our fresh daily specials and chef's suggestions prepared to awaken your taste buds.",
            items: [
                { title: "Daily special from €12", desc: "Every weekday lunch, enjoy a fresh dish crafted with passion by our chef." },
                { title: "Weekend homemade couscous", desc: "Our traditional specialty prepared with love and generous portions." },
                { title: "Grills & fresh fish", desc: "Premium meats seared on lava stone and our fish of the moment." }
            ],
            cta: "View Our Formulas & Pricing"
        },
        es: {
            subtitle: "Menús y Sabores",
            title: "Menú del Momento y Fórmulas",
            desc: "Descubra nuestras especialidades del día y las sugerencias del chef preparadas para despertar sus sentidos.",
            items: [
                { title: "Plato del día desde 12 €", desc: "Cada mediodía entre semana, disfrute de un plato fresco elaborado por nuestro chef." },
                { title: "Cuscús casero del fin de semana", desc: "Nuestra especialidad tradicional preparada con cariño y porciones generosas." },
                { title: "Parrilladas y pescados", desc: "Carnes de primera cocinadas a la piedra de lava y nuestros pescados del momento." }
            ],
            cta: "Ver Fórmulas y Precios"
        }
    };

    const text = content[lang as keyof typeof content] || content.fr;

    return (
        <section className="menu-preview-section" style={{ backgroundColor: 'var(--white)', padding: '80px 5%', textAlign: 'center' }}>
            <div className="section-subtitle">{text.subtitle}</div>
            <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto 20px auto' }}>{text.title}</h2>
            <p className="about-desc" style={{ maxWidth: '600px', margin: '0 auto 50px auto' }}>{text.desc}</p>

            <div className="menu-preview-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto 40px auto' }}>
                {text.items.map((item, idx) => (
                    <div 
                        key={idx} 
                        className="menu-preview-card"
                        style={{
                            backgroundColor: 'var(--primary-bg)',
                            padding: '35px 25px',
                            borderRadius: '16px',
                            boxShadow: 'var(--card-shadow)',
                            transition: 'transform var(--transition-speed), box-shadow var(--transition-speed)',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(0,0,0,0.02)'
                        }}
                        onClick={() => navigate(`/${lang}/menu-moment`)}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(25, 67, 70, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0px)';
                            e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                        }}
                    >
                        <h3 style={{ fontSize: '1.3em', color: 'var(--accent-green)', marginBottom: '12px', fontWeight: 'bold' }}>{item.title}</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.5', margin: 0, fontSize: '0.95em' }}>{item.desc}</p>
                    </div>
                ))}
            </div>

            <button 
                className="cta-button"
                onClick={() => navigate(`/${lang}/menu-moment`)}
                style={{ fontSize: '1.15em', padding: '12px 35px' }}
            >
                {text.cta}
            </button>
        </section>
    );
};
