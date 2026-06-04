import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import './HomeLayout.css';

export const MapSection = () => {
    const { lang } = useLanguage();

    const content = {
        fr: {
            subtitle: "Localisation",
            title: "Où nous trouver ?",
            desc: "Notre restaurant est idéalement situé en face de la gare de Narbonne, parfait pour un repas savoureux sur place ou à emporter.",
            addressLabel: "Adresse",
            addressValue: "5 Av. Pierre Semard, 11100 Narbonne",
            hoursLabel: "Horaires",
            hoursValue: "Lundi - Dimanche : 12h00 - 15h00, 18h00 - 23h00",
            phoneLabel: "Téléphone",
            phoneValue: "04 68 65 27 42",
            cta: "Obtenir l'itinéraire"
        },
        en: {
            subtitle: "Location",
            title: "Where to find us?",
            desc: "Our restaurant is ideally located right across the Narbonne train station, perfect for a tasty dine-in or takeout meal.",
            addressLabel: "Address",
            addressValue: "5 Av. Pierre Semard, 11100 Narbonne",
            hoursLabel: "Hours",
            hoursValue: "Monday - Sunday: 12:00 PM - 3:00 PM, 6:00 PM - 11:00 PM",
            phoneLabel: "Phone",
            phoneValue: "04 68 65 27 42",
            cta: "Get directions"
        },
        es: {
            subtitle: "Ubicación",
            title: "¿Dónde encontrarnos?",
            desc: "Nuestro restaurante está idealmente situado frente a la estación de tren de Narbona, perfecto para una comida deliciosa allí o para llevar.",
            addressLabel: "Dirección",
            addressValue: "5 Av. Pierre Semard, 11100 Narbonne",
            hoursLabel: "Horario",
            hoursValue: "Lunes - Domingo: 12:00 - 15:00, 18:00 - 23:00",
            phoneLabel: "Teléfono",
            phoneValue: "04 68 65 27 42",
            cta: "Cómo llegar"
        }
    };

    const text = content[lang as keyof typeof content] || content.fr;

    return (
        <section className="map-section" style={{ backgroundColor: 'var(--white)', padding: '80px 5%' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <div className="section-subtitle">{text.subtitle}</div>
                <h2 className="section-title">{text.title}</h2>
                <p className="about-desc" style={{ maxWidth: '600px', margin: '0 auto' }}>{text.desc}</p>
            </div>

            <div className="map-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '40px',
                maxWidth: '1100px',
                margin: '0 auto',
                alignItems: 'stretch'
            }}>
                {/* Left Card: Info */}
                <div style={{
                    backgroundColor: 'var(--primary-bg)',
                    padding: '40px 30px',
                    borderRadius: '16px',
                    boxShadow: 'var(--card-shadow)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(0,0,0,0.02)'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        {/* Address */}
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <div style={{ color: 'var(--accent-red)', marginTop: '3px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 5px 0', fontSize: '1.15em', fontWeight: 'bold', color: 'var(--accent-green)', fontFamily: "'Outfit', sans-serif" }}>{text.addressLabel}</h4>
                                <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '1.05em', lineHeight: '1.4' }}>{text.addressValue}</p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <div style={{ color: 'var(--accent-red)', marginTop: '3px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 5px 0', fontSize: '1.15em', fontWeight: 'bold', color: 'var(--accent-green)', fontFamily: "'Outfit', sans-serif" }}>{text.hoursLabel}</h4>
                                <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '1.05em', lineHeight: '1.4' }}>{text.hoursValue}</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <div style={{ color: 'var(--accent-red)', marginTop: '3px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 5px 0', fontSize: '1.15em', fontWeight: 'bold', color: 'var(--accent-green)', fontFamily: "'Outfit', sans-serif" }}>{text.phoneLabel}</h4>
                                <a href="tel:0468652742" style={{ margin: 0, color: 'var(--accent-red)', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.15em' }}>{text.phoneValue}</a>
                            </div>
                        </div>
                    </div>

                    <button
                        className="cta-button"
                        style={{ width: '100%', marginTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                        onClick={() => window.open('https://goo.gl/maps/7hAnjQGf3SJPrkCo9', '_blank')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                            <line x1="9" y1="3" x2="9" y2="18"></line>
                            <line x1="15" y1="6" x2="15" y2="21"></line>
                        </svg>
                        {text.cta}
                    </button>
                </div>

                {/* Right Card: Google Map Iframe */}
                <div style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: 'var(--card-shadow)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    minHeight: '350px',
                    position: 'relative'
                }}>
                    <iframe
                        src="https://maps.google.com/maps?q=5%20Av.%20Pierre%20Semard,%2011100%20Narbonne&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        title="Grill Lounge Location Map"
                    />
                </div>
            </div>
        </section>
    );
};
