import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useLanguage } from '../hooks/useLanguage';
import '../index.css';

export const ContactPage = () => {
    const { lang } = useLanguage();
    
    const content = {
        fr: {
            title: "Contactez-nous",
            subtitle: "Une question, une envie ou une réservation ? Notre équipe est à votre écoute.",
            infoTitle: "Nos Coordonnées",
            address: "Adresse",
            phone: "Téléphone",
            email: "Email",
            hours: "Horaires d'ouverture",
            hoursVal: "Lundi - Dimanche : 12h00 - 15h00, 18h00 - 23h00",
            mapTitle: "Nous trouver à Narbonne"
        },
        en: {
            title: "Contact Us",
            subtitle: "A question, a request, or a reservation? Our team is here to help.",
            infoTitle: "Our Contact Info",
            address: "Address",
            phone: "Phone",
            email: "Email",
            hours: "Opening Hours",
            hoursVal: "Monday - Sunday: 12:00 PM - 3:00 PM, 6:00 PM - 11:00 PM",
            mapTitle: "Find us in Narbonne"
        },
        es: {
            title: "Contacto",
            subtitle: "¿Una pregunta, un antojo o una reserva? Nuestro equipo está a su servicio.",
            infoTitle: "Nuestros Datos",
            address: "Dirección",
            phone: "Teléfono",
            email: "Email",
            hours: "Horario de apertura",
            hoursVal: "Lunes - Domingo: 12:00 - 15:00, 18:00 - 23:00",
            mapTitle: "Encuéntranos en Narbona"
        }
    };

    const text = content[lang] || content.fr;

    return (
        <div className="menu-page-container animate__animated animate__fadeIn">
            <Header />

            <main className="menu-content" style={{ marginTop: '40px', maxWidth: '1000px', width: '100%', margin: '0 auto 60px auto', padding: '0 15px' }}>
                
                {/* Hero Section of Contact Page */}
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h1 className="menu-main-title" style={{ fontSize: '3em', color: 'var(--accent-green)', marginBottom: '15px' }}>
                        {text.title}
                    </h1>
                    <p style={{ fontSize: '1.2em', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                        {text.subtitle}
                    </p>
                </div>

                {/* Main Content Grid (2 columns: Info Cards and Google Map) */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '40px',
                    marginBottom: '50px',
                    width: '100%',
                    alignItems: 'stretch'
                }}>
                    
                    {/* Left Column: Contact info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', justifyContent: 'space-between' }}>
                        <h2 className="category-title" style={{ borderBottom: '2px solid var(--accent-red)', paddingBottom: '10px', marginBottom: '10px', fontSize: '1.8em', color: 'var(--accent-green)' }}>
                            {text.infoTitle}
                        </h2>

                        {/* Address */}
                        <div style={{ 
                            display: 'flex', 
                            gap: '15px', 
                            backgroundColor: '#fff', 
                            padding: '20px', 
                            borderRadius: '12px', 
                            boxShadow: 'var(--card-shadow)',
                            border: '1px solid rgba(0,0,0,0.03)'
                        }}>
                            <div style={{ color: 'var(--accent-red)', marginTop: '3px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div>
                                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1em', fontWeight: 'bold', color: 'var(--text-main)' }}>{text.address}</h3>
                                <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.4' }}>5 Av. Pierre Semard, 11100 Narbonne</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div style={{ 
                            display: 'flex', 
                            gap: '15px', 
                            backgroundColor: '#fff', 
                            padding: '20px', 
                            borderRadius: '12px', 
                            boxShadow: 'var(--card-shadow)',
                            border: '1px solid rgba(0,0,0,0.03)'
                        }}>
                            <div style={{ color: 'var(--accent-red)', marginTop: '3px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1em', fontWeight: 'bold', color: 'var(--text-main)' }}>{text.phone}</h3>
                                <a href="tel:0468652742" style={{ margin: 0, color: 'var(--accent-green)', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1em' }}>04 68 65 27 42</a>
                            </div>
                        </div>

                        {/* Email */}
                        <div style={{ 
                            display: 'flex', 
                            gap: '15px', 
                            backgroundColor: '#fff', 
                            padding: '20px', 
                            borderRadius: '12px', 
                            boxShadow: 'var(--card-shadow)',
                            border: '1px solid rgba(0,0,0,0.03)'
                        }}>
                            <div style={{ color: 'var(--accent-red)', marginTop: '3px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1em', fontWeight: 'bold', color: 'var(--text-main)' }}>{text.email}</h3>
                                <a href="mailto:grilllounge.narbonne@gmail.com" style={{ margin: 0, color: 'var(--accent-green)', textDecoration: 'none', wordBreak: 'break-all' }}>grilllounge.narbonne@gmail.com</a>
                            </div>
                        </div>

                        {/* Hours */}
                        <div style={{ 
                            display: 'flex', 
                            gap: '15px', 
                            backgroundColor: '#fff', 
                            padding: '20px', 
                            borderRadius: '12px', 
                            boxShadow: 'var(--card-shadow)',
                            border: '1px solid rgba(0,0,0,0.03)'
                        }}>
                            <div style={{ color: 'var(--accent-red)', marginTop: '3px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1em', fontWeight: 'bold', color: 'var(--text-main)' }}>{text.hours}</h3>
                                <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.4' }}>{text.hoursVal}</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Google Map */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        <h2 className="category-title" style={{ borderBottom: '2px solid var(--accent-red)', paddingBottom: '10px', marginBottom: '10px', fontSize: '1.8em', color: 'var(--accent-green)' }}>
                            {text.mapTitle}
                        </h2>
                        <div style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: 'var(--card-shadow)',
                            border: '1px solid rgba(0,0,0,0.08)',
                            flex: 1,
                            minHeight: '350px',
                            width: '100%',
                            position: 'relative'
                        }}>
                            <iframe 
                                src="https://maps.google.com/maps?q=5%20Av.%20Pierre%20Semard,%2011100%20Narbonne&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy"
                                title="Grill Lounge Narbonne Location"
                            />
                        </div>
                    </div>

                </div>

            </main>

            <Footer />
        </div>
    );
};
