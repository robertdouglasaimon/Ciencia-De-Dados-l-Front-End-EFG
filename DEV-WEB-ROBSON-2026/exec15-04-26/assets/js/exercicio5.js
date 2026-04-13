let botao5 = document.getElementById('calcular5');

botao5.addEventListener("click", () => {
    let qtdFarinha = parseFloat(document.getElementById("qtdFarinha").value);
    let precoFarinha = parseFloat(document.getElementById("precoFarinha").value);

    let qtdAgua = parseFloat(document.getElementById("qtdAgua").value);
    let precoAgua = parseFloat(document.getElementById("precoAgua").value);

    let qtdEnergia = parseFloat(document.getElementById("qtdEnergia").value);
    let precoEnergia = parseFloat(document.getElementById("precoEnergia").value);

    let impostoPercentual = parseFloat(document.getElementById("imposto").value);

    // custo dos insumos
    let custoFarinha = qtdFarinha * precoFarinha;
    let custoAgua = qtdAgua * precoAgua;
    let custoEnergia = qtdEnergia * precoEnergia;

    let custoBase = custoFarinha + custoAgua + custoEnergia;

    // adiciona imposto
    let custoComImposto = custoBase + (custoBase * (impostoPercentual / 100));

    // valor de venda com 30% de lucro
    let valorVenda = custoComImposto * 1.30;

    document.querySelector("#resultado5").innerHTML = `
        Preço de custo (com imposto): R$ ${custoComImposto.toFixed(2)} <br>
        Valor de venda (30% de lucro): R$ ${valorVenda.toFixed(2)}
    `;
});