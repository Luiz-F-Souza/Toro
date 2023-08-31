
import { Button } from "@src/components/Buttons/Button";
import santanderLogo from "@assets/santander-logo.svg";
import heroImage from "@assets/hero-image.webp";

export const Hero = () => {

  return(
    <header className="flex items-center max-w-screen-lg mx-auto">
    <section className="w-1/2">
      <h3>
        Aumente seu potencial de ganho com quem vence na Bolsa há anos
      </h3>

      <ul>
        <li>
          <p>Assessoria Exclusiva gratuita.</p>
        </li>
        <li>
          <p>Recomendações de investimentos por experts.</p>
        </li>
        <li>
          <p>Corretagem Zero.</p>
        </li>
      </ul>

      <Button className="w-[21.75rem]">Abra sua conta grátis</Button>

      <div>
        <p>Uma empresa</p>
        <img src={santanderLogo} alt="Logo da Santander" loading="lazy" />
      </div>
    </section>

    <section className="w-1/2">
      <img
        src={heroImage}
        className="w-full"
        loading="eager"
        alt="Gráfico mostrando a rentabilidade acumulada comparada entre uma carteira Toro e o Ibovespa. Comparação feita entre 2020 e 2023. nota de rodapé: Esse é um gráfico ilustrativo e não representa uma promessa de ganhos. Rentabilidade passada não é garantia de rentabilidade futura."
      />
    </section>
  </header>
  )
}