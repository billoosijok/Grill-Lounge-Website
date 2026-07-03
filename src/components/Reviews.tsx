import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import './HomeLayout.css';

interface Review {
    name: string;
    comment: string;
    rating: number;
    date: string;
    role?: string;
}

interface LanguageContent {
    subtitle: string;
    title: string;
    cta: string;
    verified: string;
    reviews: Review[];
}

export const Reviews = () => {
    const { lang } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);

    const content: Record<'fr' | 'en' | 'es', LanguageContent> = {
        fr: {
            subtitle: "Plus de 700 clients nous ont déjà laissé un avis sur Google.",
            title: "Ils nous font confiance",
            cta: "Voir tous les avis Google",
            verified: "Avis Vérifié",
            reviews: [
                {
                    name: "Client Google",
                    comment: "Cuisine savoureuse, service rapide et accueil chaleureux.",
                    rating: 5,
                    date: "Google Maps"
                },
                {
                    name: "Client Google",
                    comment: "Des grillades excellentes, des portions généreuses et une équipe au top.",
                    rating: 5,
                    date: "Google Maps"
                },
                {
                    name: "Client Google",
                    comment: "L'une des meilleures adresses de Narbonne pour manger halal.",
                    rating: 5,
                    date: "Google Maps"
                }
            ]
        },
        en: {
            subtitle: "More than 700 customers have already left us a review on Google.",
            title: "They Trust Us",
            cta: "View all Google Reviews",
            verified: "Verified Review",
            reviews: [
                {
                    name: "Google Customer",
                    comment: "Tasty food, fast service, and warm welcome.",
                    rating: 5,
                    date: "Google Maps"
                },
                {
                    name: "Google Customer",
                    comment: "Excellent grills, generous portions, and a top-notch team.",
                    rating: 5,
                    date: "Google Maps"
                },
                {
                    name: "Google Customer",
                    comment: "One of the best places in Narbonne for halal dining.",
                    rating: 5,
                    date: "Google Maps"
                }
            ]
        },
        es: {
            subtitle: "Más de 700 clientes ya nos han dejado una reseña en Google.",
            title: "Confían en Nosotros",
            cta: "Ver todas las reseñas de Google",
            verified: "Opinión Verificada",
            reviews: [
                {
                    name: "Cliente Google",
                    comment: "Comida sabrosa, servicio rápido y bienvenida cálida.",
                    rating: 5,
                    date: "Google Maps"
                },
                {
                    name: "Cliente Google",
                    comment: "Excelentes parrilladas, porciones generosas y un equipo excelente.",
                    rating: 5,
                    date: "Google Maps"
                },
                {
                    name: "Cliente Google",
                    comment: "Una de las mejores direcciones de Narbona para comer halal.",
                    rating: 5,
                    date: "Google Maps"
                }
            ]
        }
    };

    const text = content[lang as keyof typeof content] || content.fr;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? text.reviews.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === text.reviews.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="reviews-section" style={{ backgroundColor: 'var(--primary-bg)', padding: '80px 5%', textAlign: 'center' }}>
            <div className="section-subtitle">{text.subtitle}</div>
            <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto 50px auto' }}>{text.title}</h2>

            <div className="reviews-carousel-container" style={{
                position: 'relative',
                maxWidth: '1200px',
                margin: '0 auto 20px auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px'
            }}>
                {/* Desktop Prev Button */}
                <button 
                    onClick={handlePrev} 
                    className="carousel-nav-btn desktop-carousel-btn"
                    aria-label="Previous Review"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>

                {/* Reviews Grid (shows 3, 2, or 1 card depending on viewport via CSS) */}
                <div className="reviews-carousel-grid" style={{
                    display: 'flex',
                    gap: '20px',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'stretch'
                }}>
                    {[0, 1, 2].map((offset) => {
                        const idx = (currentIndex + offset) % text.reviews.length;
                        const rev = text.reviews[idx];
                        return (
                            <div 
                                key={idx} 
                                className={`review-card animate__animated animate__fadeIn carousel-card-offset-${offset}`}
                                style={{
                                    backgroundColor: 'var(--white)',
                                    padding: '35px 30px',
                                    borderRadius: '16px',
                                    boxShadow: 'var(--card-shadow)',
                                    textAlign: 'left',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    border: '1px solid rgba(0,0,0,0.02)',
                                    flex: 1,
                                    minHeight: '220px'
                                }}
                            >
                                <div>
                                    {/* Stars */}
                                    <div style={{ color: '#ffb400', fontSize: '1.2em', marginBottom: '15px' }}>
                                        {"★".repeat(rev.rating)}
                                    </div>
                                    {/* Comment */}
                                    <p style={{ color: 'var(--text-main)', fontSize: '1.05em', lineHeight: '1.6', fontStyle: 'italic', margin: '0 0 20px 0' }}>
                                        "{rev.comment}"
                                    </p>
                                </div>

                                {/* Author info */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '15px', marginTop: '10px', flexWrap: 'wrap', gap: '10px' }}>
                                    <div>
                                        <strong style={{ color: 'var(--accent-green)', fontSize: '1.15em', fontFamily: "'Outfit', sans-serif", display: 'block' }}>{rev.name}</strong>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '2px' }}>
                                            <span style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>{rev.date}</span>
                                            {rev.role && (
                                                <>
                                                    <span style={{ color: '#ccc', fontSize: '0.85em' }}>•</span>
                                                    <span style={{ fontSize: '0.8em', color: '#d48a42', fontWeight: 'bold' }}>{rev.role}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '0.8em', backgroundColor: 'rgba(25, 67, 70, 0.08)', color: 'var(--accent-green)', padding: '4px 10px', borderRadius: '20px', fontWeight: 'bold', fontFamily: "'Outfit', sans-serif" }}>
                                        ✓ {text.verified}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Desktop Next Button */}
                <button 
                    onClick={handleNext} 
                    className="carousel-nav-btn desktop-carousel-btn"
                    aria-label="Next Review"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>

            {/* Pagination Dots and Mobile Controls */}
            <div className="reviews-mobile-controls" style={{ display: 'none', margin: '20px 0 30px 0' }}>
                <button onClick={handlePrev} className="carousel-nav-btn" aria-label="Previous Review">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <div style={{ display: 'flex', gap: '8px', margin: '0 15px' }}>
                    {text.reviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: currentIndex === idx ? 'var(--accent-red)' : '#ccc',
                                border: 'none',
                                cursor: 'pointer',
                                padding: 0
                            }}
                        />
                    ))}
                </div>
                <button onClick={handleNext} className="carousel-nav-btn" aria-label="Next Review">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>

            {/* Desktop Dots only */}
            <div className="reviews-desktop-dots" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
                {text.reviews.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: currentIndex === idx ? 'var(--accent-red)' : '#ccc',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0
                        }}
                    />
                ))}
            </div>

            <button 
                className="cta-button"
                style={{ backgroundColor: 'var(--accent-green)', fontSize: '1.1em', padding: '12px 35px' }}
                onClick={() => window.open('https://maps.app.goo.gl/Ag2oGZsLE964ojCC9', '_blank')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                {text.cta}
            </button>
        </section>
    );
};
