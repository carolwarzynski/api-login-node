# Backend – Controle de Usuários

API REST desenvolvida em Node.js para cadastro e consulta de usuários, com persistência de dados em MongoDB utilizando Prisma ORM.

Este projeto foi criado com o objetivo de praticar conceitos fundamentais de backend, como rotas HTTP, integração com banco de dados, validação de dados e tratamento de erros.

---

## Ambiente preparado com:

- Node.js
- Express
- Prisma ORM
- MongoDB Atlas
- JavaScript (ES Modules)

---

## Funcionalidades

- Criar usuários
- Listar todos os usuários
- Buscar usuário por ID
- Validação de dados de entrada
- Tratamento de erros com status HTTP adequados

---

## Estrutura do projeto

```
├── prisma/
│ └── schema.prisma
├── server.js
├── package.json
├── .gitignore
└── README.md
´´´
---

## Rotas de API

## Criar usuário

**POST** `/usuarios`

Body (JSON):
```json
{
  "nome": "Ana",
  "email": "ana@email.com",
  "idade": 25 }
  ´´´
Resposta:

201 Created – usuário criado com sucesso

400 Bad Request – dados inválidos

500 Internal Server Error – erro no servidor

Listar usuários

GET /usuarios

Resposta:

200 OK – lista de usuários

Buscar usuário por ID

GET /usuarios/:id

Resposta:

200 OK – usuário encontrado

404 Not Found – usuário não encontrado

Como executar o projeto localmente

Clone o repositório:

git clone <url-do-repositorio>


Instale as dependências:

npm install


Crie um arquivo .env na raiz do projeto com a variável:

DATABASE_URL=sua_string_de_conexao_do_mongodb

Execute o projeto:

npm run dev


O servidor será iniciado em:

http://localhost:3000

Observações

O arquivo .env não é versionado por questões de segurança.

Este projeto é apenas para fins de estudo e portfólio.
