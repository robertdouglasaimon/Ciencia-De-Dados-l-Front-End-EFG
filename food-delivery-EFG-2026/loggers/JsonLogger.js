// Etapa 3: Criar o JsonLogger
// Esse salva os eventos em um arquivo history.json, vai ficar lá na pasta data
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class JsonLogger {
  registrar(evento) {
    const filePath = path.join(__dirname, "../data/history.json");
    const logEntry = { timestamp: new Date().toISOString(), ...evento };

    let logs = [];
    if (fs.existsSync(filePath)) {
      try {
        logs = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      } catch {
        logs = [];
      }
    }

    logs.push(logEntry);
    fs.writeFileSync(filePath, JSON.stringify(logs, null, 2));
    console.log(`[JSON LOG] Evento registrado em history.json: ${evento.tipo} - "${evento.titulo}"`);
  }
}
