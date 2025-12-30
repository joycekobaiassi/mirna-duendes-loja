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

function levarMagia(botao, nomeProduto) {
  const produto = botao.closest(".produto");
  const magia = produto.querySelector(".magia");

  for (let i = 0; i < 8; i++) {
    const estrela = document.createElement("span");
    estrela.classList.add("estrela");
    estrela.textContent = "✨";
    estrela.style.left = Math.random() * 100 + "%";
    magia.appendChild(estrela);

    setTimeout(() => estrela.remove(), 1200);
  }

  adicionarAoCarrinho(nomeProduto);
}

function esvaziarCarrinho() {
  contador = 0;
  document.getElementById("contador").innerText = contador;
}
function toggleMusica() {
  const musica = document.getElementById("musica");

  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}
function toggleMusica() {
  const musica = document.getElementById("musica");

  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}
function levarMagia(botao, nomeProduto) {
    const produto = botao.closest('.produto');

    // Adiciona ao carrinho
    const contador = document.getElementById('contador');
    contador.innerText = parseInt(contador.innerText) + 1;

    // Mostra estrelinhas animadas
    const magiaDiv = produto.querySelector('.magia');
    magiaDiv.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const estrela = document.createElement('span');
        estrela.innerText = '⭐';
        estrela.style.opacity = 0;
        estrela.style.transition = 'opacity 0.5s ease ' + (i * 0.1) + 's';
        magiaDiv.appendChild(estrela);
        // Forçar animação
        setTimeout(() => { estrela.style.opacity = 1; }, 50);
    }
}
// Mostrar/esconder descrição somente do produto clicado
function mostrarDescricao(botao) {
  const produto = botao.closest('.produto');
  const descricao = produto.querySelector('.descricao');
  descricao.style.display = descricao.style.display === 'block' ? 'none' : 'block';
}

// Adicionar magia ao carrinho e mostrar estrelinhas animadas
function levarMagia(botao, nomeProduto) {
  const produto = botao.closest('.produto');

  // Atualiza carrinho
  const contador = document.getElementById('contador');
  contador.innerText = parseInt(contador.innerText) + 1;

  // Mostra estrelinhas animadas
  const magiaDiv = produto.querySelector('.magia');
  magiaDiv.innerHTML = ''; // limpa antes

  for (let i = 0; i < 5; i++) {
    const estrela = document.createElement('span');
    estrela.innerText = '⭐';
    estrela.style.opacity = 0;
    estrela.style.transition = `opacity 0.5s ease ${i * 0.1}s`;
    magiaDiv.appendChild(estrela);
    setTimeout(() => { estrela.style.opacity = 1; }, 50);
  }

  // Aqui você pode tocar som se quiser, sem travar a animação
  // const audio = new Audio('magia.mp3');
  // audio.play();
}



