document.getElementById("calcular9").addEventListener("click", () => {
    let nome = document.getElementById("nome9").value;
    let tipo = parseInt(document.getElementById("tipoPulv").value);
    let area = parseFloat(document.getElementById("area").value);

    // Preço por acre:
    let precoPorAcre = 0;
    switch(tipo) {
        case 1: precoPorAcre = 5; break;
        case 2: precoPorAcre = 10; break;
        case 3: precoPorAcre = 15; break;
        case 4: precoPorAcre = 25; break;
        default: precoPorAcre = 0;
    }

    let custoBase = area * precoPorAcre;
    let custoFinal = custoBase;

    // desconto da área
    if (area > 300) {
        custoFinal = custoFinal * 0.95; // 5% de desconto
    }

    // desconto sobre excedente de 1750
    if (custoBase > 1750) {
        let excedente = custoBase - 1750;
        custoFinal -= excedente * 0.10;
    }

    document.getElementById("resultado9").innerHTML = `
        Fazendeiro: ${nome} <br>
        Tipo de pulverização: ${tipo} <br>
        Área: ${area} acres <br>
        Custo base: R$ ${custoBase.toFixed(2)} <br>
        <strong>Custo final: R$ ${custoFinal.toFixed(2)}</strong>
    `;
});