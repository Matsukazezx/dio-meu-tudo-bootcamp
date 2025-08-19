# Podcast Manager

## Descrição

O **Podcast Manager** é uma aplicação inspirada no estilo da Netflix, que permite centralizar diferentes episódios de podcasts separados por categoria. O objetivo é oferecer uma experiência de navegação organizada, intuitiva e agradável para os usuários, facilitando o acesso aos episódios.

## Funcionalidades

* **Listar episódios de podcasts em sessões de categorias:** Episódios organizados em categorias como saúde, bodybuilder, mentalidade, humor e outros.
* **Filtrar episódios por nome de podcast:** Busca por nome de podcast para facilitar o acesso aos episódios desejados.
* **Respostas padronizadas com códigos de status HTTP:** Retorna `200 OK`, `204 No Content` ou `500 Internal Server Error` conforme o resultado da requisição.
* **Tratamento de erros estruturado:** Respostas de erro incluem mensagens amigáveis e detalhes do problema.

## Implementação

### Listar episódios de podcasts em sessões de categorias

* **Endpoint:** `GET /list`
* **Descrição:** Retorna uma lista de episódios de podcasts organizados por categorias.
* **Exemplo de resposta:**

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

### Filtrar episódios por nome de podcast

* **Endpoint:** `GET /episode?podcastName={nome}`
* **Descrição:** Retorna uma lista de episódios de podcast com base no nome fornecido.
* **Exemplo de requisição:** `GET /episode?podcastName=flow`

### Respostas possíveis

* **200 OK:** Quando existem episódios encontrados.
* **204 No Content:** Quando não existem episódios disponíveis para a busca.
* **500 Internal Server Error:** Em caso de falha interna.

## Tecnologias Utilizadas

* **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para maior segurança e produtividade.
* **[Tsup](https://github.com/egoist/tsup):** Ferramenta de build e empacotamento.
* **[Tsx](https://github.com/egoist/tsx):** Executor rápido para projetos TypeScript.
* **[Node.js](https://nodejs.org/):** Ambiente de execução.
* **[@types/node](https://www.npmjs.com/package/@types/node):** Definições de tipos do Node.js.

## Como Rodar o Projeto

1. Clone este repositório.
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor em modo de desenvolvimento:

```bash
npm run start:dev
```

4. Para rodar em modo watch (reinicia automaticamente em alterações):

```bash
npm run start:watch
```

5. Para gerar a build de produção:

```bash
npm run dist
```

6. Para rodar o build:

```bash
npm run start:dist
```

## Contribuição

Contribuições são bem-vindas! Abra uma *issue* ou envie um *pull request* com melhorias e correções.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Referência

Repositório original: [node-ts-webapi-without-frameworks-podcast-manager](https://github.com/felipeAguiarCode/node-ts-webapi-without-frameworks-podcast-menager)
