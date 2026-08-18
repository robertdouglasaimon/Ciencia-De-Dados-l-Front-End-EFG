// Etapa 8: Criar as rotas
// routes/orderRoutes.js
const express = require("express");
const router = express.Router();

module.exports = (controller) => {
  router.get("/", (req, res) => controller.listar(req, res));
  router.post("/", (req, res) => controller.criar(req, res));
  router.patch("/:id", (req, res) => controller.alterar(req, res));
  router.delete("/:id", (req, res) => controller.remover(req, res));
  return router;
};
