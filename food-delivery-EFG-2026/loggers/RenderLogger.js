import Logger from "./Logger.js";

export default class RenderLogger extends Logger {
  registrar(evento) {
    const timestamp = new Date().toISOString().replace("T", " ").split(".")[0];
    console.log(`[RENDER LOG ${timestamp}] Evento: ${evento.tipo}, Pedido: "${evento.titulo}", Status: ${evento.complete}`);
  }
}
