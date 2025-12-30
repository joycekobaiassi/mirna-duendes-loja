let contador = 0;

// Mostrar/esconder descrição do produto
function mostrarDescricao(botao) {
  const produto = botao.closest('.produto');
  const descricao = produto.querySelector('.descricao');

  // Fecha todas as outras
  document.querySelectorAll('.descricao.aberta').forEach(d => {
    if (d !== descricao) d.classList.remove('aberta');
  });

  descricao.classList.toggle('aberta');
}

// Levar magia: adiciona ao carrinho e anima estrelinhas
function levarMagia(botao, nomeProduto) {
  const produto = botao.closest('.produto');

  // Atualiza carrinho
  contador++;
  document.getElementById('contador').innerText = contador;

  // Mostra estrelinhas
  const magiaDiv = produto.querySelector('.magia');
  magiaDiv.innerHTML = '';
  for (let i=0; i<5; i++) {
    const estrela = document.createElement('span');
    estrela.innerText = '⭐';
    estrela.classList.add('estrela');
    estrela.style.left = `${Math.random()*100}%`;
    magiaDiv.appendChild(estrela);
  }

  // Toca som
  const audio = document.getElementById('musica');
  if(audio.paused) audio.play();

  alert(`✨ Magia do "${nomeProduto}" levada para sua casa! ✨`);
}

// Carrinho
function esvaziarCarrinho() {
  contador=0;
  document.getElementById('contador').innerText = contador;
}

function finalizarCompra() {
  if(contador===0){ alert("Seu carrinho está vazio 🛒"); return; }
  const telefone = "5548992126571";
  const mensagem = `Olá! Gostaria de finalizar a compra de ${contador} produto(s) da Mirna Duendes ✨`;
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(url,"_blank");
}

// Som ambiente
function toggleMusica() {
  const musica = document.getElementById('musica');
  if(musica.paused) musica.play();
  else musica.pause();
}
