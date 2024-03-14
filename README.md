# PWEB 13 - Livraria

Essa atividade tem duas partes, a livraria e o site de login

- [Repositório Livraria](https://github.com/iansantosos/pweb13-livraria)
- ~~[Repositório do Site de Login](https://github.com/iansantosos/pweb13-login)~~

## Atividade

**Objetivo:** Implementar uma busca de livros.

Vamos criar um exemplo real que demonstre a comunicação cliente-servidor usando URL params e query params em uma aplicação Node.js com Express.

Queremos criar um endpoint onde os clientes possam pesquisar por livros. O cliente pode especificar critérios de pesquisa nos URL params ou query params.

### Requisitos

✅ 1. Implemente um buscador de livros. O Sistema tem uma tela com dois campos de busca. A busca pelo título, busca pelo ano.

✅ 2. Ao lado de cada campo, deve ter um checkbox para o usuário selecionar o tipo de busca que deseja fazer.

✅ 3. Embaixo dos campos, um botão de Buscar.

🟦 4. A resposta com os livros deve aparecer em uma listagem (usando DIV), na mesma página, abaixo dos campos. Veja que as buscas podem retornar, nenhum, um ou vários livros.

✅ 5. No caso de não retornar nenhum livro uma mensagem deve informar.

### Instruções

✅ 1. Crie uma aplicação Node.js com Express e EJS.

✅ 2. Crie um array de objetos para representar o BD de livros. Os campos obrigatórios são ID, título, autor e ano.

✅ 4. Caso o usuário faça a busca pelo título, use query param.

✅ 5. Caso o usuário faça a busca pelo ano, use URL param.

## O que falta implementar?

Mostrar as informações através de uma DIV e não uma tabela: Requisito 4
