let botao11 = document.getElementById('calcular11');

botao11.addEventListener('click', ( ) => {
    let inicio = parseInt(document.getElementById('inicio-lista').value);
    let fim = parseInt(document.getElementById('final-lista').value);

    // Gerando a lista
    let pares = [];
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }

    console.log(`Esses são os números pares entre ${inicio} e ${fim}: ${pares}`);

    document.getElementById('resultado11').innerHTML = `
        Números pares entre ${inicio} e ${fim}: ${pares.join(', ')};
    `;

});