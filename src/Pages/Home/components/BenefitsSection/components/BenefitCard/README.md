# BenefitCard

O BenefitCard é um conjunto de componentes que, unidos formam um Card com ícone, Título e descrição, juntamente com alguns estilos pré definidos

## USO SIMPLES

```tsx
            <BenefitCardContainer>
              <BenefitIcon src={globeIcon} />

              <BenefitTitle>BDRs</BenefitTitle>
              <BenefitDescription>
                Acesso a empresas globais sem precisar investir em ações no
                exterior, proporcionando ampla diversificação geográfica e
                setorial.
              </BenefitDescription>
            </BenefitCardContainer>
```

Obs: globeIcon neste caso é uma imagem importada.


***

## REGRAS DE USO

- `BenefitCardContainer` Não há regras.
- `BenefitIcon` é obrigatório utilizar a propriedade src com um path para imagem / ícone em questão.
- `BenefitTitle` é obrigatório passar uma `children` do tipo `string`.
- `BenefitDescription` é obrigatório passar uma `children` do tipo `string`.
