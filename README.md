# Catálogo de Produtos e Clientes

Projeto **catalogo-produtos+seunome** desenvolvido para praticar os conceitos de React, Vite, componentes, props, state, eventos, `map()`, `fetch()`, API REST, back-end e banco de dados.

## Problema solucionado

Uma empresa precisava de uma aplicação simples para **apresentar seus produtos** e **cadastrar clientes**. A aplicação permite:

- visualizar os produtos disponíveis (dados iniciais controlados pelo state do React);
- cadastrar novos clientes através de um formulário;
- persistir os clientes em um banco de dados por meio de uma API;
- exibir a lista de clientes atualizada logo após o cadastro.

## Tecnologias utilizadas

| Camada | Tecnologias |
| --- | --- |
| Front-End | React, JSX, JavaScript, Vite, CSS, ESLint |
| Back-End | Node.js, Express, CORS |
| Banco de Dados | SQLite (via `better-sqlite3`) |
| Ferramentas | npm, Git, GitHub, Postman |

## Estrutura do projeto

```text
catalogo-produtos+seunome/
├── backend/
│   ├── database.js        # conexão e operações no banco (SQLite)
│   ├── package.json
│   └── server.js          # API Express (GET/POST /clientes)
├── database/
│   ├── clientes.db        # banco gerado automaticamente (não versionado)
│   └── schema.sql         # estrutura da tabela clientes
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Titulo.jsx
│   │   │   ├── Produto.jsx
│   │   │   ├── FormularioProduto.jsx
│   │   │   ├── Cliente.jsx
│   │   │   └── FormularioCliente.jsx
│   │   ├── services/
│   │   │   └── clientesApi.js   # funções com fetch() para a API
│   │   ├── App.jsx              # state, eventos e map()
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── eslint.config.js
│   ├── package.json
│   └── vite.config.js           # proxy /api -> http://localhost:3001
└── README.md
```

## Como executar o Back-End

```bash
# Entrar na pasta do back-end
cd backend

# Instalar as dependências
npm install

# Iniciar a API
npm start
```

A API ficará disponível em `http://localhost:3001`.
O banco `database/clientes.db` é criado automaticamente na primeira execução.

Modo de desenvolvimento com recarregamento automático:

```bash
npm run dev
```

## Como executar o Front-End

Abra outro terminal (mantendo o back-end rodando):

```bash
# Entrar na pasta do front-end
cd frontend

# Instalar as dependências
npm install

# Iniciar a aplicação
npm run dev
```

Acesse `http://localhost:5173` no navegador (Google Chrome).
O front-end redireciona as chamadas de `/api` para o back-end através do proxy configurado no `vite.config.js`.

## Rotas da API

| Método | Rota | Descrição | Corpo da requisição |
| --- | --- | --- | --- |
| GET | `/clientes` | Lista todos os clientes | — |
| POST | `/clientes` | Cadastra um novo cliente | `{ "nome": "...", "email": "...", "telefone": "..." }` |

O back-end também expõe as mesmas rotas sob o prefixo `/api` (utilizado pelo front-end).

Exemplo de requisição com Postman:

- **GET** `http://localhost:3001/clientes`
- **POST** `http://localhost:3001/clientes` com o corpo em JSON:

```json
{
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "telefone": "(11) 98888-7777"
}
```

Resposta do POST (201 Created):

```json
{
  "id": 1,
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "telefone": "(11) 98888-7777",
  "criado_em": "2026-09-21 20:42:40"
}
```

## Estrutura do Banco de Dados

Arquivo: `database/schema.sql`

```sql
CREATE TABLE IF NOT EXISTS clientes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  criado_em TEXT NOT NULL DEFAULT (datetime('now'))
);
```

## Funcionalidades

- Título e descrição da aplicação (componente `Titulo`).
- Exibição de, no mínimo, 3 produtos iniciais com nome, categoria e preço (componente `Produto`, dados por props).
- Cadastro de novos produtos no state através de formulário controlado (`FormularioProduto`).
- Listagem de clientes com nome, e-mail e telefone (componente `Cliente`, dados por props).
- Cadastro de clientes com formulário controlado (`FormularioCliente`) usando `fetch()` + `POST`.
- Atualização automática da lista de clientes após o cadastro (sem recarregar a página).
- Estilização própria (CSS) para página, título, formulários, campos, botão, lista e clientes.
- Tratamento de estados de carregamento e de mensagens de sucesso/erro.

## Fluxo da aplicação

```text
Usuário -> Formulário React -> State -> fetch() POST -> API Express
        -> Back-End -> Banco de Dados SQLite

Banco de Dados -> Back-End -> API -> fetch() -> State -> React -> Tela
```

## Captura de tela

> A imagem abaixo é uma prévia ilustrativa da aplicação. Substitua por uma captura de tela real da execução (`docs/captura-tela.png`).

![Captura de tela da aplicação](docs/captura-tela.svg)

## Integrantes

- [Seu Nome]
- [Nome da Dupla]
