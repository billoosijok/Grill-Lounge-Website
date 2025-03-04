import React, {useCallback, useEffect, useState} from 'react';
import {Modal, NextUIProvider, Text, useModal} from '@nextui-org/react';
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
  const {visible: menuModalVisible, setVisible: setMenuModalVisible} = useModal(false);
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
    if (location.pathname.match(/\/menu/)) {
      setMenuModalVisible(true)
      return;
    }
    if (location.pathname.match(/\/24/)) {
      navigate('/reservez/31-12-2023')
      return;
    }
    if (location.pathname.match(/\/valentin/i)) {
      navigate('/reservez/14-02-2025')
      return;
    }
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
          {/*<OfferBanner*/}
          {/*    text={'Les réservations pour la St. Valentin sont ouvertes. Le nombre de tables est limité.'}*/}
          {/*    actions={[*/}
          {/*      {label: 'Réservez', url: '/valentin', color: "primary"},*/}
          {/*      {label: 'Menu St. Valentin', url: '/resources/menu_valentin.pdf', color: "error", newTab: true}*/}
          {/*    ]}>*/}
          {/*  <div className={'bg-div'} style={{backgroundColor: 'lightsalmon'}} ></div>*/}
          {/*</OfferBanner>*/}
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
                {i === 0 ? (
                  <>
                    <li>
                      <LinkItem
                        label={lang === 'fr' ? "Réservez une table" : lang === 'es' ? "Reserve una mesa" : "Reserve a table"}
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
          <Modal
            className='menu-modal'
             open={menuModalVisible}
             closeButton
             fullScreen={false}
             onClose={() => setMenuModalVisible(false)}
             aria-labelledby="modal-title">
            <Modal.Header
              css={{ position: "relative" }}
              className="flex flex-row gap-1"
            >
              <Text h2 id={'modal-title'} size={24} css={{marginTop: '-20px !important'}}>Menu</Text>
            </Modal.Header>
            <Modal.Body style={{height: '80vh', padding: 0}}>
              <ul>
                <li>
                  <LinkItem
                    label={"Français"}
                    analyticsId={'french_client'}
                    onClick={() => {
                      setLang('fr');
                      setMenuModalVisible(false)
                    }}
                  />
                </li>
                <li>
                  <LinkItem
                    label={"English"}
                    analyticsId={'english_client'}
                    onClick={() => {
                      setLang('en');
                      setMenuModalVisible(false)
                    }}
                  />
                </li>
                <li>
                  <LinkItem
                    label={"Español"}
                    analyticsId={'spanish_client'}
                    onClick={() => {
                      setLang('es');
                      setMenuModalVisible(false)
                    }}
                  />
                </li>
              </ul>
            </Modal.Body>
          </Modal>
      </div>
    </NextUIProvider>
  );
}

export default App;
