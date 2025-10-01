document.getElementById("forms").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio padrão

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value;

  // Mostra o popup com alerta
  alert(" Sua mensagem foi enviada com sucesso.\n Obrigado por entrar em contato.");

  // Limpa os campos
  this.reset();
});
