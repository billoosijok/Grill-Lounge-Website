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

                <button className="cta-button mobile-cta" onClick={handleReserve}>
                    {lang === 'fr' ? 'Réservez une table' : lang === 'es' ? 'Reserve una mesa' : 'Reserve a table'}
                </button>
            </nav>

            <div className="header-right">
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
