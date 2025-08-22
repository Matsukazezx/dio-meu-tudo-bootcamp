# Projeto Champions ⚽

## 📌 Descrição

O **Projeto Champions** é uma API REST desenvolvida em **Node.js + Express + TypeScript**, que implementa um CRUD de jogadores (**Players**) e exibe informações de clubes (**Clubs**). O projeto segue uma arquitetura em camadas (Controller → Service → Repository → Model) e utiliza um padrão de respostas HTTP padronizado.

---

## 🚀 Tecnologias Utilizadas

* **Node.js** (v18+)
* **Express**
* **TypeScript**
* **tsx** (execução com suporte a TS)
* **tsup** (build do projeto)
* **CORS**

---

## 📂 Estrutura do Projeto

```
src/
 ├── controllers/     # Lida com as requisições HTTP (Players, Clubs)
 ├── services/        # Contém a lógica de negócio
 ├── repositories/    # Simula a persistência de dados em arrays
 ├── models/          # Definições de tipos/interfaces (Player, Club, HttpResponse)
 ├── utils/           # Helpers (padronização de respostas HTTP)
 ├── routes.ts        # Definição das rotas da aplicação
 ├── app.ts           # Configuração do Express
 └── server.ts        # Inicialização do servidor
```

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone <repo-url>
cd projeto-champions
npm install
```

---

## ▶️ Executando o Projeto

### Desenvolvimento com reload automático:

```bash
npm run start:dev
```

### Modo Watch:

```bash
npm run start:watch
```

### Build e execução em produção:

```bash
npm run start:dist
```

---

## 🌐 Rotas Disponíveis

### Players

* **GET /** → Lista todos os jogadores
* **GET /\:id** → Busca um jogador por ID
* **POST /** → Cria um novo jogador
* **PATCH /\:id** → Atualiza um jogador existente
* **DELETE /\:id** → Remove um jogador

### Clubs

* **GET /clubs** → Lista todos os clubes

---

## 📖 Exemplos de Respostas

### Criar jogador (POST /)

```json
{
  "id": 3,
  "name": "Yuri Alberto"
}
```

Resposta:

```json
{
  "message": "Criado com sucesso"
}
```

### Buscar clubes (GET /clubs)

```json
[
  {
    "id": 1,
    "name": "Real Madrid"
  }
]
```

---

## ✅ Melhorias Futuras

* Persistência real em banco de dados (MySQL / PostgreSQL / MongoDB).
* Validações com **Zod** ou **Joi**.
* Middleware global de tratamento de erros.
* Testes unitários e de integração.

---

