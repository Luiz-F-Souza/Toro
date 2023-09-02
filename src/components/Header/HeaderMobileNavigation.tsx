import { useState } from "react";
import menuIcon from "../../assets/icons/menu-icon.svg";
import userIcon from "../../assets/icons/user-account.svg";
import closeMenu from '../../assets/icons/close-menu.svg'
import { Button } from "../Buttons/Button";
import { BodyOverlay } from "../BodyOverlay/BodyOverlay";

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
        gap-4 items-center
        "
      >
        <button className="hidden md:flex gap-3 items-center">
          <img src={userIcon} alt="" />
          <p className="text-sm text-gray-08 font-normal">Fazer login</p>
        </button>

        <Button variant="outlined" className="hidden sm:block">
          Abra sua conta
        </Button>

        <button className="cursor-pointer" onClick={handleToggleMenu}>
          <img src={menuIcon} alt="Ícone de abrir o menu" width={30} height={25} />
        </button>

        <aside
          className={`
          fixed
          top-0 bottom-0 ${isOpen ? "right-0" : "right-[-150%]"}
          z-50
          bg-neutral-lightest
          w-[70vw]
          transition-[right]
          duration-200
          px-[10vw] py-[7vh]
          overflow-auto
          `}
        >
          <header className="flex justify-end">
            <button onClick={handleToggleMenu}>
              <img src={closeMenu} alt="botão para fechar o menu" />
            </button>
          </header>
          <nav className="mb-5">
            <h2 className="text-gray-07 p-3">INVESTIMENTOS</h2>
            <ul className="ml-7">
              <li>
                <p className="text-sm text-brand-primary-dark leading-5 font-medium">Bolsa de valores</p>
              </li>
              <li className="pt-2">
                <p className="text-sm text-brand-primary-dark leading-5 font-medium">Renda fixa e tesouro</p>
              </li>
              <li className="pt-2">
                <p className="text-sm text-brand-primary-dark leading-5 font-medium">Fundos de investimentos</p>
              </li>
              <li className="pt-2">
                <p className="text-sm text-brand-primary-dark leading-5 font-medium">Simulador de investimentos</p>
              </li>
            </ul>
          </nav>

          <nav className="mb-5">
            <h2 className="text-gray-07 p-3" >TRADING</h2>
            <ul className="ml-7">
              <li>
                <p className="text-sm text-brand-primary-dark leading-5 font-medium">Trading na touro</p>
              </li>
              <li className="pt-2">
                <p className="text-sm text-brand-primary-dark leading-5 font-medium">Plataformas de Trading</p>
              </li>
            </ul>
          </nav>

          <nav>
            <h2 className="text-gray-07 p-3">APRENDA</h2>
            <ul className="ml-7">
              <li>
                <p className="text-sm text-brand-primary-dark leading-5 font-medium">Cursos</p>
              </li>
              <li className="pt-2">
                <p className="text-sm text-brand-primary-dark leading-5 font-medium">Estratégias</p>
              </li>
              <li className="pt-2">
                <p className="text-sm text-brand-primary-dark leading-5 font-medium">Conteúdos</p>
              </li>
            </ul>
          </nav>

          <Button className="w-full mt-[5vh]">Cadastre-se</Button>
          <Button variant="outlined" className="w-full mt-[2vh]">Entrar</Button>
        </aside>
      </section>

      {isOpen && <BodyOverlay handleIsModalOpen={setIsOpen} />}
    </>
  );
};
