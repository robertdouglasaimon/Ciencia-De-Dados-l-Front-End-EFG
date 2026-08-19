// Etapa 7: Criar o OrderController
// Esse conecta as rotas com o serviço.

class OrderController {
  constructor(service) {
    this.service = service;
  }

  listar(req, res) {
    res.json(this.service.listar());
  }

  criar(req, res) {
    const novo = this.service.criar(req.body.titulo);
    res.status(201).json(novo);
  }

  alterar(req, res) {
    const pedido = this.service.alterar(req.params.id);
    if (!pedido) return res.status(404).json({ erro: "Não encontrado" });
    res.json(pedido);
  }

  remover(req, res) {
    const removido = this.service.remover(req.params.id);
    if (!removido) return res.status(404).json({ erro: "Não encontrado" });
    res.status(204).end();
  }
}

export default OrderController;
