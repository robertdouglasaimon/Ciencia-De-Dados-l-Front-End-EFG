// Etapa 3: Criar o JsonLogger
// Esse salva os eventos em um arquivo history.json, vai ficar lá na pasta data

const Logger = require("./Logger");
const fs = require("fs");
const path = require("path");

const ARQUIVO = path.join(__dirname, "../data/history.json");

class JsonLogger extends Logger {
  registrar(evento) {
    let historico = [];
    if (fs.existsSync(ARQUIVO)) {
      historico = JSON.parse(fs.readFileSync(ARQUIVO, "utf-8"));
    }
    historico.push({ ...evento, data: new Date().toISOString() });
    fs.writeFileSync(ARQUIVO, JSON.stringify(historico, null, 2));
  }
}

module.exports = JsonLogger;
