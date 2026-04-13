let botao3 = document.getElementById('calcular3');


// Um explicação rápida da função do exec3. Aqui eu decidi dividir e explicar cada parte comentando dentro mesmo, até para ficar mais claro o entendimento por partes. Ia fazer com onClick mas com eventListener ficou melhor. Então é isso ai! Ai está a operação toda do exercicio 3:

botao3.addEventListener('click', () => {
    let horasTrabalhadas = parseInt(document.getElementById("horas").value);
    let salarioMinimo = parseInt(document.getElementById("salario-minimo").value);

    // A hora trabalhada vale a metade do salário mínimo, logo fazemos essa bagaça assim:
    let valorHora = salarioMinimo / 2;

    // O salário bruto equivale ao número de horas trabalhadas multiplicado pelo valor da hora trabalhada, então a gente pega as horas trabalhadas e multipla pelo valor da hora trabalhada:
    let salarioBruto = horasTrabalhadas * valorHora;

    // O imposto equivale a 3% do salário bruto (infelizmente nem o exercicio ta safo dessa merda de imposto):
    let imposto = salarioBruto * 0.03;

    // O salário a receber equivale ao salário bruto menos o imposto:
    let salarioLiquido = salarioBruto - imposto; 

    document.querySelector('#resultado3').innerHTML = `
        As horas trabalhadas foram ${horasTrabalhadas} e o salário foi  R$ ${salarioMinimo} (salário minimo)
    
        <br>
        A hora trabalhada vale R$ ${valorHora}
    
        <br>
        O salário bruto equivale a R$ ${salarioBruto}
    
        <br>
        O imposto equivale a 3% do salário bruto, ou seja, R$ ${imposto}
    
        <br>
        O salário a receber equivale ao salário bruto menos o imposto, ou seja, R$ ${salarioLiquido}`;
});