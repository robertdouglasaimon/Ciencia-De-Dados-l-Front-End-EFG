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

// Log no padrão Strategy (mais adequado para esse tipo de cenário):
// const loggerType = process.env.LOGGER || "json";
// const logger = loggerType === "console" ? new ConsoleLogger() : new JsonLogger();

// Alternância de logger (com os 3 loggers funcionando, cada um com sua característica):
const loggerType = process.env.LOGGER || "console";
let logger;

if (loggerType === "console") {
  logger = new ConsoleLogger();
} else if (loggerType === "json") {
  logger = new JsonLogger();
} else if (loggerType === "render") {
  logger = new RenderLogger();
}
// Não era pra ter feito usando if, eu sei. Mas como eu pensei em mostrar os 3 loggs, achei melhor assim. Se fosse só um, eu teria feito usando o padrão Strategy, que é mais adequado para esse tipo de cenário.
// Ai é aquela pô, se você levar em conta o online no render, ele ta no padrão Strategy, mas se você levar em conta o local, ele ta no padrão if/else. Então é meio que um mix dos dois padrões. Mas enfim, o importante é que funciona e que a gente consegue ver os 3 loggers funcionando, cada um com sua característica.






// Injeção de dependências
const service = new OrderService(logger);
const controller = new OrderController(service);

// Rotas
app.use("/api/orders", orderRoutes(controller));

app.listen(3000, () => console.log("Food Delivery rodando na porta 3000"));


