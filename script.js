let contador = 0;

// Adicionar produto ao carrinho
function comprarProduto(nomeProduto) {
  contador++;
  document.getElementById("contador").innerText = contador;
  console.log(`Produto adicionado: ${nomeProduto}`);
}

// Finalizar compra
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

// Esvaziar carrinho
function esvaziarCarrinho() {
  contador = 0;
  document.getElementById("contador").innerText = contador;
}

// Som ambiente
function toggleMusica() {
  const musica = document.getElementById("musica");
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}

// Mostrar/esconder descrição do produto clicado
function mostrarDescricao(botao) {
  const produto = botao.closest(".produto");
  const descricao = produto.querySelector(".descricao");
  descricao.style.display = descricao.style.display === "block" ? "none" : "block";
}

// Levar magia: adiciona ao carrinho e anima estrelinhas
function levarMagia(botao, nomeProduto) {
  const produto = botao.closest(".produto");

  // Atualiza carrinho
  comprarProduto(nomeProduto);

  // Mostra estrelinhas animadas
  const magiaDiv = produto.querySelector(".magia");
  magiaDiv.innerHTML = ""; // limpa antes
  for (let i = 0; i < 5; i++) {
    const estrela = document.createElement("span");
    estrela.innerText = "⭐";
    estrela.style.opacity = 0;
    estrela.style.transition = `opacity 0.5s ease ${i * 0.1}s`;
    magiaDiv.appendChild(estrela);
    setTimeout(() => { estrela.style.opacity = 1; }, 50);
  }
}
