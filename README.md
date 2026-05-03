# 📝 Gerenciador de Tarefas

![.NET](https://img.shields.io/badge/.NET-8.0-purple?logo=dotnet)
![Angular](https://img.shields.io/badge/Angular-Standalone-red?logo=angular)
![SQLite](https://img.shields.io/badge/SQLite-Database-blue?logo=sqlite)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![GitHub last commit](https://img.shields.io/github/last-commit/MicheleFranciscaDeAlmeida/Protagonizar-Tecnologia)
![GitHub repo size](https://img.shields.io/github/repo-size/MicheleFranciscaDeAlmeida/Protagonizar-Tecnologia)

---

Este projeto é uma aplicação full stack para gerenciamento de tarefas, desenvolvida como parte de um desafio técnico.

---

## 🚀 Tecnologias utilizadas

### Backend
- .NET 8
- ASP.NET Core Web API
- Entity Framework Core
- SQLite
- Swagger

### Frontend
- Angular (Standalone Components)
- TypeScript
- HTML
- CSS

---

## ⚙️ Funcionalidades

- Criar tarefas
- Listar tarefas
- Exibir status das tarefas
- Armazenamento em banco de dados SQLite
- API REST documentada com Swagger

---

## 🔌 Integração

O frontend consome a API através de requisições HTTP utilizando Angular HttpClient.

---

## ▶️ Como executar o projeto

### 📦 Backend (.NET API)

```bash
cd TaskManagerAPI
dotnet run

A API estará disponível em:
http://localhost:5262
http://localhost:5262/swagger

⸻

💻 Frontend (Angular)
cd task-manager-frontend
npm install
ng serve

A aplicação estará disponível em:

http://localhost:4200

⚠️ Observações

* API testada com sucesso via Swagger
* Integração frontend/backend validada via console do navegador
* Projeto utiliza CORS para comunicação entre aplicações
* Banco de dados SQLite local

⸻

📌 Status do projeto

✔ Backend funcional
✔ API REST implementada
✔ Frontend funcional com consumo de API
🔧 Ajustes visuais e refinamento em andamento

⸻

👩‍💻 Autora

Projeto desenvolvido por Michele Francisca De Almeida como parte de um projeto acadêmico e profissional de desenvolvimento full stack.