## Sistema de Gerenciamento de Usuários – Fullstack

Aplicação fullstack com CRUD completo para gerenciamento de usuários, integrando frontend em JavaScript puro com backend em Node.js, Express e Prisma ORM conectado ao MongoDB.
---

## 🛠 Tecnologias Utilizadas

### Backend
-Node.js
-Express
-Prisma ORM
-MongoDB
-CORS

### Frontend
-HTML5
-CSS3
-JavaScript (Vanilla JS)
-Fetch API

## ✨ Funcionalidades
- Criar usuário <br>
-Listar usuários <br>
-Atualizar usuário <br>
-Deletar usuário <br>
-Deletar usuário <br>
-Validação de campos obrigatórios <br>
-Tratamento de erros HTTP (400, 404, 500) <br>
-Integração Frontend ↔ Backend <br>
-Configuração de CORS <br>

## Estrutura do projeto

/backend
  ├── server.js
  ├── prisma/
  ├── package.json

/frontend
  ├── index.html
  ├── style.css
  ├── script.js

  ## Como Executar o Projeto

  ### 1 - CLONE O REPOSITÓRIO 
  - git clone https://github.com/carolwarzynski/api-login-node.git
   
###  2 - Rodar o Backend
cd backend
npm install
node server.js

O servidor rodará em:

http://localhost:3000

###  3 - Rodar o Frontend

Abra o arquivo index.html com a extensão Live Server no VS Code.

## Endpoints da API
| Método | Rota          | Descrição     |
| ------ | ------------- | ------------- |
| POST   | /usuarios     | Criar usuário |
| GET    | /usuarios     | Listar todos  |
| GET    | /usuarios/:id | Buscar por ID |
| PUT    | /usuarios/:id | Atualizar     |
| DELETE | /usuarios/:id | Deletar       |

### Objetivo do Projeto

Este projeto foi desenvolvido com foco em:
-Praticar arquitetura fullstack <br>
-Trabalhar integração cliente-servidor <br>
-Aplicar versionamento com Git <br>
-Resolver problemas reais (CORS, rotas, merge) <br>
-Consolidar conceitos de API REST <br>

Desenvolvido por: <br>
Ana Carolina Warzynski <br>
Projeto para portfólio e evolução profissional.
