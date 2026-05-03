# 📝 Gerenciador de Tarefas

Este projeto é uma aplicação full stack para gerenciamento de tarefas, desenvolvida como parte de um desafio técnico.

## 🚀 Tecnologias utilizadas

### Backend
- .NET 8
- ASP.NET Core
- Entity Framework Core
- SQLite

### Frontend
- Angular (Standalone Components)
- TypeScript
- HTML/CSS

---

## ⚙️ Funcionalidades

- Criar tarefas
- Listar tarefas
- Armazenamento em banco de dados SQLite
- API REST documentada com Swagger

---

## 🔌 Integração

O frontend consome a API através de requisições HTTP.

---

## ▶️ Como executar o projeto

### Backend

bash cd TaskManagerAPI dotnet run 

A API estará disponível em:
http://localhost:5262/swagger

---

### Frontend

bash cd task-manager-frontend ng serve 

A aplicação estará disponível em:
http://localhost:4200

---

## ⚠️ Observações

Durante o desenvolvimento, a API foi testada com sucesso via Swagger, retornando corretamente os dados.

A integração com o frontend foi parcialmente implementada, com consumo da API validado no console.

---

## 📌 Status do projeto

Em desenvolvimento