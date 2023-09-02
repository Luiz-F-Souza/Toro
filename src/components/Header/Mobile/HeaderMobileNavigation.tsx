import { useState } from "react";
import { LinkButton } from "@components/Buttons/LinkButton";
import { BodyOverlay } from "@components/BodyOverlay/BodyOverlay";
import { Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";
import menuIcon from "@assets/icons/menu-icon.svg";
import userIcon from "@assets/icons/user-account.svg";

export const HeaderMobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <section
        className="
          flex lg:hidden
          gap-7 sm:gap-4 
          items-center
        "
      >
        <Link to="/entrar" className="hidden md:flex gap-3 items-center">
          <img src={userIcon} width={25} height={25} alt="" loading="lazy" />
          <p className="text-sm text-gray-08 font-normal">Fazer login</p>
        </Link>

        <LinkButton
          to="/campanha/aprenda"
          variant="outlined"
          className="hidden smaller:block w-[7.9375rem] sm:w-[9.375rem]"
        >
          Abra sua conta
        </LinkButton>

        <button
          className="cursor-pointer"
          aria-label="Open Menu"
          onClick={handleToggleMenu}
        >
          <img
            src={menuIcon}
            alt="Ícone de abrir o menu"
            width={30}
            height={25}
            loading="lazy"
          />
        </button>

        <MobileMenu handleToggleMenu={handleToggleMenu} isOpen={isOpen} />
      </section>

      {isOpen && <BodyOverlay handleIsModalOpen={setIsOpen} />}
    </>
  );
};
