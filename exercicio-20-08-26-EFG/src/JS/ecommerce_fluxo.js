// 🟢 Arquivo único - Aqui é o role todo em um JS só:
// 1. Checkout (usuário espera resposta)
async function finalizarCheckout(pedidoId) {
  console.log("=== CHECKOUT ===");
  console.log("Verificando estoque...");

  const estoqueDisponivel = true; // simulação

  if (estoqueDisponivel) {
    console.log("Estoque OK. Processando pagamento...");

    const pagamentoAprovado = true; // simulação

    if (pagamentoAprovado) {
      console.log("Pagamento aprovado!");
      console.log("Pedido confirmado!");
      return true;
    } else {
      console.log("Pagamento recusado!");
      return false;
    }
  } else {
    console.log("Produto fora de estoque!");
    return false;
  }
}

// 2. Notificação (não precisa esperar)
function enviarNotificacao(pedidoId, email) {
  console.log("\n=== NOTIFICAÇÃO ===");
  console.log(`Pedido ${pedidoId} enviado para fila de notificações.`);
  console.log(`(Outro serviço vai mandar e-mail para ${email})`);
}

// 3. Relatório mensal (processo pesado)
function gerarRelatorioMensal() {
  console.log("\n=== RELATÓRIO ===");
  console.log("Relatório mensal enviado para processamento...");
  
  setTimeout(() => {
    console.log("Relatório pronto! (simulação)");
  }, 3000); // espera 3 segundos
}

// 4. Status interno (simulação gRPC)
function atualizarStatus(pedidoId, novoStatus) {
  console.log("\n=== STATUS INTERNO ===");
  console.log(`Pedido ${pedidoId} atualizado para status: ${novoStatus}`);
  return "Status atualizado com sucesso!";
}

// Fluxo completo
async function fluxoEcommerce() {
  const pedidoId = 123;
  const emailCliente = "robert@testepagamento.com";

  const checkoutOk = await finalizarCheckout(pedidoId);

  if (checkoutOk) {
    enviarNotificacao(pedidoId, emailCliente);
    gerarRelatorioMensal();
    console.log(atualizarStatus(pedidoId, "Em transporte"));
  }
}

fluxoEcommerce();