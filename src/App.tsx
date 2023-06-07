import React, {useCallback, useEffect, useState} from 'react';
import {createTheme, NextUIProvider} from '@nextui-org/react';
import data from './data.json'
import {LinkItem} from "./components/LinkItem";
import {Icon} from "./components/Icon";
import {LangPicker} from "./components/LangPicker";
import {useLocation} from "react-router-dom";
import {OfferBanner} from "./components/OfferBanner";
import {theme} from "./utils/theme";


function App() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const location = useLocation();

  const potentiallyLocalizedProp = useCallback((val) => {
    if (typeof val !== 'object') return val;

    return val[lang] || 'untranslated'
  }, [lang]);

  useEffect(() => {
    const element = document.getElementsByTagName('html');
    element.item(0)?.setAttribute('lang', lang)
  }, [lang])

  useEffect(() => {
    if (location.pathname.match(/mere/i)) {
      global.gtag('event', 'mere')
      window.location.href = "https://grilllounge.fr/resources/menu_mere.pdf"
    }
  }, []);

  return (
    <NextUIProvider theme={theme}>
      <div className={'root-container'} style={{paddingBottom: 100}}>
        <header className="animate__animated animate__faster animate__fadeIn">
          <img className="logo " alt="Grill Lounge Logo" src={require('./img/logo.png')} width="400"/>
          <h3>Steak &nbsp;·&nbsp; Burger &nbsp;·&nbsp; Pasta &nbsp;·&nbsp; Brunch</h3>
          <h5>Narbonne,&nbsp; France</h5>
        </header>
        <main className="animate__animated animate__fadeIn">
          <ul className="social-media">
            {data.icons.map(({link, icon, analyticsId}) => (
              <li><a href={link} onClick={() => global.gtag('event', analyticsId)}><Icon icon={icon as any}/></a></li>
            ))}
            <li style={{paddingTop: 6}}>
              <LangPicker lang={lang} onChange={setLang}/>
            </li>
          </ul>
          <ul className="links">
            {data.links.map(({label, url, ...item}) =>
              <li>
                <LinkItem
                  label={potentiallyLocalizedProp(label)}
                  url={potentiallyLocalizedProp(url)} {...item}
                />
              </li>
            )}
          </ul>
        </main>
      </div>
    </NextUIProvider>

  );
}

export default App;
