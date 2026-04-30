# 🚀 API de Gerenciamento de Tarefas

API RESTful desenvolvida com **ASP.NET Core** para gerenciamento de tarefas, permitindo operações completas de CRUD (Create, Read, Update, Delete).

Este projeto foi construído com foco em boas práticas de desenvolvimento backend e integração com banco de dados relacional.

---

## 🧠 Funcionalidades

✔ Criar tarefas  

✔ Listar todas as tarefas  

✔ Buscar tarefa por ID  

✔ Atualizar tarefa  

✔ Deletar tarefa  

---

## 🛠️ Tecnologias Utilizadas

- .NET 8

- ASP.NET Core Web API

- Entity Framework Core

- SQL Server (Docker)

- Swagger (OpenAPI)

---

## 🏗️ Arquitetura do Projeto

TaskManagerAPI/
│
├── Controllers/    → Endpoints da API
├── Models/         → Entidades do sistema
├── Data/           → Contexto do banco de dados (DbContext)
├── Migrations/     → Controle de versão do banco
├── Program.cs      → Configuração da aplicação

---

## 🗄️ Banco de Dados

O banco utilizado é o **SQL Server**, rodando em container Docker.

### 🔥 Executar o SQL Server via Docker:

```bash

docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=SuaSenha@123" \

-p 1433:1433 --name sqlserver \

-d mcr.microsoft.com/mssql/server:2022-latest

⚙️ Configuração

A string de conexão está definida no arquivo:

appsettings.json

"ConnectionStrings": {

  "DefaultConnection": "Server=localhost,1433;Database=TaskManagerDB;User Id=sa;Password=SuaSenha@123;TrustServerCertificate=True;"

▶️ Como executar o projeto

1. Restaurar dependências

dotnet restore

2.Aplicar migrations

dotnet ef database update

3. Executar a aplicação

dotnet run

🌐 Acessar a API

Após rodar o projeto, acesse:

http://localhost:5262/swagger

Você poderá testar todos os endpoints diretamente pela interface do Swagger.

⸻

📌 Exemplos de Endpoints

Método

Rota

Descrição

GET

/api/Tarefas

Lista todas tarefas

GET

/api/Tarefas/{id}

Busca por ID

POST

/api/Tarefas

Cria nova tarefa

PUT

/api/Tarefas/{id}

Atualiza tarefa

DELETE

/api/Tarefas/{id}

Remove tarefa

📦 Exemplo de JSON

{

  "titulo": "Estudar API",

  "descricao": "Aprender ASP.NET Core",

  "status": "Pendente"

}

💡 Melhorias Futuras

* 🔐 Autenticação com JWT
* 📄 Paginação de resultados
* 🔍 Filtro por status
* 📊 Logs estruturados
* 🧪 Testes automatizados

⸻

👩‍💻 Autora

Michele Almeida

⸻

⭐ Considerações

Este projeto foi desenvolvido com o objetivo de consolidar conhecimentos em:

* Desenvolvimento de APIs REST
* Integração com banco de dados
* Uso de Docker
* Versionamento com Git