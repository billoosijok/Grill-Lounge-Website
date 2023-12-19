import React, {useCallback, useEffect, useState} from 'react';
import {NextUIProvider} from '@nextui-org/react';
import data from './data.json'
import {LinkItem} from "./components/LinkItem";
import {Icon} from "./components/Icon";
import {LangPicker} from "./components/LangPicker";
import {useLocation, useNavigate} from "react-router-dom";
import {OfferBanner} from "./components/OfferBanner";
import {theme} from "./utils/theme";
import { ReservationModal } from "./components/ReservationModal";
import {useLanguage} from "./hooks/useLanguage";

function App() {
  const {lang, setLang} = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
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
    if (location.pathname.match(/\/reservez\/?/)) {
      setIsModalOpen(true)
    }
  }, [location.pathname]);

  return (
    <NextUIProvider theme={theme}>
        <div className={"root-container"} style={{ paddingBottom: 100 }}>
          <OfferBanner text={'Menu Spécial de Noël'} action={{label: 'en savoir plus', url: '/resources/Menu_noel.pdf', color: "error"}}>
            <div className={'bg-div'} >
              <img src={require('./img/green.png')} style={{flex: 1, maxWidth: 160}} />
              <img src={require('./img/deco.png')}  style={{flex: 5, opacity: 0.6, maxWidth: 300}} />
              <img src={require('./img/green.png')} style={{flex: 1, maxWidth: 160}} />
            </div>
          </OfferBanner>
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
                {i === 1 ? (
                  <>
                    <li>
                      <LinkItem
                        label={lang === 'fr' ? "Réservez pour Noël" : "Reserve for Christmas"}
                        analyticsId={'reservation_noel_click'}
                        badge={<span style={{fontSize: 70, position: 'relative', left: -40, top: -30}}>🎄</span>}
                        customStyles={{
                          backgroundColor: '#8B0E1B',
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                        onClick={() => {
                          navigate('/reservez/24-12-2023')
                        }}
                      />
                    </li>
                    <li>
                      <LinkItem
                        label={lang === 'fr' ? "Réservez pour le réveillon du Nouvel An" : "Reserve for New Year's Eve"}
                        analyticsId={'reservation_nye_click'}
                        badge={<img src={require('./img/2024.png')} width={100} style={{maxWidth: 'unset',  position: 'relative', left: -40, top: 5}} />}
                        customStyles={{
                          background: `url(${require("./img/stars.png")}) #111 100%`,
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                        onClick={() => {
                          navigate('/reservez/31-12-2023')
                        }}
                      />
                    </li>
                    <li>
                      <LinkItem
                        label={lang === 'fr' ? "Réservez une table" : "Reserve a table"}
                        analyticsId={'reservation_click'}
                        onClick={() => {
                          navigate('/reservez')
                        }}
                      />
                    </li>
                  </>
                ): null}
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
            onClose={() => {
              setIsModalOpen(false)
              navigate('/')
            }}
            open={isModalOpen}
          />
      </div>
    </NextUIProvider>
  );
}

export default App;
