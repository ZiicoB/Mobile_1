(function () {
  function calcularDestinoScroll(id) {
    const alvo = document.getElementById(id);
    if (!alvo) return null;

    const header = document.querySelector(".cabecalho");
    const headerHeight = header ? header.offsetHeight : 68;
    const rect = alvo.getBoundingClientRect();
    const elTop = rect.top + window.scrollY;
    const elHeight = rect.height;
    const vpHeight = window.innerHeight;

    if (id === "itens" || id === "mapas") {
      const disponivel = vpHeight - headerHeight;
      const centro = elTop + (elHeight - disponivel) / 2 - headerHeight + 36;
      const minimo = elTop - headerHeight + 12;
      const maximo = elTop + 72;
      return Math.max(0, Math.min(maximo, Math.max(minimo, centro)));
    }

    if (id === "osplanos") {
      return Math.max(0, elTop - headerHeight - 28);
    }

    return Math.max(0, elTop - headerHeight - 20);
  }

  function rolarParaSecao(id, comportamento = "smooth") {
    const destino = calcularDestinoScroll(id);
    if (destino === null) return;
    window.scrollTo({ top: destino, behavior: comportamento });
  }

  window.rolarParaSecao = rolarParaSecao;

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      if (!document.getElementById(id)) return;

      link.addEventListener("click", (event) => {
        event.preventDefault();
        const menuCheckbox = document.getElementById("menu");
        if (menuCheckbox) menuCheckbox.checked = false;
        rolarParaSecao(id, "smooth");
        history.replaceState(null, "", `#${id}`);
      });
    });

    if (window.location.hash) {
      const idInicial = window.location.hash.slice(1);
      if (document.getElementById(idInicial)) {
        setTimeout(() => rolarParaSecao(idInicial, "auto"), 60);
      }
    }
  });
})();
