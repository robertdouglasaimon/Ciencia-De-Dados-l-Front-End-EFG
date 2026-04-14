let botao12 = document.getElementById('calcular12');

botao12.addEventListener('click', () => {
    let numeros = [];

    for (let i = 1000; i <= 2000; i++) {
        if (i % 11 === 5) {
            numeros.push(i);
        }
    }

    document.querySelector('#resultado12').innerHTML = `
        Os números que dividem 11 por 5 entre 1000 e 2000 são: ${numeros.join(', ')}
        <br>
        <br>
        São exatamente <strong>${numeros.length}</strong> números.
    `;
});