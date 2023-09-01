import coverMan from "@assets/cover-man.webp";
import papperIcon from "@assets/icons/papper-icon.svg";
import buildingsIcon from "@assets/icons/buildings-icon.svg";
import globeIcon from "@assets/icons/globe-icon.svg";
import scrollIcon from "@assets/icons/scroll-icon.svg";
import { BenefitCardContainer } from "./components/BenefitCard/BenefitCardContainer";
import { BenefitIcon } from "./components/BenefitCard/BenefitIcon";
import { BenefitTitle } from "./components/BenefitCard/BenefitTitle";
import { BenefitDescription } from "./components/BenefitCard/BenefitDescription";
import { Button } from "@src/components/Buttons/Button";

export const BenefitsSection = () => {
  return (
    <section className="bg-gray-light pb-[4.81rem] px-8">
      <div className="max-w-screen-lg mx-auto">
        <h3 className="max-w-[57.375rem] text-brand-primary-darkest text-center mx-auto text-[2rem] leading-[2.6rem] pt-20 pb-10">
          Conheça os <strong>benefícios dos diversos ativos de Bolsa</strong> e{" "}
          <strong>alavanque seus resultados no longo prazo</strong>
        </h3>

        <div className="relative grid md:grid-cols-3 justify-center ">
          <div 
            className="
              flex flex-wrap 
              gap-8 mt-10 
              md:flex-col
              order-2 md:order-none 
              justify-center
            "
          >
            <BenefitCardContainer>
              <BenefitIcon src={papperIcon} />
              <BenefitTitle>Ações</BenefitTitle>
              <BenefitDescription>
                Potencial de crescimento e valorização expressiva no longo
                prazo, assim como oportunidade de receber dividendos periódicos
                das empresas.
              </BenefitDescription>
            </BenefitCardContainer>

            <BenefitCardContainer>
              <BenefitIcon src={buildingsIcon} />
              <BenefitTitle>FIIs</BenefitTitle>
              <BenefitDescription>
                Ganhe renda passiva através de alugueis mensais, enquanto
                diversifica seus investimentos em imóveis sem a necessidade de
                comprar um imóvel físico.
              </BenefitDescription>
            </BenefitCardContainer>
          </div>
          <img src={coverMan} alt="Foto do Evaristo Costa" loading="lazy" className="z-10 order-last md:order-none" />

          <div
            className="
              absolute bottom-0 left-1/2
              -translate-x-1/2
              rounded-[0.478rem]
              w-[32.02675rem] h-[28.63719rem] 
              bg-gray-05 "
          />

          <div 
            className="
              flex flex-wrap 
              gap-8 mt-10 
              md:flex-col
              order-2 md:order-none 
              justify-center
            "
          >
            <BenefitCardContainer>
              <BenefitIcon src={globeIcon} />

              <BenefitTitle>BDRs</BenefitTitle>
              <BenefitDescription>
                Acesso a empresas globais sem precisar investir em ações no
                exterior, proporcionando ampla diversificação geográfica e
                setorial.
              </BenefitDescription>
            </BenefitCardContainer>

            <BenefitCardContainer>
              <BenefitIcon src={scrollIcon} />

              <BenefitTitle>ETFs</BenefitTitle>
              <BenefitDescription>
                Exposição simplificada a diferentes setores e índices de
                mercado, possibilitando diversificação instantânea em diversos
                ativos.
              </BenefitDescription>
            </BenefitCardContainer>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Button className="w-80 px-8 py-3">Abra sua conta grátis</Button>
        </div>
      </div>
    </section>
  );
};
