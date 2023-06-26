import { useEffect, useState } from "react";
import { useTranslation } from "./TranslationProvider";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const LanguageSwitcher = () => {
  const { isEnglish } = useTranslation();

  const history = useHistory();
  const { pathname } = useLocation();

  const activeClassName = "bg-gradient-to-r from-[#36D1DC] to-[#4EA1E2] font-bold";
  const inactiveClassName = "bg-black/75";

  const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    setSelectedLanguage(isEnglish ? "EN" : "ID");
  }, [isEnglish]);

  const toggleSelectedLanguage = () => {
    const isPrivacyPage = pathname.includes("privacy");
    setSelectedLanguage(selectedLanguage === "EN" ? "ID" : "EN");

    if (isPrivacyPage) {
      history.push(selectedLanguage === "EN" ? "/privacy" : "/en/privacy");
    } else {
      history.push(selectedLanguage === "EN" ? "/" : "/en");
    }
  };

  return (
    <label
      htmlFor="languageSwitcher"
      className="inline-flex items-center p-0.5 bg-gradient-to-r from-[#36D1DC] to-[#4EA1E2] cursor-pointer rounded-lg"
    >
      <input
        id="languageSwitcher"
        type="checkbox"
        className="hidden peer"
        value={selectedLanguage}
        onChange={toggleSelectedLanguage}
      />
      <span
        className={`px-3 py-1.5  text-white rounded-tl-lg rounded-bl-lg ${
          selectedLanguage === "EN" ? activeClassName : inactiveClassName
        }`}
      >
        EN
      </span>
      <span
        className={`px-3 py-1.5 text-white  rounded-tr-lg rounded-br-lg ${
          selectedLanguage === "ID" ? activeClassName : inactiveClassName
        }`}
      >
        ID
      </span>
    </label>
  );
};

export default LanguageSwitcher;
