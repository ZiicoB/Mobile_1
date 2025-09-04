document.addEventListener("DOMContentLoaded", () => {
  // --- Dicionário com as imagens de cada categoria ---
  const mapas = {
    batalhas: [
      "/imagens2/Mapas/Battlemaps_1.png",
      "/imagens2/Mapas/Battlemaps_2.png",
      "/imagens2/Mapas/Battlemaps_3.png",
      "/imagens2/Mapas/Battlemaps_4.png",
      "/imagens2/Mapas/Battlemaps_5.png",
      "/imagens2/Mapas/Battlemaps_6.png",
      "/imagens2/Mapas/Battlemaps_7.png",
      "/imagens2/Mapas/Battlemaps_8.png",
      "/imagens2/Mapas/Battlemaps_9.png",
    ],
    mundiais: [
      "/imagens2/Mapas/Mundo_1.png",
      "/imagens2/Mapas/Mundo_2.png",
      "/imagens2/Mapas/Mundo_3.png",
      "/imagens2/Mapas/Mundo_4.png",
      "/imagens2/Mapas/Mundo_5.png",
      "/imagens2/Mapas/Mundo_6.png",
      "/imagens2/Mapas/Mundo_7.png",
      "/imagens2/Mapas/Mundo_8.png",
      "/imagens2/Mapas/Mundo_9.png",
    ],

    cidades: [
      "/imagens2/Mapas/Cidade_1.png",
      "/imagens2/Mapas/Cidade_2.png",
      "/imagens2/Mapas/Cidade_3.png",
      "/imagens2/Mapas/Cidade_4.png",
      "/imagens2/Mapas/Cidade_5.png",
      "/imagens2/Mapas/Cidade_6.png",
      "/imagens2/Mapas/Cidade_7.png",
      "/imagens2/Mapas/Cidade_8.png",
      "/imagens2/Mapas/Cidade_9.png",
    ],
    regiões: [
      "/imagens2/Mapas/Regiao_1.png",
      "/imagens2/Mapas/Regiao_2.png",
      "/imagens2/Mapas/Regiao_3.png",
      "/imagens2/Mapas/Regiao_4.png",
      "/imagens2/Mapas/Regiao_5.png",
      "/imagens2/Mapas/Regiao_6.png",
      "/imagens2/Mapas/Regiao_7.png",
      "/imagens2/Mapas/Regiao_8.png",
      "/imagens2/Mapas/Regiao_9.png",
    ],
    cavernas: [
      "/imagens2/Mapas/Cave_1.png",
      "/imagens2/Mapas/Cave_2.png",
      "/imagens2/Mapas/Cave_3.png",
      "/imagens2/Mapas/Cave_4.png",
      "/imagens2/Mapas/Cave_5.png",
      "/imagens2/Mapas/Cave_6.png",
      "/imagens2/Mapas/Cave_7.png",
      "/imagens2/Mapas/Cave_8.png",
      "/imagens2/Mapas/Cave_9.png",
    ],
  };

  const swiperImagens = document.querySelector(".swiper-wrapper");
  const imgPrincipal = document.querySelector(".colecao__image-2 img");

  // Função para carregar imagens no Swiper
  function carregarCategoria(categoria) {
    swiperImagens.innerHTML = ""; // limpa slides

    mapas[categoria].forEach((src) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");

      const img = document.createElement("img");
      img.src = src;
      img.classList.add("maps_select-img");

      // Clique na miniatura → muda imagem grande
      img.addEventListener("click", () => {
        imgPrincipal.src = src;
      });

      slide.appendChild(img);
      swiperImagens.appendChild(slide);
    });

    swiper.update(); // atualiza Swiper
    imgPrincipal.src = mapas[categoria][0]; // muda imagem grande para a primeira
  }

  // Eventos nos botões de categoria
  document.querySelectorAll(".maps__tag_p").forEach((tag) => {
    tag.addEventListener("click", () => {
      const categoria = tag.innerText.toLowerCase(); // pega o texto do botão
      carregarCategoria(categoria);
    });
  });

  document.querySelectorAll(".mini__box").forEach((tag) => {
    tag.addEventListener("click", () => {
      const categoria = tag.innerText.toLowerCase();
      carregarCategoria(categoria);
    });
  });

  // Carregar "batalhas" ao iniciar
  carregarCategoria("batalhas");
});
