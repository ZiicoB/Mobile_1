const formContato = document.getElementById("forms");
const feedback = document.getElementById("form-feedback");

function mostrarFeedback(texto, tipo) {
  if (!feedback) {
    alert(texto);
    return;
  }
  feedback.textContent = texto;
  feedback.className = `form__feedback ${tipo}`;
}

if (formContato) {
  formContato.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const telefone = document.getElementById("telnumber")?.value.trim() || "";
    const mensagem = document.getElementById("mensagem")?.value.trim() || "";

    if (!name || !email || !mensagem) {
      mostrarFeedback("Preencha nome, e-mail e mensagem antes de enviar.", "erro");
      return;
    }

    if (telefone && typeof validarTelefone === "function" && !validarTelefone()) {
      mostrarFeedback("Informe um telefone válido no formato (00) 9-0000-0000 ou deixe o campo em branco.", "erro");
      return;
    }

    mostrarFeedback("Sua mensagem foi enviada com sucesso. Obrigado por entrar em contato!", "sucesso");
    this.reset();

    const contador = document.getElementById("contador");
    const textarea = document.getElementById("mensagem");
    if (contador && textarea) {
      contador.textContent = textarea.maxLength;
    }
  });
}
