// Etapa 4: Configurar o servidor  / // Etapa 9: Integrar tudo no server.js
// No server.js, vamos escolher qual logger usar (console ou JSON).

// server.js
const express = require("express");
const cors = require("cors");
const ConsoleLogger = require("./loggers/ConsoleLogger");
const JsonLogger = require("./loggers/JsonLogger");
const OrderService = require("./services/OrderService");
const OrderController = require("./controllers/OrderController");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Alternância de logger
const loggerType = process.env.LOGGER || "json";
const logger = loggerType === "console" ? new ConsoleLogger() : new JsonLogger();

// Injeção de dependências
const service = new OrderService(logger);
const controller = new OrderController(service);

// Rotas
app.use("/api/orders", orderRoutes(controller));

app.listen(3000, () => console.log("Food Delivery rodando na porta 3000"));


