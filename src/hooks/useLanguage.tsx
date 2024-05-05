import {createContext, useContext, useMemo, useState} from "react";

type SupportedLanguages = 'fr'|'en'|'es';

interface LanguageContextProps {
  lang: SupportedLanguages;
  setLang: (lang: SupportedLanguages) => void
}

const LanguageContext = createContext<LanguageContextProps|undefined>(undefined);

export const useLanguage = () => {
  const langContext = useContext(LanguageContext);

  if (!langContext) throw new Error();

  const {lang, setLang} =langContext

  return useMemo(() => ({
    lang, setLang
  }),[lang, setLang])
}

export const LanguageProvider = ({children}) => {
  const [lang, setLang] = useState<SupportedLanguages>('fr');

  return <LanguageContext.Provider value={{ lang, setLang }}>
          {children}
        </LanguageContext.Provider>
}