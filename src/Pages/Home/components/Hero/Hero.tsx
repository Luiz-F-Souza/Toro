import { Button } from "@src/components/Buttons/Button";
import santanderLogo from "@assets/santander-logo.svg";
import heroImage from "@assets/hero-image.webp";

export const Hero = () => {
  return (
    <header className="md:flex items-center gap-10 max-w-screen-lg mx-auto my-20 px-8 lg:px-0">
      <section className="md:max-w-[460px]">
        <h3 className="text-brand-primary-darkest text-[2.5rem] leading-[3.25rem] font-bold mb-6">
          Aumente seu potencial de ganho com quem vence na Bolsa há anos
        </h3>

        <ul className="text-gray-07 list-disc list-inside mb-10 marker:mr-2">
          <li className="">
            <p className="inline-block text-lg leading-[1.6875rem] font-normal font-feature-cling-liga-off opacity-80">
              Assessoria Exclusiva gratuita.
            </p>
          </li>
          <li>
            <p className="inline-block text-lg leading-[1.6875rem] font-normal font-feature-cling-liga-off opacity-80">
              Recomendações de investimentos por experts.
            </p>
          </li>
          <li>
            <p className="inline-block text-lg leading-[1.6875rem] font-normal font-feature-cling-liga-off opacity-80">
              Corretagem Zero.
            </p>
          </li>
        </ul>

        <Button className="w-full md:w-[21.75rem] mb-6">Abra sua conta grátis</Button>

        <div className="flex gap-4 items-center">
          <p className="text-xs font-normal leading-4 text-gray-07">
            Uma empresa
          </p>
          <img src={santanderLogo} alt="Logo da Santander" loading="lazy" />
        </div>
      </section>

      <section className="">
        <img
          src={heroImage}
          className="w-full lg:w-[39.5625rem] lg:max-w-none"
          loading="eager"
          alt="Gráfico mostrando a rentabilidade acumulada comparada entre uma carteira Toro e o Ibovespa. Comparação feita entre 2020 e 2023. nota de rodapé: Esse é um gráfico ilustrativo e não representa uma promessa de ganhos. Rentabilidade passada não é garantia de rentabilidade futura."
        />
      </section>
    </header>
  );
};
