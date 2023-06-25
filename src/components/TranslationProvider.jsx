/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo } from "react";
import i18n from "./../helpers/i18n";
import { useLocation } from "react-router-dom";

const translationContext = createContext();

const TranslationProvider = ({ children }) => {
  const { pathname } = useLocation();

  const isEnglish = useMemo(() => {
    return pathname.includes("/en");
  }, [pathname]);

  return (
    <translationContext.Provider value={{ isEnglish: isEnglish }}>
      {children}
    </translationContext.Provider>
  );
};

export const useTranslation = () => {
  const { isEnglish } = useContext(translationContext);

  const t = (translation_id) => {
    const translation = i18n.resources[isEnglish ? "en" : "id"]["translation"];

    return translation[translation_id] ?? "";
  };

  return { t };
};

export default TranslationProvider;
