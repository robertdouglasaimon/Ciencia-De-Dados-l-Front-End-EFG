async function acessarLink() {
    try {
        const resposta = await fetch('https://pokeapi.co/api/v2/ability/');
        const data = await resposta.json();
        console.log(data);

        const habilidades = data.results.slice(0, 5);
        console.log(habilidades);

        habilidades.forEach((data, index) => {
            const cardId = `card${index + 1}`;
            const card = document.getElementById(cardId);

            const nome = data.name;
            const link = data.url;

            const habilidadeElemento = document.createElement('p');
            habilidadeElemento.textContent = `${nome} - ${link}`;

            card.querySelector('.habilidade').appendChild(habilidadeElemento);

            console.log(habilidades)
        });
    } catch (error) {
        console.error(`Erro ao acessar o link: ${error}`);
    }
}


