import logo from "@assets/logo.svg";
// import userIcon from "../../assets/icons/user-account.svg";
import { HeaderDesktopNavigation } from "./HeaderDesktopNavigation";
import { HeaderMobileNavigation } from "./Mobile/HeaderMobileNavigation";

export const Header = () => {

  
  return (
    <header
      className="
      shadow-sm
      sticky
      top-0
      bg-neutral-lightest
      z-30
      "
    >
      <div
        className="
        max-w-[1500px]
        mx-auto
        px-6 md:px-10 
        py-[.875rem]
        gap-[.625rem]
        flex
        justify-between 
        items-center
        "
      >
        <div>
          <img
            src={logo}
            alt="Logotipo da Toro investimentos"
            className="w-24 sm:w-full"
            width={130}
            height={25}
          />
          <h1 className="sr-only">Toro Investimentos</h1>
        </div>
        <HeaderDesktopNavigation />
        <HeaderMobileNavigation />
      </div>
    </header>
  );
};
