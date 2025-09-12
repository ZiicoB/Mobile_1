const faqs = document.querySelectorAll(".container_questions");

faqs.forEach((container_questions) => {
  container_questions.addEventListener("click", () => {
    container_questions.classList.toggle("active");
  });
});
