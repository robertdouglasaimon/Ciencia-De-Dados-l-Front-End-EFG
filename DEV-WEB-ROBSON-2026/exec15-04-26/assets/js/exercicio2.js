let botao2 = document.getElementById('converter');

botao2.addEventListener('click', () => {
    let segundos =  parseInt(document.getElementById("segundos").value);

    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let segundosRestantes = segundos % 60;

    document.querySelector('#resultado2').innerHTML = `
        Esse é o resultado da conversão de segundos para horas, minutos e segundos restantes:
        <br>
        ${horas} horas.
        <br>
        ${minutos} minutos.
        <br>
        ${segundosRestantes} segundos restantes.
    `;
});