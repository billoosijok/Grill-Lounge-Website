import {createContext, useContext, useMemo} from "react";
import {useParams, useNavigate, useLocation} from "react-router-dom";

export type SupportedLanguages = 'fr'|'en'|'es';

interface LanguageContextProps {
  lang: SupportedLanguages;
  setLang: (lang: SupportedLanguages) => void
}

const LanguageContext = createContext<LanguageContextProps|undefined>(undefined);

export const useLanguage = () => {
  const langContext = useContext(LanguageContext);

  if (!langContext) throw new Error("useLanguage must be used within a LanguageProvider");

  return langContext;
}

export const LanguageProvider = ({children}: {children: React.ReactNode}) => {
  const { lang: urlLang } = useParams<{lang: string}>();
  const navigate = useNavigate();
  const location = useLocation();

  const lang = (['fr', 'en', 'es'].includes(urlLang || '') ? urlLang : 'fr') as SupportedLanguages;

  const setLang = (newLang: SupportedLanguages) => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    // If the first part is a language, replace it
    if (['fr', 'en', 'es'].includes(pathParts[0])) {
      pathParts[0] = newLang;
    } else {
      pathParts.unshift(newLang);
    }
    navigate('/' + pathParts.join('/') + location.search + location.hash);
  };

  const value = useMemo(() => ({
    lang, setLang
  }), [lang, location.pathname, location.search, location.hash, navigate]);

  return <LanguageContext.Provider value={value}>
          {children}
        </LanguageContext.Provider>
}