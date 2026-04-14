let botaoAdicionar1 = document.getElementById('adicionarIdade15');
let botaoFinalizar1 = document.getElementById('finalizarIdades15');
let resultado15 = document.querySelector('#resultado15');

let idades = [];

botaoAdicionar1.addEventListener("click", () => {
    let idade = parseInt(document.getElementById("idade15").value);

    if (!isNaN(idade)) {
        idades.push(idade);
        resultado15.innerHTML = `Idade ${idade} adicionada. (${idades.length}/10)`;
    }

    console.log(idades);
    document.getElementById("idade15").value = "";
});

botaoFinalizar1.addEventListener("click", () => {
    if (idades.length < 10) {
        resultado15.innerHTML = `Você precisa adicionar 10 idades. Atualmente: ${idades.length}.`;
        return;
    }

    let maiores18 = idades.filter(i => i >= 18).length;
     console.log(idades);

    resultado15.innerHTML = `
        Total de idades cadastradas: ${idades.length} <br>
        Quantidade de pessoas com 18 anos ou mais: ${maiores18}
    `;
});
