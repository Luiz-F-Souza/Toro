# Buttons

## LinkButton

O Componente LinkButton por baixo dos panos é um `Link` do `react-router-dom` com algumas estilizações padrões que podem ser sobrescritas conforme necessidade.

## USO

```tsx
        <LinkButton to="/campanha/aprenda">
          Abra sua conta
        </LinkButton>
```

Basta chamar o componente com uma `children: string` e com o `to: string`.

Por padrão, ao chamar o componente sem passar o parâmetro `variant` o componente assumirá a forma `solid`.

- `variant?: "solid" | "outlined"`

Caso queira sobrescrever estilos basta passar o `className` normalmente.