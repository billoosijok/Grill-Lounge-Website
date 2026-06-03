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
                
                {/* Suggestions du Moment title */}
                <div className="menu-title-section" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <span style={{ 
                        textTransform: 'uppercase', 
                        letterSpacing: '3px', 
                        fontSize: '0.95em', 
                        color: 'var(--accent-red)', 
                        fontWeight: 'bold',
                        display: 'block',
                        marginBottom: '10px'
                    }}>
                        {lang === 'fr' ? 'Suggestion du Chef' : lang === 'es' ? 'Sugerencia del Chef' : "Chef's Suggestion"}
                    </span>
                    <h1 className="menu-main-title" style={{ fontSize: '3em', color: 'var(--accent-green)', margin: '0' }}>
                        {menuData.title}
                    </h1>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    
                    {/* SECTION 1: Plats du Moment */}
                    <section className="menu-category" style={{
                        padding: '35px',
                        border: '1px solid rgba(25, 67, 70, 0.08)',
                        boxShadow: 'var(--card-shadow)',
                        borderRadius: '16px',
                        backgroundColor: '#fff'
                    }}>
                        <div className="category-header" style={{
                            borderBottom: '2px solid var(--accent-red)',
                            paddingBottom: '12px',
                            marginBottom: '25px',
                            textAlign: 'center'
                        }}>
                            <h2 className="category-title" style={{ color: 'var(--accent-green)', letterSpacing: '2px', fontWeight: 'bold', fontSize: '1.8em' }}>
                                {menuData.section1.title.toUpperCase()}
                            </h2>
                        </div>

                        <div className="category-content" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            {menuData.section1.items.map((item, idx) => (
                                <div key={idx} className="menu-item" style={{
                                    borderBottom: idx < menuData.section1.items.length - 1 ? '1px dashed #eee' : 'none',
                                    paddingBottom: idx < menuData.section1.items.length - 1 ? '20px' : '0'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px' }}>
                                        <strong className="item-name" style={{ fontSize: '1.3em', color: 'var(--text-main)', fontFamily: "'Outfit', sans-serif" }}>
                                            {item.name}
                                        </strong>
                                        <span style={{ fontSize: '1.25em', color: 'var(--accent-red)', fontWeight: 'bold', fontFamily: "'Outfit', sans-serif" }}>
                                            {item.price}
                                        </span>
                                    </div>
                                    {item.description && (
                                        <p className="item-description" style={{ fontSize: '1.05em', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '6px', lineHeight: '1.5' }}>
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SECTION 2: Suggestion du Week-end (Set Formula) */}
                    <section className="menu-category" style={{
                        padding: '40px 35px 35px 35px',
                        boxShadow: '0 10px 30px rgba(25, 67, 70, 0.15)',
                        borderRadius: '16px',
                        backgroundColor: 'var(--accent-green)',
                        color: 'var(--white)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative background gradient */}
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            left: '-50%',
                            width: '200%',
                            height: '200%',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)',
                            pointerEvents: 'none'
                        }} />

                        <div className="category-header" style={{
                            borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                            paddingBottom: '15px',
                            marginBottom: '25px',
                            textAlign: 'center'
                        }}>
                            <h2 className="category-title" style={{ color: 'var(--white)', letterSpacing: '3px', fontWeight: 'bold', fontSize: '1.8em' }}>
                                {menuData.section2.title.toUpperCase()}
                            </h2>
                        </div>

                        {/* Formula Pricing block - moved to top */}
                        <div className="weekend-formulas" style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ 
                                display: 'flex', 
                                width: '100%', 
                                flexWrap: 'wrap',
                                gap: '20px',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                {/* Formula 0 (Plat seul) */}
                                <div style={{ 
                                    flex: 1, 
                                    minWidth: '160px',
                                    display: 'flex', 
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    borderRight: '1px solid rgba(255, 255, 255, 0.15)',
                                    paddingRight: '15px'
                                }}>
                                    <div style={{ 
                                        fontSize: '0.95em', 
                                        lineHeight: '1.4', 
                                        fontWeight: '800', 
                                        letterSpacing: '1px',
                                        textAlign: 'right',
                                        textTransform: 'uppercase',
                                        fontFamily: "'Outfit', sans-serif"
                                    }}>
                                        <div>PLAT</div>
                                    </div>
                                    <div style={{ 
                                        display: 'flex', 
                                        alignItems: 'flex-start',
                                        fontFamily: "'Outfit', sans-serif",
                                        fontWeight: '900',
                                        fontSize: '3.6em',
                                        color: '#fff'
                                    }}>
                                        <span>15</span>
                                        <span style={{ fontSize: '0.45em', marginTop: '8px', color: '#d48a42', marginLeft: '2px' }}>€</span>
                                    </div>
                                </div>

                                {/* Formula 1 */}
                                <div style={{ 
                                    flex: 1, 
                                    minWidth: '200px',
                                    display: 'flex', 
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    borderRight: '1px solid rgba(255, 255, 255, 0.15)',
                                    paddingRight: '15px'
                                }}>
                                    <div style={{ 
                                        fontSize: '0.95em', 
                                        lineHeight: '1.4', 
                                        fontWeight: '800', 
                                        letterSpacing: '1px',
                                        textAlign: 'right',
                                        textTransform: 'uppercase',
                                        fontFamily: "'Outfit', sans-serif"
                                    }}>
                                        <div>ENTRÉE + PLAT</div>
                                        <div style={{ color: '#d48a42', fontSize: '0.95em', margin: '2px 0' }}>OU</div>
                                        <div>PLAT + DESSERT</div>
                                    </div>
                                    <div style={{ 
                                        display: 'flex', 
                                        alignItems: 'flex-start',
                                        fontFamily: "'Outfit', sans-serif",
                                        fontWeight: '900',
                                        fontSize: '3.6em',
                                        color: '#fff'
                                    }}>
                                        <span>21</span>
                                        <span style={{ fontSize: '0.45em', marginTop: '8px', color: '#d48a42', marginLeft: '2px' }}>€</span>
                                    </div>
                                </div>

                                {/* Formula 2 */}
                                <div style={{ 
                                    flex: 1, 
                                    minWidth: '200px',
                                    display: 'flex', 
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px'
                                }}>
                                    <div style={{ 
                                        fontSize: '0.95em', 
                                        lineHeight: '1.4', 
                                        fontWeight: '800', 
                                        letterSpacing: '1px',
                                        textAlign: 'right',
                                        textTransform: 'uppercase',
                                        fontFamily: "'Outfit', sans-serif"
                                    }}>
                                        <div>ENTRÉE</div>
                                        <div>+ PLAT</div>
                                        <div>+ DESSERT</div>
                                    </div>
                                    <div style={{ 
                                        display: 'flex', 
                                        alignItems: 'flex-start',
                                        fontFamily: "'Outfit', sans-serif",
                                        fontWeight: '900',
                                        fontSize: '3.6em',
                                        color: '#fff'
                                    }}>
                                        <span>25</span>
                                        <span style={{ fontSize: '0.45em', marginTop: '8px', color: '#d48a42', marginLeft: '2px' }}>€</span>
                                    </div>
                                </div>
                            </div>

                            {/* Divider Line */}
                            <hr style={{ border: 'none', borderTop: '2px solid rgba(255, 255, 255, 0.2)', margin: '20px 0 30px 0' }} />
                        </div>

                        {/* Category contents */}
                        <div className="category-content" style={{ display: 'flex', flexDirection: 'column', gap: '35px', position: 'relative', zIndex: 1 }}>
                            {menuData.section2.categories.map((category, catIdx) => (
                                <div key={catIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                    <h3 style={{ 
                                        color: '#d48a42', 
                                        fontSize: '1.2em', 
                                        letterSpacing: '2px', 
                                        textTransform: 'uppercase', 
                                        fontWeight: 'bold',
                                        marginBottom: '15px'
                                    }}>
                                        | {category.name}
                                    </h3>
                                    
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', alignItems: 'center' }}>
                                        {category.items.map((item, itemIdx) => {
                                            if (typeof item === 'string') {
                                                return (
                                                    <div key={itemIdx} style={{ fontSize: '1.2em', fontWeight: '500' }}>
                                                        - {item}
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <div key={itemIdx} style={{ maxWidth: '600px', width: '100%' }}>
                                                        <div style={{ fontSize: '1.25em', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                                            <span>{item.name}</span>
                                                            {item.price && (
                                                                <span style={{ color: '#d48a42', fontSize: '0.95em' }}>({item.price})</span>
                                                            )}
                                                        </div>
                                                        {item.description && (
                                                            <p style={{ color: '#ccc', fontStyle: 'italic', marginTop: '6px', fontSize: '1.05em', lineHeight: '1.5' }}>
                                                                {item.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* Call-to-action bottom box */}
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
