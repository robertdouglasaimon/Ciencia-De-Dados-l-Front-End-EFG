let nome = document.getElementById('nome');
let botao1 = document.getElementById('calcular');

botao1.addEventListener('click', () => {
    if (nome.value === "") {
        document.querySelector('#resultado1').innerHTML = "Por favor, insira o nome e tente novamente.";
        return;
    }
    
    let salario = parseFloat(document.getElementById("salario").value);
    let novoSalario = salario * 1.25;
    novoSalario = novoSalario.toFixed(2);

    document.querySelector('#resultado1').innerHTML = `
        O calculo é feito com base no salário de R$ ${salario} * 1.25 (25%).
        <br>
        O novo salário de ${nome.value} será de R$ 
        ${novoSalario}
    `;
});