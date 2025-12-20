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
