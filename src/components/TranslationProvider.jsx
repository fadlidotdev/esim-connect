/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo } from "react";
import i18n from "./../helpers/i18n";
import { useLocation } from "react-router-dom";

const translationContext = createContext();

const TranslationProvider = ({ children }) => {
  const { pathname } = useLocation();

  const isIndonesia = useMemo(() => {
    return pathname.includes("/id");
  }, [pathname]);

  return (
    <translationContext.Provider value={{ isIndonesia: isIndonesia }}>
      {children}
    </translationContext.Provider>
  );
};

export const useTranslation = () => {
  const { isIndonesia } = useContext(translationContext);

  const t = (translation_id) => {
    const translation = i18n.resources[isIndonesia ? "id" : "en"]["translation"];

    return translation[translation_id] ?? "";
  };

  return { t, isIndonesia };
};

export default TranslationProvider;
