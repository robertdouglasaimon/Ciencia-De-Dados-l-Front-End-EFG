// Etapa 5: Criar o Order model
// Esse é o objeto que representa um pedido.

class Order {
  constructor(id, titulo) {
    this.id = id;
    this.titulo = titulo;
    this.complete = false;
  }
}

export default Order;
