import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import './HomeLayout.css';

export const BottomCTA = () => {
    const { lang } = useLanguage();
    const navigate = useNavigate();

    const content = {
        fr: {
            title: "Une adresse incontournable à Narbonne",
            desc: "Que vous recherchiez un restaurant de grillades, un burger maison, un couscous traditionnel ou simplement un endroit chaleureux, Notre équipe vous réserve un accueil convivial et une expérience que vous aurez envie de renouveler.",
            ctaBook: "Réserver une table",
            ctaCall: "Nous appeler",
            ctaMap: "Obtenir l'itinéraire"
        },
        en: {
            title: "A Must-Visit Address in Narbonne",
            desc: "Whether you are looking for a grill restaurant, a homemade burger, traditional couscous, or simply a warm place, our team promises a friendly welcome and an experience you will want to repeat.",
            ctaBook: "Book a Table",
            ctaCall: "Call Us",
            ctaMap: "Get Directions"
        },
        es: {
            title: "Una Dirección Imprescindible en Narbona",
            desc: "Tanto si busca un restaurante de parrillada, una hamburguesa casera, un cuscús tradicional o simplemente un lugar cálido, nuestro equipo le reserva una acogida cordial y una experiencia que querrá repetir.",
            ctaBook: "Reservar mesa",
            ctaCall: "Llamarnos",
            ctaMap: "Cómo llegar"
        }
    };

    const text = content[lang as keyof typeof content] || content.fr;

    return (
        <section className="bottom-cta-section" style={{ padding: '80px 5%', textAlign: 'center', backgroundColor: 'var(--accent-green)', color: 'var(--white)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }} className="animate__animated animate__fadeInUp">
                <h2 className="section-title" style={{ color: 'var(--white)', fontSize: '2.5em', marginBottom: '20px' }}>
                    {text.title}
                </h2>
                <p className="about-desc" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.15em', lineHeight: '1.7', marginBottom: '40px' }}>
                    {text.desc}
                </p>
                <div className="bottom-cta-buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button 
                        className="cta-button" 
                        onClick={() => navigate(`/${lang}/contact`)}
                        style={{ backgroundColor: 'var(--accent-red)', padding: '12px 30px', fontSize: '1.05em' }}
                    >
                        {text.ctaBook}
                    </button>
                    <a 
                        href="tel:0468652742" 
                        className="cta-button" 
                        style={{ backgroundColor: 'transparent', border: '2px solid var(--white)', color: 'var(--white)', padding: '10px 28px', fontSize: '1.05em', textDecoration: 'none', display: 'inline-block' }}
                    >
                        {text.ctaCall}
                    </a>
                    <button 
                        className="cta-button" 
                        onClick={() => window.open("https://goo.gl/maps/7hAnjQGf3SJPrkCo9", "_blank")}
                        style={{ backgroundColor: 'var(--white)', color: 'var(--accent-green)', padding: '12px 30px', fontSize: '1.05em' }}
                    >
                        {text.ctaMap}
                    </button>
                </div>
            </div>
        </section>
    );
};
