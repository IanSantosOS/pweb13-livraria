# PWEB 13 - Livraria

Essa atividade tem duas partes, a livraria e o site de login

- [Site Atual](https://pweb-livraria.azurewebsites.net)
- [Site Sem BCDD](https://pweb13-livraria.glitch.me)
- [Site Antigo](https://pweb13-livraria-old.glitch.me)

## Atividade 13.1

**Objetivo:** Implementar uma busca de livros.

Vamos criar um exemplo real que demonstre a comunicação cliente-servidor usando URL params e query params em uma aplicação Node.js com Express.

Queremos criar um endpoint onde os clientes possam pesquisar por livros. O cliente pode especificar critérios de pesquisa nos URL params ou query params.

### 13.1.1 Requisitos

✅ 1. Implemente um buscador de livros. O Sistema tem uma tela com dois campos de busca. A busca pelo título, busca pelo ano.

✅ 2. Ao lado de cada campo, deve ter um checkbox para o usuário selecionar o tipo de busca que deseja fazer.

✅ 3. Embaixo dos campos, um botão de Buscar.

✅ 4. A resposta com os livros deve aparecer em uma listagem (usando DIV), na mesma página, abaixo dos campos. Veja que as buscas podem retornar, nenhum, um ou vários livros.

✅ 5. No caso de não retornar nenhum livro uma mensagem deve informar.

### 13.1.2 Instruções

✅ 1. Crie uma aplicação Node.js com Express e EJS.

✅ 2. Crie um array de objetos para representar o BD de livros. Os campos obrigatórios são ID, título, autor e ano.

✅ 4. Caso o usuário faça a busca pelo título, use query param.

✅ 5. Caso o usuário faça a busca pelo ano, use URL param.

## Atividade 13.2

**Objetivo:** Implementar a tela de Login

### 13.2.1 Requisitos

#### Autenticação de Usuários

Vocẽ deve verificar as credenciais do usuário e depois criar um cookie e associar a uma sessão. Este cookie  será utilizado para manter o usuário autenticado. Um usuário não logado não pode ter acesso às outras páginas além do login.

#### Logout

Criar um logout que leve o usuário para a página de login e apague o cookie criado.

## Atividade 14

Altere a aplicação de gerenciamento de livros da Atividade 13, de forma que:

🟦 1. Utilize Banco de Dados

✅ 2. Fique uma arquitetura modularizada

Disponibilize a aplicação de forma que a mesma possa ser acessada pela internet. Utilize o [Microsoft Azure](https://azure.microsoft.com/), [Glitch](https://glitch.com/), ou outro ambiente da sua escolha. Atenção para a configuração do banco de dados.

> Obs. As aplicações devem ter as funcionalidades das atividades anteriores mais estes novos requisitos.
