import { Link, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import { useTranslation } from "../components/TranslationProvider";

const PrivacyAndPolicy = () => {
  const { pathname } = useLocation();

  const { t } = useTranslation();

  const isEnglish = pathname.includes("en");
  const hrefHome = isEnglish ? "/en" : "/";

  return (
    <div className="p-5 py-0 text-[#53565A]">
      <header className="h-[56px] border-b md:border-b-0 border-black/10 mb-8 flex items-center sticky top-0 bg-white left-0 right-0 -mx-5 px-5">
        <Link to={hrefHome} className="md:mx-auto">
          <Logo className="text-black" />
        </Link>
      </header>

      <div className="md:p-8 md:rounded-lg md:shadow-md md:max-w-[800px] md:mx-auto mb-8">
        <h1 className="text-xl font-bold mb-7">Privacy Policy</h1>

        <div dangerouslySetInnerHTML={{ __html: t("privacy_content") }} />
      </div>

      <footer className="h-[40px] flex items-center justify-center border-t text-sm border-black/10 -mx-5 px-5">
        <p>COPYRIGHT © 2023 ESIM CONNECT ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default PrivacyAndPolicy;
