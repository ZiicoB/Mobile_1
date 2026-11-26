const faqs = document.querySelectorAll(".container_questions");

faqs.forEach((container) => {
  container.addEventListener("click", () => {
    const estavaAtivo = container.classList.contains("active");

    faqs.forEach((item) => {
      item.classList.remove("active");
    });

    if (!estavaAtivo) {
      container.classList.add("active");
    }
  });
});
