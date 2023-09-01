import phonesMockup from "@assets/phones-mockup.webp";
import { Button } from "@src/components/Buttons/Button";

export const ReportsBenefitSection = () => {
  return (
    <section className="bg-gray-04">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center px-8">
        <img
          src={phonesMockup}
          alt="Celular mostrando várias telas com benefícios de se tornar um cliente Toro."
          className="
            w-2/3 lg:w-full
            -ml-28  lg:-ml-32 
            
          "
        />

        <article >
          <h3 className="text-brand-primary-darkest text-[2rem] leading-[130%] mb-6">
            Acesse{" "}
            <strong>
              {" "}
              relatórios exclusivos e recomendações de investimentos{" "}
            </strong>{" "}
            de <strong>forma gratuita</strong>
          </h3>

          <p className="text-gray-07 leading-[150%] text-lg mb-10">
            Tome decisões informadas, diversifique sua carteira e maximize seu
            potencial de ganho com os materiais exclusivos produzidos pela nossa
            equipe de Análise.
          </p>

          <Button className="w-80 px-8 py-3">Abra sua conta grátis</Button>
        </article>
      </div>
    </section>
  );
};
