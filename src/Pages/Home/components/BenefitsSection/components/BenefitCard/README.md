# BenefitCard

O BenefitCard é um conjunto de componentes que, unidos formam um Card com ícone, Título e descrição, juntamente com alguns estilos pré definidos

## USO SIMPLES

```tsx
              <BenefitCard
                iconSrc={papperIcon}
                title="Ações"
                description="Potencial de crescimento e valorização expressiva no longo 
                prazo, assim como oportunidade de receber dividendos periódicos
                das empresas."
              />
```

Obs: Desta maneira __não__ é possível alterar nenhum estilo e todas as propriedades listadas acima são __obrigatórias__
Obs²: papperIcon neste caso é uma imagem importada.

## USO FLEXÍVEL

Se necessita de mais flexibilidade como alterar o estilo de qualquer um dos sub componentes ou enviar mais itens dentro do card, siga o exemplo abaixo:

```tsx
            <BenefitCardContainer className="Estilo que deseja sobrepor">
              <BenefitIcon src={globeIcon} className="Estilo que deseja sobrepor" />

              <BenefitTitle className="Estilo que deseja sobrepor">BDRs</BenefitTitle>
              <BenefitDescription className="Estilo que deseja sobrepor">
                Acesso a empresas globais sem precisar investir em ações no
                exterior, proporcionando ampla diversificação geográfica e
                setorial.
              </BenefitDescription>

              <div>Elemento extra adicionado</div>
            </BenefitCardContainer>
```

Obs: globeIcon neste caso é uma imagem importada.
Obs²: Classes sobrepostas terão prioridade.

***

## REGRAS DE USO NO MODO FLEXÍVEL

- `BenefitCardContainer` Não há regras.
- `BenefitIcon` é obrigatório utilizar a propriedade src com um path para imagem / ícone em questão.
- `BenefitTitle` é obrigatório passar uma `children` do tipo `string`.
- `BenefitDescription` é obrigatório passar uma `children` do tipo `string`.
