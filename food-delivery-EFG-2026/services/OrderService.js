// Etapa 6: Criar o OrderService
// Aqui ficam as regras de negócio (criar, alterar, remover pedidos).

const Order = require("../models/Order");

class OrderService {
  constructor(logger) {
    this.pedidos = [];
    this.proximoId = 1;
    this.logger = logger;
  }

  listar() {
    return this.pedidos;
  }

  criar(titulo) {
    const novo = new Order(this.proximoId++, titulo);
    this.pedidos.push(novo);
    this.logger.registrar({ tipo: "CRIADO", titulo: novo.titulo, complete: novo.complete });
    return novo;
  }

  alterar(id) {
    const pedido = this.pedidos.find((p) => p.id === Number(id));
    if (!pedido) return null;
    pedido.complete = !pedido.complete;
    this.logger.registrar({ tipo: "ALTERADO", titulo: pedido.titulo, complete: pedido.complete });
    return pedido;
  }

  remover(id) {
    const index = this.pedidos.findIndex((p) => p.id === Number(id));
    if (index === -1) return null;
    const [removido] = this.pedidos.splice(index, 1);
    this.logger.registrar({ tipo: "REMOVIDO", titulo: removido.titulo, complete: removido.complete });
    return removido;
  }
}

module.exports = OrderService;
