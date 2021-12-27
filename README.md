## 💻 Projeto

<p align="center">MultiTest</p>
  <h4 align="center">Resumo</h4>
    API responsável por ler um txt, popular a base de dados e disponibilizar endpoints para consultas e manipulação dos dados cadastrados.
  <p>
  </p>

## ⚠️ Requirements

- [Yarn](https://yarnpkg.com/)
- [Node](https://nodejs.org/en/download/releases/)
- [Docker](https://www.docker.com/get-started)

## 📝 Install

    $ git clone https://github.com/liboniluciano/multitest.git
    $ cd multitest
    $ yarn

## Running the project

    $ cd db-docker/
    $ docker-compose up
    $ yarn start
    $ yarn typeorm migration:run

## EndPoints

- Para conseguir o fluxo de rotas, é necessário criar um usuário e autenticar

  - POST: {base_url}/user -> Criação
  - POST: {base_url}/session -> Informar mail e password

- Emplooye -> Ao popular a base, 2 tabelas são criadas caso não existam registros: role e level
  [Txt de carga](https://drive.google.com/file/d/1i2KLUdn0izJYrpJ2WrGb3mv5bc9W7jc5/view?usp=sharing)

* GET: {base_url}/ping -> Health Check
* POST: {base_url}/upload -> Rota que recebe o .txt para popular o banco
* POST: {base_url}/employee -> {
  registration_date: Date;
  cpf: number;
  name: string;
  uf_born: string;
  salary: number;
  status: ATIVO ou INATIVO;
  level: number;
  role: number;
  }
* GET: {base_url}/employee/all? -> page: number; quantity: number
* GET: {base_url}/employee? -> cpf: number, role: number, name: number, salary: status, string
* PUT: {base_url}/employee -> {
  registration_date?: Date;
  \*\*cpf: number;
  name?: string;
  uf_born?: string;
  salary?: number;
  status?: ATIVO ou INATIVO;
  level?: number;
  role?: number;
  }
* DELETE: base_url}/employee/:cpf
