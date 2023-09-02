import userIcon from "../../assets/icons/user-account.svg";
import { Button } from "../Buttons/Button";
import { Link } from "react-router-dom";

export const HeaderDesktopNavigation = () => {
  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex gap-8 xl:gap-10">
          <li>
            <Link to="/bolsa" className="text-gray-07">
              Bolsa
            </Link>
          </li>
          <li>
            <p className="text-gray-07">Renda Fixa</p>
          </li>
          <li>
            <p className="text-gray-07">Fundos</p>
          </li>
          <li>
            <p className="text-gray-07">Plataformas de Trading </p>
          </li>
          <li>
            <p className="text-gray-07">Aprenda</p>
          </li>
          <li>
            <p className="text-gray-07">Simulador</p>
          </li>
        </ul>
      </nav>

      <section className="hidden lg:flex gap-4 items-center">
        <button className="flex gap-3 items-center">
          <img src={userIcon} alt="" />
          <p className="text-sm text-gray-08 font-normal">Fazer login</p>
        </button>

        <Button variant="outlined" className="h-auto">
          Abra sua conta
        </Button>
      </section>
    </>
  );
};
