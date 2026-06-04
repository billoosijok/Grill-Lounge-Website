import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import './HomeLayout.css';

export const Reviews = () => {
    const { lang } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);

    const content = {
        fr: {
            subtitle: "Avis Clients",
            title: "Ce que nos clients disent de nous",
            cta: "Laisser un avis sur Google",
            verified: "Avis Vérifié",
            reviews: [
                {
                    name: "Frederique Vincenti",
                    comment: "Cuisine savoureuse, on s'est régalé, service rapide, accueil super 👍",
                    rating: 5,
                    date: "Il y a 3 jours"
                },
                {
                    name: "GENEVIEVE",
                    comment: "Très bonne cuisine et serveuse souriante et très agréable.",
                    rating: 5,
                    date: "Il y a 2 semaines"
                },
                {
                    name: "Annie Charraud",
                    comment: "Je recommande vivement ce restaurant on y mange très bien et les portions sont généreuses",
                    rating: 5,
                    date: "Il y a 1 mois",
                    role: "Local Guide"
                },
                {
                    name: "Mary Bloody",
                    comment: "La nourriture était vraiment bonne, l'endroit super sympathique. Juste devant la gare donc pratique et en plus halal.",
                    rating: 5,
                    date: "Il y a 1 mois",
                    role: "Local Guide"
                }
            ]
        },
        en: {
            subtitle: "Customer Reviews",
            title: "What our clients say about us",
            cta: "Leave a review on Google",
            verified: "Verified Review",
            reviews: [
                {
                    name: "Frederique Vincenti",
                    comment: "Tasty cuisine, we had a treat, fast service, great welcome 👍",
                    rating: 5,
                    date: "3 days ago"
                },
                {
                    name: "GENEVIEVE",
                    comment: "Very good food and a smiling and very pleasant waitress.",
                    rating: 5,
                    date: "2 weeks ago"
                },
                {
                    name: "Annie Charraud",
                    comment: "I highly recommend this restaurant, the food is very good and the portions are generous",
                    rating: 5,
                    date: "1 month ago",
                    role: "Local Guide"
                },
                {
                    name: "Mary Bloody",
                    comment: "The food was really good, super friendly place. Right in front of the station, so convenient, and halal too.",
                    rating: 5,
                    date: "1 month ago",
                    role: "Local Guide"
                }
            ]
        },
        es: {
            subtitle: "Opiniones de Clientes",
            title: "Lo que nuestros clientes dicen de nosotros",
            cta: "Dejar una opinión en Google",
            verified: "Opinión Verificada",
            reviews: [
                {
                    name: "Frederique Vincenti",
                    comment: "Cocina sabrosa, lo disfrutamos mucho, servicio rápido, excelente acogida 👍",
                    rating: 5,
                    date: "Hace 3 días"
                },
                {
                    name: "GENEVIEVE",
                    comment: "Muy buena comida y una camarera sonriente y muy agradable.",
                    rating: 5,
                    date: "Hace 2 semanas"
                },
                {
                    name: "Annie Charraud",
                    comment: "Recomiendo encarecidamente este restaurante, se come muy bien y las porciones son generosas",
                    rating: 5,
                    date: "Hace 1 mes",
                    role: "Local Guide"
                },
                {
                    name: "Mary Bloody",
                    comment: "La comida estaba realmente buena, un lugar súper agradable. Justo enfrente de la estación, muy práctico y además halal.",
                    rating: 5,
                    date: "Hace 1 mes",
                    role: "Local Guide"
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
