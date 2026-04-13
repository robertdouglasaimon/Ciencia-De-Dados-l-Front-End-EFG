let botao6 = document.getElementById('calcular6');

botao6.addEventListener('click', () => {
    let taxaFixa = parseFloat(document.getElementById("taxaFixa").value);
    let taxaKm = parseFloat(document.getElementById("taxaKm").value);
    let dias = parseInt(document.getElementById("dias").value);
    let quilometros = parseInt(document.getElementById("quilometros").value);

    // taxa fixa por dia
    let taxaFixaTotal = taxaFixa * dias;

    // taxa por km rodado
    let taxaKmTotal = taxaKm * quilometros;

    // desconto de 10% na taxa fixa de aluguel por dia
    let taxaFixaDesconto = taxaFixaTotal * 0.10;

    // custo total
    let custoTotal = taxaFixaTotal + taxaKmTotal - taxaFixaDesconto;

    document.querySelector('#resultado6').innerHTML = `
        Taxa fixa por dia: R$ ${taxaFixaTotal.toFixed(2)}
        <br>
        Taxa por km rodado: R$ ${taxaKmTotal.toFixed(2)}
        <br>
        Desconto de 10% na taxa fixa de aluguel por dia: R$ ${taxaFixaDesconto.toFixed(2)}
        <br>
        Custo total: R$ ${custoTotal.toFixed(2)}
    `;
});