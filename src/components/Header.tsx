import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { LangPicker } from './LangPicker';
import './HomeLayout.css';

export const Header = () => {
    const navigate = useNavigate();
    const { lang, setLang } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleReserve = () => {
        closeMenu();
        navigate(`/${lang}/contact`);
    };

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="site-header">
            <div className="header-left">
                <img
                    className="header-logo"
                    alt="Grill Lounge Logo"
                    src="/logo-black.png"
                    onClick={() => { closeMenu(); navigate(`/${lang}`); }}
                />
            </div>

            <nav className={`header-center ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <a href={`/${lang}`} className="header-link" onClick={(e) => { e.preventDefault(); closeMenu(); navigate(`/${lang}`); }}>
                    {lang === 'fr' ? 'Accueil' : lang === 'es' ? 'Inicio' : 'Home'}
                </a>
                <a href={`/${lang}/menu`} className="header-link" onClick={(e) => { e.preventDefault(); closeMenu(); navigate(`/${lang}/menu`); }}>
                    Menu
                </a>
                <a href={`/${lang}/menu-moment`} className="header-link menu-moment-highlight" onClick={(e) => { e.preventDefault(); closeMenu(); navigate(`/${lang}/menu-moment`); }}>
                    {lang === 'fr' ? 'Menu du Moment' : lang === 'es' ? 'Menú del Momento' : 'Special Menu'}
                    <span className="pulse-dot" />
                </a>
                <a href={`/${lang}/contact`} className="header-link" onClick={(e) => { e.preventDefault(); closeMenu(); navigate(`/${lang}/contact`); }}>
                    {lang === 'fr' ? 'Contact' : lang === 'es' ? 'Contacto' : 'Contact'}
                </a>

                <a href="tel:0468652742" className="header-phone-link mobile-phone" onClick={closeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    04 68 65 27 42
                </a>

                <button className="cta-button mobile-cta" onClick={handleReserve}>
                    {lang === 'fr' ? 'Réservez une table' : lang === 'es' ? 'Reserve una mesa' : 'Reserve a table'}
                </button>
            </nav>

            <div className="header-right">
                <a href="tel:0468652742" className="header-phone-link desktop-phone">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    04 68 65 27 42
                </a>
                <div className="lang-picker-wrapper">
                    <LangPicker lang={lang} onChange={setLang} />
                </div>
                <button className="cta-button desktop-cta" onClick={handleReserve}>
                    {lang === 'fr' ? 'Réservez une table' : lang === 'es' ? 'Reserve una mesa' : 'Reserve a table'}
                </button>
                <div className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMobileMenuOpen ? (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </div>
            </div>
        </header>
    );
};
