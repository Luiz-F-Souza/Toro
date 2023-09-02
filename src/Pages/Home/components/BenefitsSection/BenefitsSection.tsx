import coverMan2x from "@assets/cover-man@2x.webp";
import coverMan from "@assets/cover-man.webp";
import papperIcon from "@assets/icons/papper-icon.svg";
import buildingsIcon from "@assets/icons/buildings-icon.svg";
import globeIcon from "@assets/icons/globe-icon.svg";
import scrollIcon from "@assets/icons/scroll-icon.svg";
import { Button } from "@src/components/Buttons/Button";
import { BenefitCard } from "./components/BenefitCard/BenefitCard";

export const BenefitsSection = () => {
  return (
    <article className="bg-gray-light pb-10 lg:pb-[4.81rem] px-6">
      <div className="max-w-screen-lg mx-auto">
        <h3
          className="
            max-w-[57.375rem] 
            text-brand-primary-darkest 
            text-center leading-[2.6rem]
            text-[1.75rem] lg:text-[2rem] 
            mx-auto  
            pt-10 lg:pt-20 
            pb-10
          "
        >
          Conheça os <strong>benefícios dos diversos ativos de Bolsa</strong> e{" "}
          <strong>alavanque seus resultados no longo prazo</strong>
        </h3>

        <div 
          className="
            relative 
            grid 
            sm:gap-8 lg:gap-0
            sm:grid-cols-2 lg:grid-cols-3 
            justify-center 
          "
        >
          <div
            className="
              flex flex-wrap
              gap-8 
              lg:mt-10 
              lg:flex-col
              order-2 lg:order-none 
              justify-center
            "
          >
            <BenefitCard
              iconSrc={papperIcon}
              title="Ações"
              description="Potencial de crescimento e valorização expressiva no longo 
              prazo, assim como oportunidade de receber dividendos periódicos
              das empresas."
            />

            <BenefitCard
              iconSrc={buildingsIcon}
              title="FIIs"
              description="Ganhe renda passiva através de alugueis mensais, enquanto
              diversifica seus investimentos em imóveis sem a necessidade de
              comprar um imóvel físico."
            />
          </div>

          
          <div 
            className="
              order-3
              sm:col-span-2 lg:col-span-1
              flex lg:hidden 
              justify-center 
              my-10
            "
          >
            <Button className="w-full lg:w-80 px-8 py-3" >
              Abra sua conta grátis
            </Button>
          </div>
          <picture 
            className="
              z-10 
              order-last lg:order-none
              sm:col-span-2 lg:col-span-1
              mx-auto
            "
          >
            <source media="(min-width:960px)" srcSet={coverMan2x} />
            <img
              src={coverMan}
              alt="Foto do Evaristo Costa"
              loading="lazy"
              className="max-w-[275px] md:max-w-none w-auto"
              width={385}
              height={610}
            />
          </picture>
          

          <div
            className="
              absolute bottom-0 left-1/2
              -translate-x-1/2
              rounded-[0.478rem]
              w-[calc(100vw-48px)] h-[20rem]
              lg:w-[32.02675rem] lg:h-[28.63719rem] 
              bg-gray-05 "
          />

          <div
            className="
              flex flex-wrap 
              gap-8
              mt-8 sm:mt-0 lg:mt-10 
              lg:flex-col
              order-2 lg:order-none 
              justify-center
            "
          >
            <BenefitCard
              iconSrc={globeIcon}
              title="BDRs"
              description="Acesso a empresas globais sem precisar investir em ações no
              exterior, proporcionando ampla diversificação geográfica e
              setorial."
            />

            <BenefitCard
              iconSrc={scrollIcon}
              title="ETFs"
              description="Exposição simplificada a diferentes setores e índices de
              mercado, possibilitando diversificação instantânea em diversos
              ativos."
            />
          </div>
        </div>

        <div className="hidden lg:flex justify-center mt-10">
          <Button className="w-full lg:w-80 px-8 py-3">
            Abra sua conta grátis
          </Button>
        </div>
      </div>
    </article>
  );
};
