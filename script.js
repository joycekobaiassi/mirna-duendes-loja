alert("JS carregou");

let contador = 0;

function comprarProduto(botao, nome) {
  contador++;
  document.getElementById("contador").innerText = contador;
}

function removerProduto() {
  if (contador > 0) {
    contador--;
    document.getElementById("contador").innerText = contador;
  }
}

function finalizarCompra() {
  if (contador === 0) {
    alert("Seu carrinho está vazio 🛒");
    return;
  }

  const mensagem = `Olá! Gostaria de finalizar a compra de ${contador} produto(s) da Mirna Duendes ✨`;
  const telefone = "5548992126571";
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

function mostrarDescricao() {
  const descricao = document.getElementById("descricao");
  descricao.style.display =
    descricao.style.display === "block" ? "none" : "block";
}

/* ✅ ESTA É A FUNÇÃO QUE FALTAVA */
function levarMagia() {
  ativarMagia();
  comprarProduto(null, "Duende da Prosperidade");
}

function ativarMagia() {
  const magia = document.getElementById("magia");

  for (let i = 0; i < 6; i++) {
    const estrela = document.createElement("span");
    estrela.className = "estrela";
    estrela.innerText = "✨";
    estrela.style.left = Math.random() * 120 + "px";

    magia.appendChild(estrela);

    setTimeout(() => estrela.remove(), 1200);
  }
}

