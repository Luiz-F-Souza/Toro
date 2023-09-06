![Alt text](src/assets/logo.svg)

# Desafio prático Toro Investimentos

## Tecnologias utilizadas

### Core

- React (Vite)
  - React Router Dom
- TypeScript
- Tailwind
  - Tailwind Merge

### Testes

- Cypress
  - Cypress Axe
  - Cypress Audit - LightHouse

***

## Iniciando o projeto

- É necessário rodar o `npm install` para instalar todas as dependências do projeto.
  - Para que o comando funcione é obrigatório que o npm instalado seja __superior  ou igual__ a versão __8__ e o node __superior ou igual__ a versão __18__.
- Caso precise verificar a versão instalada no computador, basta digitar `npm -v`, para versão do npm e `node -v` para versão do node.

***

## Scripts

- Iniciar o servidor de desenvolvimento
  - `npm run dev`
- Criar build para produção
  - `npm run build`
  - Este comando criará a build dentro da pasta `dist`.
- Verificar existencia de erros de lint
  - `npm run lint`
- Rodar testes e2e
  - `npm run test`
  - É necessário que o chrome esteja instalado no computador, uma vez que o comando o utiliza.

***

## Componentes

- BenefitCard: [Ler mais](src/Pages/Home/components/BenefitsSection/components/BenefitCard/README.md)
- BodyOverlay: [Ler Mais](src/components/BodyOverlay/README.md)
- LinkButton: [Ler Mais](src/components/Buttons/README.md)