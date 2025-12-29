let contador = 0;

function comprarProduto(botao, nome) {
    contador++;
    document.getElementById("contador").innerText = contador;

    // anima produto
    const produto = botao.parentElement;
    produto.classList.add("animado");

    // anima carrinho
    const carrinho = document.getElementById("carrinho");
    carrinho.classList.add("animado");

    // remove animação depois
    setTimeout(() => {
        produto.classList.remove("animado");
        carrinho.classList.remove("animado");
    }, 400);
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
function removerProduto() {
    if (contador > 0) {
        contador--;
        document.getElementById("contador").innerText = contador;
    } else {
        alert("O carrinho já está vazio 🛒");
    }
}
function mostrarDescricao() {
  const descricao = document.getElementById("descricao");

  if (descricao.style.display === "none" || descricao.style.display === "") {
    descricao.style.display = "block";
  } else {
    descricao.style.display = "none";
  }
}
function ativarMagia() {
  const magia = document.getElementById("magia");

  for (let i = 0; i < 6; i++) {
    const estrela = document.createElement("span");
    estrela.classList.add("estrela");
    estrela.innerText = "✨";

    estrela.style.left = Math.random() * 120 + "px";

    magia.appendChild(estrela);

    setTimeout(() => {
      estrela.remove();
    }, 1200);
  }
}
function ativarMagia() {
  const magia = document.getElementById("magia");

  for (let i = 0; i < 6; i++) {
    const estrela = document.createElement("span");
    estrela.classList.add("estrela");
    estrela.innerText = "✨";

    estrela.style.left = Math.random() * 120 + "px";

    magia.appendChild(estrela);

    setTimeout(() => {
      estrela.remove();
    }, 1200);
  }
}



