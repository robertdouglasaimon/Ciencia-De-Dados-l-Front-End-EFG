/* Dicionário de transações */
const transacoes = [
  { descricao: "Desenvolvimento de site", valor: 12000, categoria: "Venda", data: "13/04/2022" },
  { descricao: "Hamburguer", valor: -59, categoria: "Alimentação", data: "10/04/2022" },
  { descricao: "Aluguel do apartamento", valor: -1200, categoria: "Casa", data: "27/03/2022" },
  { descricao: "Computador", valor: 5000, categoria: "Venda", data: "15/03/2022" },
  { descricao: "Janta", valor: -89, categoria: "Alimentação", data: "13/03/2022" },
  { descricao: "Salário", valor: 7500, categoria: "Salário", data: "15/02/2022" },
  { descricao: "Fone de ouvido", valor: -200, categoria: "Itens", data: "07/01/2022" }
];

/* Preenchendo a tabela */
const corpoTabela = document.getElementById("tabela-corpo");

transacoes.forEach(transacao => {
  const linha = document.createElement("tr");

  linha.innerHTML = `
    <td>${transacao.descricao}</td>

    <!-- Verifica se o valor é negativo ou positivo: -->
    <td style="color: ${transacao.valor < 0 ? 'red' : 'green'}">
      ${transacao.valor < 0 ? '-' : ''} R$ ${Math.abs(transacao.valor).toFixed(2)}
    </td>

    <td>${transacao.categoria}</td>
    <td>${transacao.data}</td>
  `;

  corpoTabela.appendChild(linha);
});

/* Funções referentes ao modal do botão de nova transação ---------------------------------------*/
const botaoNovaTransacao = document.getElementById("botao");
const modal = document.getElementById("modal");
const form = document.getElementById("form-transacao");
const tipoBotoes = document.querySelectorAll(".tipo");

let tipoSelecionado = "entrada";

// Abrir modal
botaoNovaTransacao.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Fechar modal ao clicar fora
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Selecionar tipo
tipoBotoes.forEach(btn => {
  btn.addEventListener("click", () => {
    tipoBotoes.forEach(b => b.classList.remove("ativo"));
    btn.classList.add("ativo");
    tipoSelecionado = btn.dataset.tipo;
  });
});

// Cadastrar nova transação
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const descricao = document.getElementById("descricao").value;
  const preco = parseFloat(document.getElementById("preco").value);
  const categoria = document.getElementById("categoria").value;
  const data = new Date().toLocaleDateString("pt-BR");

  const novaTransacao = {
    descricao,
    valor: tipoSelecionado === "saida" ? -preco : preco,
    categoria,
    data
  };

  transacoes.push(novaTransacao);

  const linha = document.createElement("tr");
  linha.innerHTML = `
    <td>${novaTransacao.descricao}</td>
    <td style="color: ${novaTransacao.valor < 0 ? 'red' : 'green'}">
      ${novaTransacao.valor < 0 ? '-' : ''} R$ ${Math.abs(novaTransacao.valor).toFixed(2)}
    </td>
    <td>${novaTransacao.categoria}</td>
    <td>${novaTransacao.data}</td>
  `;
  corpoTabela.appendChild(linha);

  modal.style.display = "none";
  form.reset();
  tipoBotoes.forEach(b => b.classList.remove("ativo"));
  tipoBotoes[0].classList.add("ativo");
  tipoSelecionado = "entrada";
});



/*--------------------------------------------------------------------------------------------*/