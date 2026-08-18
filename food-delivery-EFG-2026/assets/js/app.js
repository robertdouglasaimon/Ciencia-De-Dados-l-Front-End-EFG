// Fiz um fallback de leve para quando não tiver uma disponivel, usar a outra :)
function getApiUrl() {
  const local = "http://localhost:3000/api/orders";
  const render = "https://ciencia-de-dados-l-front-end-efg.onrender.com/api/orders";
  return window.location.hostname === "localhost" ? local : render;
}

const API_URL = getApiUrl();


// Selecionando elementos do DOM
const form = document.getElementById("form-pedido");
const input = document.getElementById("input-pedido");
const lista = document.getElementById("lista-pedidos");
const contador = document.getElementById("contador");

async function carregarPedidos() {
  const res = await fetch(API_URL);
  const pedidos = await res.json();
  render(pedidos);
}

function render(pedidos) {
  lista.innerHTML = "";
  pedidos.forEach((pedido) => {
    const li = document.createElement("li");
    li.dataset.id = pedido.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = pedido.complete;
    checkbox.addEventListener("change", () => alterarPedido(pedido.id));

    const span = document.createElement("span");
    span.textContent = pedido.titulo;
    if (pedido.complete) span.classList.add("complete");

    const btn = document.createElement("button");
    btn.textContent = "Remover";
    btn.classList.add("remover");
    btn.addEventListener("click", () => removerPedido(pedido.id));

    li.append(checkbox, span, btn);
    lista.appendChild(li);
  });

  const pendentes = pedidos.filter((p) => !p.complete).length;
  contador.textContent = `${pendentes} pendentes de ${pedidos.length}`;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const titulo = input.value.trim();
  if (!titulo) return;
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo }),
  });
  input.value = "";
  carregarPedidos();
});

async function alterarPedido(id) {
  await fetch(`${API_URL}/${id}`, { method: "PATCH" });
  carregarPedidos();
}

async function removerPedido(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  carregarPedidos();
}

carregarPedidos();
