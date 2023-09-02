import { useLocation, Link } from "react-router-dom";

export const NotFoundPage = () => {
  const fullRoute = useLocation();

  const currentPath = fullRoute.pathname.split("/").splice(1).join(" > ");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-center">
        Poooxa, parece que a página {currentPath} ainda está sendo criada.
      </p>
      <p className="text-center">Tente novamente mais tarde 😉</p>

      <Link
        to="/"
        className="py-4 px-12 bg-brand-primary text-brand-lightest mt-8 rounded-md"
      >
        Voltar ao Site
      </Link>
    </div>
  );
};
