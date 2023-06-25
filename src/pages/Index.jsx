import { Link, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18n from "../helpers/i18n";

const Index = () => {
  const { pathname } = useLocation();

  const isEnglish = pathname.includes("/en");
  const hrefPrivacyAndPolicy = isEnglish ? "/en/privacy-and-policy" : "/privacy-and-policy";

  useEffect(() => {
    if (isEnglish) {
      i18n.changeLanguage("en");
    }
  }, [isEnglish]);

  const { t } = useTranslation();

  return (
    <div className="bg-center h-screen flex text-center p-5 text-white flex-col items-center justify-center bg-[url('/background.jpg')]">
      <div className="absolute right-5 top-5 left-5">
        <Link to="/">
          <Logo className="md:mx-auto" />
        </Link>
      </div>

      <div className="flex flex-col gap-1 mb-12 max-w-[800px] mx-auto">
        <h1 className="text-[30px] md:text-[64px] font-bold leading-tight">{t("index_title")}</h1>

        <h2 className="font-light md:text-[24px]">{t("index_subtitle")}</h2>

        <p className="font-bold md:text-[24px]">#MakE-SIMpler Make Easier</p>
      </div>

      <div className="flex flex-wrap justify-center w-full gap-6 mb-6">
        <img src="/button_android.png" className="max-w-[212px] h-[48px] md:h-[64px]" />
        <img src="/button_apple.png" className="max-w-[212px] h-[48px] md:h-[64px]" />
      </div>

      <Link
        to={hrefPrivacyAndPolicy}
        className="w-full px-4 py-3 border-2 border-[#36D1DC] max-w-[337px] rounded-full"
      >
        {t("button_text_privacy")}
      </Link>
    </div>
  );
};

export default Index;
