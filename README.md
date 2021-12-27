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

    $ yarn start
    $ cd db-docker/
    $ docker compose up -D
    $ yarn typeorm migration:run

## EndPoints
