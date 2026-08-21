// 🟢 Etapa 1 — Checkout (usuário espera resposta)
// Vou tipo simular o usuário finalizando a compra.
// O sistema precisa checar estoque e pagamento antes de confirmar.

async function finalizarCheckout(pedidoId) {
    console.log(`Verificando o estoque ${pedidoId}...`);

    // Emulando um estoque ativo e que funciona:
    const estoqueDisponivel = true;
    if(estoqueDisponivel) {
        console.log("Estoque disponível, processando pagamento...");

        // Simulando pagamento aprovado
        const pagamentoAprovado = true;
        if(pagamentoAprovado) {
            console.log("Pagamento aprovado!");
            console.log("Pedido confirmado!");
        } else {
            console.log("Pagamento recusado!");
        }
    } else {
        console.log("Produto fora de estoque!")
    }
}

finalizarCheckout(123);