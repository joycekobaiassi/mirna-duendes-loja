function levarMagia() {
  ativarMagia();

  const mensagem =
    "Olá! Me encantei pelo Duende da Prosperidade ✨ Gostaria de levar essa magia para minha casa.";
  const telefone = "5548992126571";
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  setTimeout(() => {
    window.location.href = url;
  }, 700);
}
