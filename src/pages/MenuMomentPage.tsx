import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import menuMomentFr from '../data/menu_moment.json';
import menuMomentEn from '../data/menu_moment_en.json';
import menuMomentEs from '../data/menu_moment_es.json';
import { useLanguage } from '../hooks/useLanguage';
import '../index.css';

const menuMomentDataMap = {
    fr: menuMomentFr,
    en: menuMomentEn,
    es: menuMomentEs,
};

export const MenuMomentPage = () => {
    const { lang } = useLanguage();
    const menuData = menuMomentDataMap[lang] || menuMomentFr;

    return (
        <div className="menu-page-container animate__animated animate__fadeIn">
            <Header />

            <main className="menu-content" style={{ marginTop: '40px', maxWidth: '800px', width: '100%', margin: '0 auto 60px auto', padding: '0 15px' }}>
                <div className="menu-title-section" style={{ 
                    textAlign: 'center', 
                    marginBottom: '40px', 
                    backgroundColor: 'var(--accent-green)', 
                    color: 'var(--white)', 
                    padding: '50px 30px', 
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(25, 67, 70, 0.15)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative background element */}
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)',
                        pointerEvents: 'none'
                    }} />

                    <span style={{ 
                        textTransform: 'uppercase', 
                        letterSpacing: '3px', 
                        fontSize: '0.9em', 
                        color: '#d48a42', 
                        fontWeight: 'bold',
                        display: 'block',
                        marginBottom: '10px'
                    }}>
                        {lang === 'fr' ? 'Suggestion du Chef' : lang === 'es' ? 'Sugerencia del Chef' : "Chef's Suggestion"}
                    </span>
                    
                    <h1 className="menu-main-title" style={{ color: 'var(--white)', fontSize: '2.8em', margin: '0 0 10px 0', letterSpacing: '4px' }}>
                        {menuData.title}
                    </h1>
                    
                    <p className="menu-subtitle" style={{ color: '#e0e0e0', fontSize: '1.2em', margin: '0 0 25px 0', fontStyle: 'italic' }}>
                        {menuData.description}
                    </p>
                    
                    <div style={{ 
                        fontSize: '3.5em', 
                        fontWeight: '800', 
                        margin: '15px 0', 
                        fontFamily: "'Outfit', sans-serif",
                        color: 'var(--white)',
                        textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2px'
                    }}>
                        {menuData.price}<span style={{ fontSize: '0.5em', fontWeight: '400', alignSelf: 'flex-start', marginTop: '10px' }}>€</span>
                    </div>

                    <div style={{ 
                        fontSize: '0.95em', 
                        color: '#b0c4c5', 
                        borderTop: '1px solid rgba(255,255,255,0.1)', 
                        paddingTop: '15px', 
                        display: 'inline-block',
                        maxWidth: '80%'
                    }}>
                        {menuData.note}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {menuData.categories.map((category, catIdx) => (
                        <section key={catIdx} className="menu-category" style={{
                            padding: '30px',
                            border: '1px solid rgba(25, 67, 70, 0.08)',
                            boxShadow: 'var(--card-shadow)',
                            borderRadius: '12px'
                        }}>
                            <div className="category-header" style={{
                                borderBottom: '2px solid var(--accent-red)',
                                paddingBottom: '12px',
                                marginBottom: '25px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <h2 className="category-title" style={{ color: 'var(--accent-green)', letterSpacing: '2px', fontWeight: 'bold' }}>
                                    {category.name}
                                </h2>
                                <span style={{ opacity: '0.2', fontSize: '1.5em', fontWeight: 'bold', fontFamily: "'Outfit', sans-serif" }}>
                                    0{catIdx + 1}
                                </span>
                            </div>

                            <div className="category-content" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                {category.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="menu-item" style={{
                                        borderBottom: itemIdx < category.items.length - 1 ? '1px dashed #eee' : 'none',
                                        paddingBottom: itemIdx < category.items.length - 1 ? '20px' : '0'
                                    }}>
                                        <div className="menu-item-header" style={{ marginBottom: '5px' }}>
                                            <strong className="item-name" style={{ fontSize: '1.25em', color: 'var(--accent-red)' }}>
                                                {item.name}
                                            </strong>
                                        </div>
                                        {item.description && (
                                            <p className="item-description" style={{ fontSize: '1.05em', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <div style={{ 
                    textAlign: 'center', 
                    marginTop: '50px', 
                    padding: '30px', 
                    backgroundColor: '#fff', 
                    borderRadius: '12px',
                    border: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: 'var(--card-shadow)'
                }}>
                    <p style={{ fontSize: '1.2em', color: 'var(--accent-green)', fontWeight: 'bold', margin: '0 0 10px 0' }}>
                        {lang === 'fr' 
                          ? 'Une envie particulière ou des allergies ?' 
                          : lang === 'es' 
                          ? '¿Alguna petición especial o alergia?' 
                          : 'Special request or allergies?'}
                    </p>
                    <p style={{ color: 'var(--text-muted)', margin: '0 0 20px 0' }}>
                        {lang === 'fr' 
                          ? 'N’hésitez pas à le signaler à notre équipe lors de votre commande.' 
                          : lang === 'es' 
                          ? 'No dude en informar a nuestro equipo al realizar su pedido.' 
                          : 'Do not hesitate to inform our staff when placing your order.'}
                    </p>
                    <a 
                        href={`/${lang}/contact`} 
                        className="cta-button"
                        style={{ display: 'inline-block', textDecoration: 'none' }}
                    >
                        {lang === 'fr' ? 'Réservez votre table' : lang === 'es' ? 'Reserve su mesa' : 'Reserve your table'}
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
};
