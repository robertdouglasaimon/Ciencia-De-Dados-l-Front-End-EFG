// 🔵 Etapa 3 — Relatório mensal (processo pesado)
// Aqui simulamos um processo que demora.
// Usamos setTimeout para imitar o tempo de processamento.

function geraRelatorioMensal() {
    console.log("Relatório mensal enviado para processamento...");

    setTimeout(() => {
        console.log("Relatório mensal processado com sucesso!");
    }, 5000);
}

geraRelatorioMensal();
