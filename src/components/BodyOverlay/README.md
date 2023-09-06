# BodyOverlay

O BodyOverlay é um componente com uma camada de overlay para ser usada como fundo em situações que precisem de um (como o menus em mobile, modais, etc.).

Obs: este componente tem a posição `fixed` e `z-index = 40`. Bem como utiliza o `createPortal` para que consigamos garantir que ele irá sobrepor todos os elementos na tela.

## USO SIMPLES

```tsx
  {isOpen && <BodyOverlay  />}
```

OU Simplesmente

```tsx
 <BodyOverlay  />
```

Obs: Desta maneira estamos chamando o componente vinculado a um estado local `isOpen`.

## USO COM CONTROLE DE ESTADO

Se precisar fechar o modal que foi aberto basta passar o parâmetro `handleIsModalOpen` com o valor aceito sendo `(param: boolean) => void`:

```tsx
  {isOpen && <BodyOverlay handleIsModalOpen={setIsOpen} />}
```

Obs: Caso queira, é possível utilizar o componente sem o isOpen e o chamar dentro do próprio componente de modal.
