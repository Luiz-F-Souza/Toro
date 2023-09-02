import { createPortal } from "react-dom";
import closeMenu from "@assets/icons/close-menu.svg";
import { LinkButton } from "@components/Buttons/LinkButton";
import { Link } from "react-router-dom";

interface MobileMenuProp {
  handleToggleMenu: () => void;
  isOpen: boolean;
}
export const MobileMenu: React.FC<MobileMenuProp> = ({
  handleToggleMenu,
  isOpen,
}) => {
  return (
    <>
      {createPortal(
        <section
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
            <button 
              aria-label="Close" 
              onClick={handleToggleMenu}
              className="bg-gray-04 p-2 rounded-full"
              >
              <img
                src={closeMenu}
                width={25}
                height={25}
                alt="botão para fechar o menu"
              />
            </button>
          </header>
          <nav className="mb-5" title="investimentos">
            <h2 className="text-gray-07 p-3">INVESTIMENTOS</h2>
            <ul className="ml-7">
              <li>
                <Link
                  to="/bolsa"
                  className="
                block
                p-1 pl-0  
                text-sm text-brand-primary-dark 
                leading-5 font-medium
              "
                >
                  Bolsa de valores
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/renda-fixa"
                  className="
                  block
                  p-1 pl-0  
                  text-sm text-brand-primary-dark 
                  leading-5 font-medium
                "
                >
                  Renda fixa e tesouro
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/fundos"
                  className="
                  block
                  p-1 pl-0  
                  text-sm text-brand-primary-dark 
                  leading-5 font-medium
                "
                >
                  Fundos de investimentos
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/simulador"
                  className="
                  block
                  p-1 pl-0  
                  text-sm text-brand-primary-dark 
                  leading-5 font-medium
                "
                >
                  Simulador de investimentos
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="mb-5" title="trading">
            <h2 className="text-gray-07 p-3">TRADING</h2>
            <ul className="ml-7">
              <li>
                <Link
                  to="/trader"
                  className="
                  block
                  p-1 pl-0  
                  text-sm text-brand-primary-dark 
                  leading-5 font-medium
                "
                >
                  Trading na touro
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/plataformas"
                  className="
                  block
                  p-1 pl-0  
                  text-sm text-brand-primary-dark 
                  leading-5 font-medium
                "
                >
                  Plataformas de Trading
                </Link>
              </li>
            </ul>
          </nav>

          <nav title="aprenda">
            <h2 className="text-gray-07 p-3">APRENDA</h2>
            <ul className="ml-7">
              <li>
                <Link
                  to="/aprenda"
                  className="
                  block
                  p-1 pl-0  
                  text-sm text-brand-primary-dark 
                  leading-5 font-medium
                "
                >
                  Cursos
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/estrategias"
                  className="
                  block
                  p-1 pl-0  
                  text-sm text-brand-primary-dark 
                  leading-5 font-medium
                "
                >
                  Estratégias
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/aprenda"
                  className="
                  block
                  p-1 pl-0
                  text-sm text-brand-primary-dark 
                  leading-5 font-medium
                "
                >
                  Conteúdos
                </Link>
              </li>
            </ul>
          </nav>

          <LinkButton to="/campanha/aprenda" className="w-full mt-[5vh]">
            Cadastre-se
          </LinkButton>
          <LinkButton
            to="/entrar"
            variant="outlined"
            className="w-full mt-[2vh]"
          >
            Entrar
          </LinkButton>
        </section>,
        document.body
      )}
    </>
  );
};
