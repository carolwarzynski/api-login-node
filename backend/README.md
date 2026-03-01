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
- Criar usuário
-Listar usuários
-Atualizar usuário
-Deletar usuário
-Deletar usuário
-Validação de campos obrigatórios
-Tratamento de erros HTTP (400, 404, 500)
-Integração Frontend ↔ Backend
-Configuração de CORS

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
-Praticar arquitetura fullstack
-Trabalhar integração cliente-servidor
-Aplicar versionamento com Git
-Resolver problemas reais (CORS, rotas, merge)
-Consolidar conceitos de API REST

Desenvolvido por:
Ana Carolina Warzynski
Projeto para portfólio e evolução profissional.