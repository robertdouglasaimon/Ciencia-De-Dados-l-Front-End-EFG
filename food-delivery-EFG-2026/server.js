// Etapa 4: Configurar o servidor  / // Etapa 9: Integrar tudo no server.js
// No server.js, vamos escolher qual logger usar (console ou JSON).

// server.js
import express, { json } from "express";
import cors from "cors";
import ConsoleLogger from "./loggers/ConsoleLogger.js";
import JsonLogger from "./loggers/JsonLogger.js";
import RenderLogger from "./loggers/RenderLogger.js";
import OrderService from "./services/OrderService.js";
import OrderController from "./controllers/OrderController.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
app.use(json());
app.use(cors());

// Alternância de logger
const loggerType = process.env.LOGGER || "console";
let logger;

if (loggerType === "console") {
  logger = new ConsoleLogger();
} else if (loggerType === "json") {
  logger = new JsonLogger();
} else if (loggerType === "render") {
  logger = new RenderLogger();
}

// Injeção de dependências
const service = new OrderService(logger);
const controller = new OrderController(service);

// Rotas
app.use("/api/orders", orderRoutes(controller));

app.listen(3000, () => console.log("Food Delivery rodando na porta 3000"));


