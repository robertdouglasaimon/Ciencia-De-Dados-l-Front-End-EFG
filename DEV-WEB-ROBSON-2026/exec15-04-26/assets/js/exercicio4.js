let botao4 = document.getElementById('calcular4');

botao4.addEventListener('click', () => {
    let salario = parseFloat(document.getElementById("salario4").value);

    let cpmf = salario * 0.38;
    let novoSalario = salario - cpmf;

    document.querySelector('#resultado4').innerHTML = `
        O salário de ${salario} foi alterado para ${novoSalario}. O CPMF foi de ${cpmf}, ou seja, 0.38%
        que resultou em um novo salário de ${novoSalario}.
    `;
});