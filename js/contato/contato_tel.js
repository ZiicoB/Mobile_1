const telInput = document.getElementById("telnumber");

if (telInput) {
  telInput.addEventListener("input", () => {
    const digits = telInput.value.replace(/\D/g, "").slice(0, 11);

    let formatted = digits;
    if (digits.length > 7) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
    } else if (digits.length > 3) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 3)}-${digits.slice(3)}`;
    } else if (digits.length > 2) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }

    telInput.value = formatted;
  });
}

function validarTelefone() {
  if (!telInput) return true;
  const regex = /^\(\d{2}\) \d-\d{4}-\d{4}$/;
  return regex.test(telInput.value);
}
