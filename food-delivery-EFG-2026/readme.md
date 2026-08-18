# 🍔 Food Delivery EFG 2026
![Node.js](https://img.shields.io/badge/Node.js-24.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.x-blue?logo=express)
![Deploy Render](https://img.shields.io/badge/Deploy-Render-purple?logo=render)
![Front GitHub Pages](https://img.shields.io/badge/Front-GitHub%20Pages-black?logo=github)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)


Sistema de pedidos de entrega de comida desenvolvido como parte do curso **Desenvolvimento Web e Mobile** — módulo **Arquitetura de Sistemas Back End**.  
O projeto demonstra o uso do **padrão Strategy** para alternar entre diferentes formas de registro de eventos (JSON em arquivo e Console).

---

## 🚀 Tecnologias

- [Express](https://expressjs.com/) — framework para criação do servidor
- [Node.js](https://nodejs.org/) — ambiente de execução
- [Render](https://render.com/) — hospedagem gratuita do back-end
- [GitHub Pages](https://pages.github.com/) — hospedagem do front-end

---

## 📦 Estrutura do Projeto
```bash  
    food-delivery/
    │
    ├── app.js                # Ponto de entrada do sistema
    ├── server.js             # Configuração do servidor Express
    │
    ├── controllers/          # Controladores (lógica de orquestração)
    │   └── OrderController.js
    │
    ├── models/               # Modelos de dados
    │   └── Order.js
    │
    ├── services/             # Serviços de negócio
    │   └── OrderService.js
    │
    ├── loggers/              # Estratégias de logging (Strategy)
    │   ├── Logger.js         # Interface base
    │   ├── ConsoleLogger.js  # Implementação console
    │   └── JsonLogger.js     # Implementação JSON
    │
    ├── routes/               # Rotas da API
    │   └── orderRoutes.js
    │
    ├── data/                 # Dados persistidos
    │   └── history.json
    │
    ├── assets/               # Front-end
    │   ├── js/
    │   │   └── app.js
    │   ├── css/
    │   │   └── style.css
    │   └── index.html
```

## 🛠 Como rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/food-delivery.git

# Entrar na pasta
cd food-delivery

# Instalar dependências
npm install

# Rodar servidor
node server.js
```
O servidor estará disponível em:
👉 http://localhost:3000/api/orders


## 🎯 Funcionalidades
- Criar pedidos de entrega
- Alterar status (pendente/concluído)
- Remover pedidos
- Registrar eventos em JSON ou Console (alternância via variável de ambiente LOGGER)

## 📚 Curso
Este projeto foi desenvolvido no curso Desenvolvimento Web e Mobile, módulo Arquitetura de Sistemas Back End.