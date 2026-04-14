let botaoAdicionar = document.getElementById('adicionarCliente');
let botaoFinalizar = document.getElementById('finalizarClientes');
let resultado14 = document.querySelector('#resultado14');

let clientes = [];

botaoAdicionar.addEventListener("click", () => {
    let nome = document.getElementById("nomeCliente").value;
    let valor = parseFloat(document.getElementById("valorCompras").value);

    clientes.push({nome: nome, valor: valor});
    resultado14.innerHTML = 
        `Cliente ${nome} adicionado com compras de R$ ${valor.toFixed(2)}.`;

    document.getElementById("nomeCliente").value = "";
    document.getElementById("valorCompras").value = "";
});

botaoFinalizar.addEventListener("click", () => {
    if (clientes.length === 0) {
        resultado14.innerHTML = "Nenhum cliente foi cadastrado.";
        return;
    }

    let resultado = "";
    clientes.forEach(c => {
        let bonus = c.valor < 1000 ? c.valor * 0.10 : c.valor * 0.15;
        resultado += `Cliente: ${c.nome} - Compras: R$ ${c.valor.toFixed(2)} - Bônus: R$ ${bonus.toFixed(2)} <br>`;
    });

    resultado14.innerHTML = resultado;
});
