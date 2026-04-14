let botao13 = document.getElementById('adicionar13');
let resultado13 = document.getElementById('finalizar13');

let numeros13 = [];

botao13.addEventListener("click", () => {
    let num = parseInt(document.getElementById("num13").value);
    if (num !== 0) {
        numeros13.push(num);
        document.getElementById("resultado13").innerHTML = 
            `Número ${num} adicionado.`;
    } else {
        document.getElementById("resultado13").innerHTML = 
            `Digite 0 apenas quando quiser encerrar.`;
    }
    document.getElementById("num13").value = "";
});

resultado13.addEventListener("click", () => {
    if (numeros13.length === 0) {
        document.getElementById("resultado13").innerHTML = 
            `Nenhum número foi introduzido.`;
        return;
    }

    let qtd = numeros13.length;
    let maior = Math.max(...numeros13);
    let menor = Math.min(...numeros13);

    document.getElementById("resultado13").innerHTML = `
        Foram introduzidos ${qtd} números. <br>
        Maior número: ${maior} <br>
        Menor número: ${menor}
    `;
});