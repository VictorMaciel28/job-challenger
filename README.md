# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Descrição do desafio:

## Objetivos:

- Desenvolver um “Carrinho de compras” usando uma API.
- Listar os produtos, exibir o total da compra e exibir uma mensagem informando se o pedido possui frete grátis.

## **Prazo:**

- 1 dia corrido.

## **Requisitos mínimos:**

- Listar os produtos provenientes da API.
- Os produtos devem ter imagem, nome e preço.
- Exibir ao fim da lista o valor total de todos os produtos.
- Exibir o texto de frete grátis dependendo do valor do carrinho.
- O texto de frete grátis deverá aparecer apenas se o valor for acima de **R$ 10,00.**
- Seguir o layout.
- Usar Flex-Box CSS.
- Você poderá usar Vanilla JS, React, Vue ou outro framework. Sinta-se a vontade para usar a ferramenta que preferir.
- Enviar o link do teste no github.

## **Notas do Desafiando:**

Desafio simples, porém nos dá a oportunidade de mostrar como mesmo as fucnionalidades mais cotidianas podem ser bem feitas com esforço e empenho.

O arquivo com o JSON foi hospedado em um site apropriado que fornece uma API para consumo deste serviço. Sendo assim, o projeto não possui linguagem no backend, então pode ser completamente vislumbrado apenas pelo `npm install` e posteriormente com o `ng serve`

O retorno da API trazia price e sellingPrice, ambos em números inteiros, se somados não podem dar um valor menor que 10 reais, portanto dividi por 100 para mostrar a funcionalidade.
