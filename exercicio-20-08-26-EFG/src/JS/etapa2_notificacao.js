// 🟡 Etapa 2 — Notificação (não precisa esperar)
// Depois que o pedido é aprovado, o sistema só joga a mensagem na fila.
// Aqui vamos simular a fila com um simples console.log.

function enviarNotificacao(pedidoId, email) {
    console.log(`Pedido ${pedidoId} enviado para fila de notificações.`);
    console.log(`Outro serviço vai mandar email para ${email}`);
}

enviarNotificacao(1, 'robert@testepagamento.com');