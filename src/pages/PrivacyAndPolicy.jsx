import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { useTranslation } from "../components/TranslationProvider";
import LanguageSwitcher from "../components/LanguageSwitcher";

const PrivacyAndPolicy = () => {
  const { t, isIndonesia } = useTranslation();

  const hrefHome = isIndonesia ? "/id" : "/";

  return (
    <div className="p-5 py-0 text-[#53565A]">
      <header className="h-[56px] border-b md:border-b-0 border-black/10 mb-8 flex items-center sticky top-0 bg-white left-0 right-0 -mx-5 px-5 justify-between">
        <Link to={hrefHome} className="md:mx-auto">
          <Logo className="text-black" />
        </Link>

        <LanguageSwitcher />
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
