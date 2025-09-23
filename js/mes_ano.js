const mes = document.querySelector(".mes");
const ano = document.querySelector(".ano");

const valor = document.querySelector(".valor");
const tempo = document.querySelector(".tempo");

mes.addEventListener("click", () => {
  mes.classList.add("mes-ativo");
  mes.classList.remove("inativo");

  ano.classList.add("inativo");
  ano.classList.remove("ano-ativo");

  valor.textContent = "R$29";
  tempo.textContent = "/ Mês*";
});

ano.addEventListener("click", () => {
  ano.classList.add("ano-ativo");
  ano.classList.remove("inativo");

  mes.classList.add("inativo");
  mes.classList.remove("mes-ativo");

  valor.textContent = "R$232";
  tempo.textContent = "/ Ano*";
});
