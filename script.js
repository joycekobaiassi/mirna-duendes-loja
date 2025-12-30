let contador = 0;

// Mostrar/esconder descrição do produto clicado
function mostrarDescricao(botao) {
  const produto = botao.closest('.produto');
  const descricao = produto.querySelector('.descricao');

  // Fecha todas as outras descrições
  document.querySelectorAll('.descricao.aberta').forEach(d => {
    if (d !== descricao) d.classList.remove('aberta');
  });

  // Alterna a descrição clicada
  descricao.classList.toggle('aberta');
}

// Levar magia: adiciona ao carrinho e mostra estrelinhas animadas
function levarMagia(botao, nomeProduto) {
  const produto = botao.closest('.produto');

  // Atualiza carrinho
  contador++;
  document.getElementById('contador').innerText = contador;

  // Alerta
  alert(`✨ Magia do "${nomeProduto}" levada para sua casa! ✨`);

  // Mostra estrelinhas animadas
  const magiaDiv = produto.querySelector('.magia');
  magiaDiv.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const estrela = document.createElement('span');
    estrela.innerText = '⭐';
    estrela.style.opacity = 0;
    estrela.style.transition = `opacity 0.5s ease ${i*0.1}s`;
    magiaDiv.appendChild(estrela);
    setTimeout(()=>{estrela.style.opacity = 1;}, 50);
  }

  // Toca som ambiente se pausado
  const audio = document.getElementById('musica');
  if(audio.paused) audio.play();
}

// Funções do carrinho
function esvaziarCarrinho() {
  contador = 0;
  document.getElementById('contador').innerText = contador;
}

function finalizarCompra() {
  if(contador === 0){
    alert("S

