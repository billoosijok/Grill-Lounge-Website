import { useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { theme } from "./utils/theme";
import { useLanguage, LanguageProvider } from "./hooks/useLanguage";
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { MenuMomentPage } from './pages/MenuMomentPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { CookieConsent } from './components/CookieConsent';

function AppContent() {
  const { lang } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const element = document.getElementsByTagName("html");
    element.item(0)?.setAttribute("lang", lang);
  }, [lang]);

  useEffect(() => {
    // Scroll to top on route change if no hash
    if (!location.hash) {
      window.scrollTo(0, 0);
    }

    // Legacy redirects - adapted to include language
    if (location.pathname.match(/\/24/)) {
      navigate(`/${lang}/reservez/31-12-2023`);
      return;
    }
    if (location.pathname.match(/\/valentin/i)) {
      navigate(`/${lang}/reservez/14-02-2025`);
      return;
    }
    if (location.pathname.match(/\/avis/i)) {
      window.location.href = 'https://maps.app.goo.gl/Ag2oGZsLE964ojCC9';
      return;
    }
    if (location.pathname.match(/\/reservez\/?/)) {
      navigate(`/${lang}/contact`);
      return;
    }
  }, [location.pathname, location.hash, lang, navigate]);

  return (
    <div className={"root-container"} style={{ minHeight: '100vh' }}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="menu-moment" element={<MenuMomentPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="mentions-legales" element={<LegalPage type="mentions-legales" />} />
        <Route path="politique-confidentialite" element={<LegalPage type="confidentialite" />} />
        <Route path="politique-cookies" element={<LegalPage type="cookies" />} />
        <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
      </Routes>
      <CookieConsent />
    </div>
  );
}

function App() {
  return (
    <NextUIProvider theme={theme}>
      <Routes>
        {/* Redirect root to default language */}
        <Route path="/" element={<Navigate to="/fr" replace />} />

        {/* Redirect old PDF paths to the digital menu page */}
        <Route path="/resources/Menu.pdf" element={<Navigate to="/fr/menu" replace />} />
        <Route path="/resources/menu.pdf" element={<Navigate to="/fr/menu" replace />} />
        <Route path="/resources/Menu.pdf/" element={<Navigate to="/fr/menu" replace />} />
        <Route path="/resources/menu.pdf/" element={<Navigate to="/fr/menu" replace />} />

        {/* Redirect root-level paths (without language prefix) to default language (/fr) */}
        <Route path="/menu" element={<Navigate to="/fr/menu" replace />} />
        <Route path="/menu-moment" element={<Navigate to="/fr/menu-moment" replace />} />
        <Route path="/contact" element={<Navigate to="/fr/contact" replace />} />
        <Route path="/mentions-legales" element={<Navigate to="/fr/mentions-legales" replace />} />
        <Route path="/politique-confidentialite" element={<Navigate to="/fr/politique-confidentialite" replace />} />
        <Route path="/politique-cookies" element={<Navigate to="/fr/politique-cookies" replace />} />
        
        {/* Language subpath routes */}
        <Route path="/:lang/*" element={
          <LanguageProvider>
            <AppContent />
          </LanguageProvider>
        } />

        {/* Catch-all for other paths: redirect to default lang */}
        <Route path="*" element={<Navigate to="/fr" replace />} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;

