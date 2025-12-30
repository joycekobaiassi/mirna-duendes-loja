let contador = 0;

// Mostrar/esconder descrição do produto clicado
function mostrarDescricao(botao) {
  const produto = botao.closest('.produto');
  const descricao = produto.querySelector('.descricao');
  descricao.style.display = descricao.style.display === 'block' ? 'none' : 'block';
}

// Levar magia: adiciona ao carrinho e mostra estrelinhas animadas
function levarMagia(botao, nomeProduto) {
  const produto = botao.closest('.produto');

  // Atualiza carrinho
  contador++;
  document.getElementById('contador').innerText = contador;

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

  // Som opcional sem travar
  const audio = document.getElementById('musica');
  if (audio.paused) audio.play();
}

// Funções do carrinho
function esvaziarCarrinho() {
  contador = 0;
  document.getElementById('contador').innerText = contador;
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

// Som ambiente toggle
function toggleMusica() {
  const musica = document.getElementById('musica');
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}
function mostrarDescricao(botao) {
  const produto = botao.closest('.produto');
  const descricao = produto.querySelector('.descricao');

  // Fecha outras descrições abertas
  document.querySelectorAll('.descricao.aberta').forEach(d => {
    if (d !== descricao) d.classList.remove('aberta');
  });

  // Alterna a descrição clicada
  descricao.classList.toggle('aberta');
}



