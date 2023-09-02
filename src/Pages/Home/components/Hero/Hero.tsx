import { LinkButton } from "@src/components/Buttons/LinkButton";
import santanderLogo from "@assets/santander-logo.svg";
import heroImage from "@assets/hero-image.webp";
import heroImage2x from "@assets/hero-image@2x.webp";

export const Hero = () => {
  return (
    <article
      className="
        md:flex 
        items-center 
        gap-10 
        max-w-screen-lg 
        mx-auto 
        mt-10 md:my-20 
        px-8 lg:px-0
      "
    >
      <section className="md:max-w-[460px]">
        <h3
          className="
            text-brand-primary-darkest 
            text-[2rem] md:text-[2.5rem] 
            leading-8 md:leading-[3.25rem] 
            font-bold mb-6
            font-feature-cling-liga-off
          "
        >
          Aumente seu potencial de ganho com quem vence na Bolsa há anos
        </h3>

        <ul
          className="
            text-gray-07 
              list-none list-inside
              marker:whitespace-break-spaces marker:block
              mb-10 ml-0
            "
        >
          <li className="before:content-['•'] before:text-xl flex gap-2">
            <p
              className="
                inline-block 
                text-md md:text-lg 
                leading-[1.6875rem] 
                font-normal 
                font-feature-cling-liga-off 
                opacity-80
              "
            >
              Assessoria Exclusiva gratuita.
            </p>
          </li>
          <li className="before:content-['•'] before:text-xl flex gap-2">
            <p
              className="
                inline-block 
                text-md md:text-lg 
                leading-[1.6875rem] 
                font-normal 
                font-feature-cling-liga-off 
                opacity-80
              "
            >
              Recomendações de investimentos por experts.
            </p>
          </li>
          <li className="before:content-['•'] before:text-xl flex gap-2">
            <p
              className="
                inline-block 
                text-md md:text-lg 
                leading-[1.6875rem] 
                font-normal 
                font-feature-cling-liga-off 
                opacity-80
              "
            >
              Corretagem Zero.
            </p>
          </li>
        </ul>

        <LinkButton to="/campanha/aprenda" className="w-full md:w-[21.75rem] mb-6 ">
          Abra sua conta grátis
        </LinkButton>

        <div className="flex gap-4 items-center">
          <p className="text-xs font-normal leading-4 text-gray-07">
            Uma empresa
          </p>
          <img
            src={santanderLogo}
            alt="Logo da Santander"
            loading="lazy"
            width={100}
            height={20}
          />
        </div>
      </section>

      <section className="">
        <picture>
          <source media="(min-width:970px)" srcSet={heroImage2x} />
          <img
            src={heroImage}
            className="w-full lg:w-[39.5625rem] lg:max-w-none"
            loading="eager"
            alt="Gráfico mostrando a rentabilidade acumulada comparada entre uma carteira Toro e o Ibovespa. Comparação feita entre 2020 e 2023. nota de rodapé: Esse é um gráfico ilustrativo e não representa uma promessa de ganhos. Rentabilidade passada não é garantia de rentabilidade futura."
            width={633}
            height={430}
          />
        </picture>
      </section>
    </article>
  );
};
