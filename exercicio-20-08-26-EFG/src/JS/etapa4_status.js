// 🔴 Etapa 4 — Status interno (simulação gRPC)
// Aqui simulamos a troca de status entre microsserviços.
// Não vamos configurar gRPC de verdade agora, só mostrar a ideia.

function atualizarStatus(pedidoId, novoStatus) {
    console.log(`Pedido ${pedidoId} atualizado para status: ${novoStatus}`);
    return "Status atualizado com sucesso!"
}

console.log(atualizarStatus(1, "Em transito"));