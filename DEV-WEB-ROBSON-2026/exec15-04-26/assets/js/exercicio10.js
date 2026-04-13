let botao10 = document.getElementById('calcular10');

document.getElementById("calcular10").addEventListener("click", () => {
    let nome = document.getElementById("nome10").value;
    let consumoAnual = parseFloat(document.getElementById("consumoAnual").value);

    let precoBase = 2.13;

    // consumo médio mensal
    let consumoMensal = consumoAnual / 12;

    let precoFinal = 0;
    let percentual = 0;

    if (consumoMensal <= 50000) {
        percentual = 20;
        precoFinal = precoBase * 1.20;
    } else {
        percentual = 12;
        precoFinal = precoBase * 1.12;
    }

    document.getElementById("resultado10").innerHTML = `
        Posto: ${nome} <br>
        Consumo anual: ${consumoAnual} litros <br>
        Consumo médio mensal: ${consumoMensal.toFixed(2)} litros <br>
        Percentual de aumento: ${percentual}% <br>
        <strong>Preço final do litro: R$ ${precoFinal.toFixed(2)}</strong>
    `;
});