<h1 align="center">
  Rocketmovies API
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-e-execução">Instalação e Execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- JavaScript
- NodeJS
- Express
- SQlite
- Knex

## 💻 Projeto

Essa API foi desenvolvida para suprir de Back-end da aplicação [Rocketmovies](https://github.com/AlanRehfeldt/ExplorerStage09-Rocketmovies).

### ⚙️ Recursos da API

- [x] Cadastro e autenticação de usuários com geração de JwToken;
- [x] Autenticação de usuários com JwToken;
- [x] Permite usuário cadastrar-se e atualizar seu perfil (incluindo imagem de avatar);
- [x] Validação de e-mails no cadastro, não é possível cadastrar dois usuários com mesmo e-mail;
- [x] Para atualizar a senha, o usuário deve informar a senha antiga e a nova senha;
- [x] Permite o usuário cadastrar e deletar notas e tags;
- [x] Faz a listagem das notas com suas respectivas tags;
- [x] Permite o usuário fazer buscas por título de nota;

## 👨‍💻 Instalação e execução

1. Abra o terminal do seu computador. 
3. Faça um clone desse repositório rodando: <br> `git clone https://github.com/AlanRehfeldt/ExplorerStage09-Rocketmovies`;
4. Entre na pasta rodando pelo terminal: `cd ExplorerStage08-API_movies`;
5. Rode `npm i` para instalar as dependências do projeto;
6. Rode `npm run dev` para iniciar o servidor de desenvolvimento;
7. Rode `npm run migrate` para criar tabelas no banco de dados.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito por Alan Rehfeldt :wave: 
