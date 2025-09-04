document.addEventListener("DOMContentLoaded", () => {
  const imgPrincipal = document.querySelector(".colecao__image-3 img");
  const swiperWrapper = document.querySelector(".swiper1 .swiper-wrapper");

  // Inicializa o Swiper
  const swiper = new Swiper(".swiper1", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: ".next2",
      prevEl: ".prev2",
    },
    loop: false,
    // impede o swipe para slides com .swiper-no-swiping
    noSwipingClass: "swiper-no-swiping",
  });

  // Função para atualizar imagens clicando nas miniaturas
  function atualizarMiniaturas() {
    swiperWrapper.querySelectorAll(".swiper-slide img").forEach((img) => {
      img.addEventListener("click", () => {
        imgPrincipal.src = img.src;
      });
    });
  }

  // Chama a função inicialmente
  atualizarMiniaturas();

  // Se você quiser adicionar ou atualizar slides dinamicamente, chame novamente:
  // atualizarMiniaturas();
});
