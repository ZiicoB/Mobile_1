document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("login-modal");
  const fecharBtn = document.getElementById("login-fechar");
  const form = document.getElementById("login-form");
  const senhaInput = document.getElementById("login-senha");
  const toggleSenhaBtn = document.getElementById("toggle-mostrar-senha");
  const nicknameInput = document.getElementById("login-nickname");
  const menuCheckbox = document.getElementById("menu");

  function abrirModal() {
    if (!modal) return;
    if (menuCheckbox) menuCheckbox.checked = false;
    modal.hidden = false;
    nicknameInput?.focus();
  }

  function fecharModal() {
    if (!modal) return;
    modal.hidden = true;
  }

  document.querySelectorAll(".btn-login-trigger, .lista-menu__btn-login").forEach((btn) => {
    btn.addEventListener("click", abrirModal);
  });

  if (fecharBtn) {
    fecharBtn.addEventListener("click", fecharModal);
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        fecharModal();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && !modal.hidden) {
      fecharModal();
    }
  });

  if (toggleSenhaBtn && senhaInput) {
    toggleSenhaBtn.addEventListener("click", () => {
      const mostrando = senhaInput.type === "text";
      senhaInput.type = mostrando ? "password" : "text";
      toggleSenhaBtn.textContent = mostrando ? "Mostrar" : "Ocultar";
      toggleSenhaBtn.setAttribute("aria-label", mostrando ? "Mostrar senha" : "Ocultar senha");
    });
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
});
