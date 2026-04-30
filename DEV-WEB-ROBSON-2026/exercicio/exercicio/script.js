
// Função assincrona para pedir pra API os dados das 5 primeiras habilidades dos pokemons:
async function buscarHabilidades() {
    try {
        const resposta = await fetch('https://pokeapi.co/api/v2/ability/');
        const dados = await resposta.json();

        // Aqui eu to cortando só os itens que eu quero, que no caso é de 0 a 5, as 5 primeiras habilidades:
        const habilidades = dados.results.slice(0, 5);
        console.log(habilidades); // testando se cortou certinho.


        const lista = document.querySelector('#resultado'); //aqui eu to pegando o elemento lista que eu criei lá no html para depois jogar nele os dados das habilidades.
        lista.innerHTML = ''; // Por isso eu digo aqui que a lista tem que começar vazia, para não ficar acumulando os dados toda vez que clicar no botão.

        // Loopzão para jogar os dados lá de habilidades dentro da lista, usando o index para numerar as habilidades:
        habilidades.forEach((habilidade, index) => {
            lista.innerHTML += `<li>Habilidade ${index + 1}: ${habilidade.name}</li>`;
        });

        // Index é onde o numero ta armazenado e é o numero atual. E o +1 é para começar a contar do 1, porque o index começa do 0, então para ficar mais compreensivel lá pro usuario no front eu coloco o +1. Visualmente lá vai começar do 1, mas aqui no código ele vai startar do 0.
    } catch (error) {
        console.error(`Erro: Não foi possível buscar as habilidades. Erro: ${error}`);
    }
}



const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');
// Função para usar os dados das habilidades que tão salvos dentro da variável habilidades:
botao.addEventListener('click', () => { // Resolvi fazer pelo click porque dai dá pra pessoa ver o processo, como acontece quando tu faz uma requisição que demora um pouco e precisa ver o resultado em um lugar especifico.

    buscarHabilidades(); // Aqui eu to chamando toda função habilidades e o que eu preparei lá dentro dela, que é a requisição, o tratamento dos dados e o loop para jogar os dados na tela.    

    mensagem.innerHTML = 'Habilidades buscadas! Verifique o console ou olhe a lista abaixo:'; // Aqui é só para mostra uma mensagem no front pro usuário dizendo que o pedido deu certo e que ele pode ver o resultado tanto no F12 do navegador quanto na lista que eu criei abaixo no HTML.
});

