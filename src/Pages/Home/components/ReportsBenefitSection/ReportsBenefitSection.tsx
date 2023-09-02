import phonesMockup2x from "@assets/phones-mockup@2x.webp";
import phonesMockup from "@assets/phones-mockup.webp";
import { LinkButton } from "@src/components/Buttons/LinkButton";

export const ReportsBenefitSection = () => {
  return (
    <section className="bg-gray-04">
      <div
        className="
          max-w-screen-lg 
          flex 
          flex-col md:flex-row 
          items-center 
          mx-auto
          px-6 
        "
      >
        <picture
          className="
            -ml-20 smaller:-ml-24 sm:ml-auto md:-ml-32 
            order-last md:order-first
            mx-auto 
          "
        >
          <source media="(min-width:960px)" srcSet={phonesMockup2x} />
          <img
            src={phonesMockup}
            alt="Celular mostrando várias telas com benefícios de se tornar um cliente Toro."
            className="sm:min-w-[22.5rem] md:min-w-[30rem]"
            width={666}
            height={560}
            loading="lazy"
          />
        </picture>
        <article className="py-10 md:py-0 max-w-[33.625rem]">
          <h3
            className="
              text-brand-primary-darkest 
              text-[1.73rem]  md:text-[2rem]
              text-center md:text-left 
              leading-[130%] 
              mb-6
            "
          >
            <span className="hidden md:inline">
              Acesse{" "}
              <strong>
                relatórios exclusivos e recomendações de investimentos
              </strong>{" "}
              de <strong>forma gratuita</strong>
            </span>

            <span className="inline md:hidden">
              Acesse <strong>relatórios exclusivos e recomendações</strong> de{" "}
              <strong>investimentos de forma gratuita</strong>
            </span>
          </h3>

          <p
            className="
              text-gray-07 
              md:text-lg
              text-center md:text-left 
              leading-[150%]  
              mb-10
            "
          >
            Tome decisões informadas, diversifique sua carteira e maximize seu
            potencial de ganho com os materiais exclusivos produzidos pela nossa
            equipe de Análise.
          </p>

          <LinkButton
            to="/campanha/aprenda"
            className="w-full md:w-80 px-8 py-3"
          >
            Abra sua conta grátis
          </LinkButton>
        </article>
      </div>
    </section>
  );
};
