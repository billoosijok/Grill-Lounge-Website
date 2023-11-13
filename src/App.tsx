import React, {useCallback, useEffect, useState} from 'react';
import {NextUIProvider} from '@nextui-org/react';
import data from './data.json'
import {LinkItem} from "./components/LinkItem";
import {Icon} from "./components/Icon";
import {LangPicker} from "./components/LangPicker";
import {useLocation} from "react-router-dom";
// import {OfferBanner} from "./components/OfferBanner";
import {theme} from "./utils/theme";
import { ReservationModal } from "./components/ReservationModal";
import {LanguageProvider, useLanguage} from "./hooks/useLanguage";

function App() {
  const {lang, setLang} = useLanguage();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>();

  const potentiallyLocalizedProp = useCallback(
    (val) => {
      if (typeof val !== "object") return val;

      return val[lang] || "untranslated";
    },
    [lang],
  );

  useEffect(() => {
    const element = document.getElementsByTagName("html");
    element.item(0)?.setAttribute("lang", lang);
  }, [lang]);

  useEffect(() => {
    if (location.pathname.match(/\/en\/?/i)) {
      setLang("en");
    }
  }, [location.pathname]);

  return (
    <NextUIProvider theme={theme}>
        <div className={"root-container"} style={{ paddingBottom: 100 }}>
          <div className={'langPickerWrapper'}>
            <LangPicker lang={lang} onChange={setLang} />
          </div>
        <header className="animate__animated animate__faster animate__fadeIn">
          <img
            className="logo "
            alt="Grill Lounge Logo"
            src={require("./img/logo.png")}
            width="400"
          />
          <h3>
            Steak &nbsp;·&nbsp; Burger &nbsp;·&nbsp; Pasta &nbsp;·&nbsp; Tapas
          </h3>
          <h5>Narbonne,&nbsp; France</h5>
        </header>
        <main className="animate__animated animate__fadeIn">
          <ul className="social-media">
            {data.icons.map(({ link, icon, analyticsId }) => (
              <li>
                <a
                  href={link}
                  onClick={() => global.gtag("event", analyticsId)}
                >
                  <Icon icon={icon as any} />
                </a>
              </li>
            ))}
          </ul>
          <ul className="links">
            {data.links.map(({ label, url, analyticsId,...item }, i) => (
              <>
                {i === 1 ? (<li>
                  <LinkItem
                    label={lang === 'fr' ? "Réservez une table" : "Reserve a table"}
                    analyticsId={'reservation_click'}
                    onClick={() => setIsModalOpen(true)}
                  />
                </li>): null
                }
                <li>
                  <LinkItem
                    label={potentiallyLocalizedProp(label)}
                    url={potentiallyLocalizedProp(url)}
                    analyticsId={potentiallyLocalizedProp(analyticsId)}
                    {...item}
                  />
                </li>
              </>
            ))}

          </ul>
        </main>
          <ReservationModal
            title={lang === 'fr' ? 'Réservez une table' : 'Reserve a table'}
            onClose={() => setIsModalOpen(false)}
            open={isModalOpen}
          />
      </div>
    </NextUIProvider>
  );
}

export default App;
