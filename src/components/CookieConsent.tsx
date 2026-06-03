import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../hooks/useLanguage';
import './CookieConsent.css';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const CookieConsent = () => {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem('cookie-consent-choice');
    // If no choice has been made, show the banner
    if (!choice) {
      setVisible(true);
    }

    // Listen to custom event to manually trigger the banner (e.g. from footer)
    const handleShowBanner = () => {
      setVisible(true);
    };

    window.addEventListener('show-cookie-consent', handleShowBanner);
    return () => {
      window.removeEventListener('show-cookie-consent', handleShowBanner);
    };
  }, []);

  const updateConsent = (choice: 'accepted' | 'declined') => {
    localStorage.setItem('cookie-consent-choice', choice);
    
    const state = choice === 'accepted' ? 'granted' : 'denied';
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': state,
        'ad_user_data': state,
        'ad_personalization': state,
        'analytics_storage': state
      });
    }

    // Add a short fade-out animation delay before hiding
    const element = document.getElementById('cookie-consent-banner');
    if (element) {
      element.classList.add('cookie-consent-exit');
      setTimeout(() => {
        setVisible(false);
      }, 400); // match CSS transition time
    } else {
      setVisible(false);
    }
  };

  if (!visible) return null;

  const translations = {
    fr: {
      title: "Gestion des cookies",
      desc: "Nous utilisons des cookies pour optimiser votre expérience, analyser notre trafic et mesurer l'efficacité de nos campagnes. Vous pouvez choisir d'accepter tous les cookies ou de continuer sans accepter.",
      accept: "Accepter tout",
      decline: "Continuer sans accepter"
    },
    en: {
      title: "Cookie Preferences",
      desc: "We use cookies to optimize your experience, analyze our traffic, and measure the effectiveness of our campaigns. You can choose to accept all cookies or continue without accepting.",
      accept: "Accept All",
      decline: "Decline All"
    },
    es: {
      title: "Preferencias de cookies",
      desc: "Utilizamos cookies para optimizar su experiencia, analizar nuestro tráfico y medir la efectividad de nuestras campañas. Puede optar por aceptar todas las cookies o continuar sin aceptar.",
      accept: "Aceptar todo",
      decline: "Rechazar todo"
    }
  };

  const text = translations[lang as keyof typeof translations] || translations.fr;

  return createPortal(
    <div 
      id="cookie-consent-banner" 
      className="cookie-consent-container animate-slide-up"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <div className="cookie-consent-content">
        <div className="cookie-consent-text-section">
          <h4 id="cookie-title" className="cookie-consent-title">{text.title}</h4>
          <p id="cookie-desc" className="cookie-consent-desc">{text.desc}</p>
        </div>
        <div className="cookie-consent-actions">
          <button 
            className="cookie-btn cookie-btn-decline" 
            onClick={() => updateConsent('declined')}
          >
            {text.decline}
          </button>
          <button 
            className="cookie-btn cookie-btn-accept" 
            onClick={() => updateConsent('accepted')}
          >
            {text.accept}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
