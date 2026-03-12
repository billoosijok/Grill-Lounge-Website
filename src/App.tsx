import { useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { theme } from "./utils/theme";
import { useLanguage } from "./hooks/useLanguage";
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { MenuRamadanPage } from './pages/MenuRamadanPage';

function App() {
  const { lang, setLang } = useLanguage();
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

    if (location.pathname.match(/\/24/)) {
      navigate('/reservez/31-12-2023')
      return;
    }
    if (location.pathname.match(/\/valentin/i)) {
      navigate('/reservez/14-02-2025')
      return;
    }
    if (location.pathname.match(/\/avis/i)) {
      window.location.href = 'https://maps.app.goo.gl/Ag2oGZsLE964ojCC9';
      return;
    }
    if (location.pathname.match(/\/en\/?/i)) {
      setLang("en");
    }
    if (location.pathname.match(/\/reservez\/?/)) {
      window.location.href = 'tel:0468652742';
    }
  }, [location.pathname]);

  return (
    <NextUIProvider theme={theme}>
      <div className={"root-container"} style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu-ramadan" element={<MenuRamadanPage />} />
        </Routes>
      </div>
    </NextUIProvider>
  );
}

export default App;

