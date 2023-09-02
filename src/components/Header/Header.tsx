import logo from "@assets/logo.svg";
// import userIcon from "../../assets/icons/user-account.svg";
import { HeaderDesktopNavigation } from "./HeaderDesktopNavigation";
import { HeaderMobileNavigation } from "./HeaderMobileNavigation";


export const Header = () => {
  return (
    <header
      className="
      shadow-sm
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
        justify-between items-center
        "
      >
        <div>
          <img
            src={logo}
            alt="Logotipo da Toro investimentos"
            className="w-full"
            width={130}
            height={25}
          />
        </div>

        <HeaderDesktopNavigation />
        <HeaderMobileNavigation />
      </div>
    </header>
  );
};
