document.addEventListener("DOMContentLoaded", () => {
  // --- Dicionário com as imagens de cada categoria ---
  const mapas = {
    batalhas: [
      "imagens2/Mapas/Battlemaps_1.png",
      "imagens2/Mapas/Battlemaps_2.png",
      "imagens2/Mapas/Battlemaps_3.png",
      "imagens2/Mapas/Battlemaps_4.png",
      "imagens2/Mapas/Battlemaps_5.png",
      "imagens2/Mapas/Battlemaps_6.png",
      "imagens2/Mapas/Battlemaps_7.png",
      "imagens2/Mapas/Battlemaps_8.png",
      "imagens2/Mapas/Battlemaps_9.png",
    ],
    mundiais: [
      "imagens2/Mapas/Mundo_1.png",
      "imagens2/Mapas/Mundo_2.png",
      "imagens2/Mapas/Mundo_3.png",
      "imagens2/Mapas/Mundo_4.png",
      "imagens2/Mapas/Mundo_5.png",
      "imagens2/Mapas/Mundo_6.png",
      "imagens2/Mapas/Mundo_7.png",
      "imagens2/Mapas/Mundo_8.png",
      "imagens2/Mapas/Mundo_9.png",
    ],
    cidades: [
      "imagens2/Mapas/Cidade_1.png",
      "imagens2/Mapas/Cidade_2.png",
      "imagens2/Mapas/Cidade_3.png",
      "imagens2/Mapas/Cidade_4.png",
      "imagens2/Mapas/Cidade_5.png",
      "imagens2/Mapas/Cidade_6.png",
      "imagens2/Mapas/Cidade_7.png",
      "imagens2/Mapas/Cidade_8.png",
      "imagens2/Mapas/Cidade_9.png",
    ],
    regiões: [
      "imagens2/Mapas/Regiao_1.png",
      "imagens2/Mapas/Regiao_2.png",
      "imagens2/Mapas/Regiao_3.png",
      "imagens2/Mapas/Regiao_4.png",
      "imagens2/Mapas/Regiao_5.png",
      "imagens2/Mapas/Regiao_6.png",
      "imagens2/Mapas/Regiao_7.png",
      "imagens2/Mapas/Regiao_8.png",
      "imagens2/Mapas/Regiao_9.png",
    ],
    cavernas: [
      "imagens2/Mapas/Cave_1.png",
      "imagens2/Mapas/Cave_2.png",
      "imagens2/Mapas/Cave_3.png",
      "imagens2/Mapas/Cave_4.png",
      "imagens2/Mapas/Cave_5.png",
      "imagens2/Mapas/Cave_6.png",
      "imagens2/Mapas/Cave_7.png",
      "imagens2/Mapas/Cave_8.png",
      "imagens2/Mapas/Cave_9.png",
    ],
  };

  const swiperImagens = document.querySelector(".swiper-wrapper");
  const imgPrincipal = document.querySelector(".colecao__image-2 img");
  const btnPrev = document.querySelector(".carrossel_1 .prev");
  const btnNext = document.querySelector(".carrossel_1 .next");

  let swiperInstance = null;
  let categoriaAtual = "batalhas";
  let indiceAtual = 0;

  function inicializarSwiper() {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
    }

    swiperInstance = new Swiper(".swiper", {
      slidesPerView: 3,
      spaceBetween: 12,
      speed: 280,
      loop: true,
      watchOverflow: true,
      navigation: {
        prevEl: ".prev",
        nextEl: ".next",
      },
      breakpoints: {
        640: {
          slidesPerView: 4,
          spaceBetween: 14,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
    });
  }

  function definirImagemPrincipal(indice) {
    const lista = mapas[categoriaAtual];
    if (!lista || !imgPrincipal || !swiperImagens) return;

    indiceAtual = ((indice % lista.length) + lista.length) % lista.length;
    const srcAtiva = lista[indiceAtual];

    imgPrincipal.src = srcAtiva;
    imgPrincipal.alt = `Mapa de ${categoriaAtual} ${indiceAtual + 1}`;

    swiperImagens.querySelectorAll("img").forEach((img) => {
      img.classList.toggle("thumb-ativa", img.getAttribute("data-src") === srcAtiva);
    });
  }

  function atualizarEstadoBotoes(categoria) {
    document.querySelectorAll(".maps__tag_p").forEach((tag) => {
      tag.classList.toggle("ativo", tag.dataset.categoria === categoria);
    });
    document.querySelectorAll(".mini__box").forEach((box) => {
      box.classList.toggle("ativo", box.dataset.categoria === categoria);
    });
  }

  function carregarCategoria(categoria) {
    const lista = mapas[categoria];
    if (!lista || !swiperImagens || !imgPrincipal) return;

    categoriaAtual = categoria;
    indiceAtual = 0;

    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    swiperImagens.innerHTML = "";

    lista.forEach((src, indice) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");

      const img = document.createElement("img");
      img.src = src;
      img.alt = `Mapa de ${categoria} ${indice + 1}`;
      img.setAttribute("data-src", src);
      img.setAttribute("data-index", String(indice));
      img.classList.add("maps_select-img");
      if (indice === 0) {
        img.classList.add("thumb-ativa");
      }

      slide.appendChild(img);
      swiperImagens.appendChild(slide);
    });

    atualizarEstadoBotoes(categoria);
    definirImagemPrincipal(0);
    inicializarSwiper();
  }

  if (swiperImagens) {
    swiperImagens.addEventListener("click", (event) => {
      const img = event.target.closest("img.maps_select-img");
      if (!img) return;
      const idx = Number(img.getAttribute("data-index"));
      if (!Number.isNaN(idx)) {
        definirImagemPrincipal(idx);
      }
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      definirImagemPrincipal(indiceAtual - 1);
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      definirImagemPrincipal(indiceAtual + 1);
    });
  }

  document.querySelectorAll(".maps__tag_p").forEach((tag) => {
    tag.addEventListener("click", () => {
      carregarCategoria(tag.dataset.categoria);
    });
  });

  document.querySelectorAll(".mini__box").forEach((box) => {
    box.addEventListener("click", () => {
      carregarCategoria(box.dataset.categoria);
      document.querySelector(".colecao__image-2")?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  carregarCategoria("batalhas");

  // --- Alternador Itens / Criaturas na Coleção 2 ---
  const colecoes = {
    itens: {
      titulo: "Itens para sua jornada.",
      descricao: "Itens essenciais para sua mesa de RPG, ideais para enriquecer suas narrativas e tornar cada sessão ainda mais imersiva.",
      imagens: Array.from({ length: 9 }, (_, i) => `imagens2/Itens.criaturas/Itens_${i + 1}.png`),
      altPrefix: "Item de RPG",
    },
    criaturas: {
      titulo: "Criaturas para seus encontros.",
      descricao: "Monstros e aliados prontos para desafiar seus jogadores em masmorras, florestas e reinos distantes.",
      imagens: Array.from({ length: 9 }, (_, i) => `imagens2/Itens.criaturas/Monster_${i + 1}.png`),
      altPrefix: "Criatura de RPG",
    },
  };

  const tabButtons = document.querySelectorAll(".colecao2__tab");
  const slideImages = document.querySelectorAll("#slides .slide-content img");
  const tituloColecao2 = document.querySelector("#slider .titulo-imagem");
  const textoColecao2 = document.querySelector("#slider .colecao__img-text");
  const primeiroSlideRadio = document.getElementById("slide1");

  function selecionarColecao2(tipo) {
    const dados = colecoes[tipo];
    if (!dados) return;

    tabButtons.forEach((btn) => {
      const ativo = btn.dataset.colecao === tipo;
      btn.classList.toggle("ativo", ativo);
      btn.setAttribute("aria-selected", String(ativo));
    });

    slideImages.forEach((img, index) => {
      if (dados.imagens[index]) {
        img.src = dados.imagens[index];
        img.alt = `${dados.altPrefix} ${index + 1}`;
      }
    });

    if (tituloColecao2) tituloColecao2.textContent = dados.titulo;
    if (textoColecao2) textoColecao2.textContent = dados.descricao;
    if (primeiroSlideRadio) primeiroSlideRadio.checked = true;
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => selecionarColecao2(btn.dataset.colecao));
  });

  document.querySelectorAll("[data-nav-colecao]").forEach((link) => {
    link.addEventListener("click", () => {
      selecionarColecao2(link.dataset.navColecao);
    });
  });

  // --- Busca rápida por tema no banner ---
  const campoBusca = document.getElementById("busca-tema");
  if (campoBusca) {
    const rotasBusca = [
      { termos: ["batalha", "batalhas", "combate", "battle"], acao: () => { carregarCategoria("batalhas"); window.rolarParaSecao?.("mapas"); } },
      { termos: ["mundo", "mundial", "mundiais", "continente"], acao: () => { carregarCategoria("mundiais"); window.rolarParaSecao?.("mapas"); } },
      { termos: ["cidade", "cidades", "vila", "urbano"], acao: () => { carregarCategoria("cidades"); window.rolarParaSecao?.("mapas"); } },
      { termos: ["regiao", "região", "regioes", "regiões", "reino"], acao: () => { carregarCategoria("regiões"); window.rolarParaSecao?.("mapas"); } },
      { termos: ["caverna", "cavernas", "dungeon", "masmorra", "cave"], acao: () => { carregarCategoria("cavernas"); window.rolarParaSecao?.("mapas"); } },
      { termos: ["item", "itens", "arma", "espada", "equipamento"], acao: () => { selecionarColecao2("itens"); window.rolarParaSecao?.("itens"); } },
      { termos: ["criatura", "criaturas", "monstro", "monstros"], acao: () => { selecionarColecao2("criaturas"); window.rolarParaSecao?.("itens"); } },
      { termos: ["plano", "planos", "preco", "preço", "pro", "free"], acao: () => { window.rolarParaSecao?.("osplanos"); } },
      { termos: ["faq", "pergunta", "duvida", "dúvida"], acao: () => { window.rolarParaSecao?.("faq"); } },
    ];

    campoBusca.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      const termo = campoBusca.value.trim().toLowerCase();
      if (!termo) return;

      const match = rotasBusca.find((r) => r.termos.some((t) => termo.includes(t)));
      if (match) {
        match.acao();
      } else {
        window.rolarParaSecao?.("mapas");
      }
    });
  }

  // --- Fecha o menu mobile ao clicar em um link ---
  const menuCheckbox = document.getElementById("menu");
  document.querySelectorAll(".lista-menu__links").forEach((link) => {
    link.addEventListener("click", () => {
      if (menuCheckbox) menuCheckbox.checked = false;
    });
  });
});
