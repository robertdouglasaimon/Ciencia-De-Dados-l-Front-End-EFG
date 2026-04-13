let botao7 = document.getElementById('calcular7');

botao7.addEventListener('click', () => {
    let conta = parseFloat(document.getElementById("conta").value);
    let dias = parseInt(document.getElementById("dias2").value);
    let multa = parseFloat(document.getElementById("multa").value);
    let juros = parseFloat(document.getElementById("juros").value);

    // Valor da multa
    let valorMulta = conta * multa;

    // Valor dos juros
    let valorJuros = dias * juros;

    // Custo total
    let custoTotal = valorMulta + valorJuros;

    document.querySelector('#resultado7').innerHTML = `
        Valor da multa: R$ ${valorMulta.toFixed(2)}
        <br>
        Valor dos juros: R$ ${valorJuros.toFixed(2)}
        <br>
        Custo total: R$ ${custoTotal.toFixed(2)}
    `;
});