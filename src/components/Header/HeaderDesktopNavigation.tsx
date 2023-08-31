import userIcon from "../../assets/icons/user-account.svg";
import { Button } from "../Buttons/Button";

export const HeaderDesktopNavigation = () => {
  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex gap-10">
          <li>
            <p className="text-gray-07">Bolsa</p>
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

        {/* <button
          className="
          w-[9.375rem] 
          border-brand-primary border-1 
          text-brand-primary 
          rounded 
          px-4 py-3
          hover:bg-brand-primary-dark hover:text-neutral-lightest
          active:bg-brand-primary
          transition-colors duration-200
          "
        >
          <p className="">Abra sua conta</p>
        </button> */}

        <Button variant="outlined">Abra sua conta</Button>
      </section>
    </>
  );
};
