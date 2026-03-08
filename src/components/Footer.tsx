import React from 'react';
import data from '../data.json';
import { Icon } from './Icon';
import './HomeLayout.css';

export const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-top">
                <div className="footer-column">
                    <img
                        className="footer-logo"
                        alt="Grill Lounge Logo"
                        src="/logo-black.png"
                    />
                    <p className="footer-text">
                        Découvrez le goût authentique au Grill Lounge Steakhouse. Venez partager un moment inoubliable autour de nos spécialités.
                    </p>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        {data.icons.map(({ link, icon, analyticsId }) => (
                            <a
                                key={analyticsId}
                                href={link}
                                onClick={() => (global as any).gtag("event", analyticsId)}
                                style={{ color: 'white', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Icon icon={icon as any} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">Contact</h3>
                    <ul className="footer-links" style={{ color: '#a0a0a0', lineHeight: '2' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>5 Av. Pierre Semard, 11100 Narbonne</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <a href="tel:0468652742" style={{ color: 'inherit', textDecoration: 'none' }}>04 68 65 27 42</a>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span>Lundi - Dimanche: 12h00 - 15h00, 18h00 - 23h00</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Grill Lounge Steakhouse. Tous droits réservés.</p>
            </div>
        </footer>
    );
};
