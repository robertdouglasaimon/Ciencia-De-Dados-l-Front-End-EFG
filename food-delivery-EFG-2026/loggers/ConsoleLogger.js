// ETAPA 2 - Criar o ConsoleLogger
// Esse imprime no console no formato pedido.
import Logger from "./Logger.js";

class ConsoleLogger extends Logger {
  registrar(evento) {
    const timestamp = new Date().toISOString().replace("T", " ").split(".")[0];
    console.log(`[LOG ${timestamp}] Novo Evento: <${evento.tipo}> "${evento.titulo}", complete: ${evento.complete}`);
  }
}

export default ConsoleLogger;
