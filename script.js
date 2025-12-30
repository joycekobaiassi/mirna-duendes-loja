let contador = 0;

// Abrir/fechar descrição
function mostrarDescricao(botao){
  const produto = botao.closest('.produto');
  const descricao = produto.querySelector('.descricao');

  // fecha outras descrições abertas
  document.querySelectorAll('.descricao.aberta').forEach(d=>{
    if(d!==descricao) d.classList.remove('aberta');
  });

  descricao.classList.toggle('aberta');
}

// Adicionar magia, estrelinhas e carrinho
function levarMagia(botao,nomeProduto){
  const produto = botao.closest('.produto');
  contador++;
  document.getElementById('contador').innerText = contador;

  // Estrelinhas animadas
  const magia = produto.querySelector('.magia');
  magia.innerHTML='';
  for(let i=0;i<5;i++){
    const estrela = document.createElement('span');
    estrela.innerText='⭐';
    estrela.style.position='absolute';
    estrela.style.bottom='0';
    estrela.style.left=(20*i)+'%';
    estrela.style.fontSize='20px';
    estrela.style.opacity='0';
    estrela.style.transition=`opacity 0.5s ease ${i*0.1}s, transform 1.2s ease`;
    magia.appendChild(estrela);
    setTimeout(()=>{
      estrela.style.opacity='1';
      estrela.style.transform='translateY(-40px) scale(1.5)';
    },50);
    setTimeout(()=>estrela.remove(),1200);
  }

  // Toca som ambiente
  const audio = document.getElementById('musica');
  if(audio.paused) audio.play();
}

// Carrinho
function esvaziarCarrinho(){
  contador=0;
  document.getElementById('contador').innerText=contador;
}

function finalizarCompra(){
  if(contador===0){
    alert("Seu carrinho está vazio 🛒"); return;
  }
  const mensagem=`Olá! Gostaria de finalizar a compra de ${contador} produto(s) da Mirna Duendes ✨`;
  const telefone="5548992126571";
  const url=`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(url,"_blank");
}

// Som
function toggleMusica(){
  const musica=document.getElementById('musica');
  if(musica.paused) musica.play();
  else musica.pause();
}
