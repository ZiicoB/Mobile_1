const mes = document.querySelector(".mes");
const ano = document.querySelector(".ano");
const valor = document.querySelector(".valor");
const tempo = document.querySelector(".tempo");
const infoPromo = document.querySelector(".info-promo");

if (mes && ano && valor && tempo) {
  mes.addEventListener("click", () => {
    mes.classList.add("mes-ativo");
    mes.classList.remove("inativo");

    ano.classList.add("inativo");
    ano.classList.remove("ano-ativo");

    valor.textContent = "R$ 29";
    tempo.textContent = "/ Mês*";
    if (infoPromo) {
      infoPromo.innerHTML = 'Economize <strong>33%</strong> mudando para o plano anual!';
    }
  });

  ano.addEventListener("click", () => {
    ano.classList.add("ano-ativo");
    ano.classList.remove("inativo");

    mes.classList.add("inativo");
    mes.classList.remove("mes-ativo");

    valor.textContent = "R$ 232";
    tempo.textContent = "/ Ano*";
    if (infoPromo) {
      infoPromo.innerHTML = 'Ganhe <strong>4 meses de graça</strong> no plano anual!';
    }
  });
}
