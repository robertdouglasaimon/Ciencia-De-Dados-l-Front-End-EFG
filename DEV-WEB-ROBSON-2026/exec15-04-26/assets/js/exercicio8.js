let botao8 = document.getElementById('calcular8');

botao8.addEventListener('click', () => {
    let nome = document.getElementById("nome8").value;
    let conta = document.getElementById("conta8").value;
    let saldoSemestre = parseFloat(document.getElementById("saldoSemestre").value);

    // saldo médio mensal = saldo semestre / 6
    let saldoMedioMensal = saldoSemestre / 6;
    let tarifa = 0;
    let categoria = "";

    if (saldoMedioMensal < 1000) {
        tarifa = 25;
        categoria = "Básica";
    } else if (saldoMedioMensal <= 2000) {
        tarifa = 20;
        categoria = "Prata";
    } else if (saldoMedioMensal <= 3500) {
        tarifa = 13;
        categoria = "Ouro";
    } else {
        tarifa = 0;
        categoria = "Prêmio";
    }

    document.getElementById("resultado8").innerHTML = `
        Cliente: ${nome} <br>
        Conta: ${conta} <br>
        Saldo médio mensal: R$ ${saldoMedioMensal.toFixed(2)} <br>
        Categoria: ${categoria} <br>
        Tarifa: R$ ${tarifa.toFixed(2)}
    `;

});