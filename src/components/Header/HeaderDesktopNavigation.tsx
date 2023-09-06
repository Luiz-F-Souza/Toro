import userIcon from "@assets/icons/user-account.svg";
import { LinkButton } from "../Buttons/LinkButton";
import { Link } from "react-router-dom";

export const HeaderDesktopNavigation = () => {
  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex gap-8 xl:gap-10">
          <li>
            <Link 
              to="/bolsa" 
              className="text-gray-07 hover:text-brand-primary"
            >
              Bolsa
            </Link>
          </li>
          <li>
            <Link
              to="/renda-fixa"
              className="text-gray-07 hover:text-brand-primary"
            >
              Renda Fixa
            </Link>
          </li>
          <li>
            <Link
              to="/fundos"
              className="text-gray-07 hover:text-brand-primary"
            >
              Fundos
            </Link>
          </li>
          <li>
            <Link
              to="/plataformas"
              className="text-gray-07 hover:text-brand-primary"
            >
              Plataformas de Trading
            </Link>
          </li>
          <li>
            <Link
              to="/aprenda"
              className="
                text-gray-07 hover:text-brand-primary
              "
            >
              Aprenda
            </Link>
          </li>
          <li>
            <Link
              to="/simulador"
              className="text-gray-07 hover:text-brand-primary"
            >
              Simulador
            </Link>
          </li>
        </ul>
      </nav>

      <section className="hidden lg:flex gap-4 items-center">
        <Link to="/entrar" className="flex gap-3 items-center">
          <img src={userIcon} width={25} height={25} alt="" loading="lazy" />
          <p className="text-sm text-gray-08 font-normal">Fazer login</p>
        </Link>

        <LinkButton to="/entrar" variant="outlined" >
          Abra sua conta
        </LinkButton>
      </section>
    </>
  );
};
