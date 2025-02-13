const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");

yesButton.addEventListener("click", function () {
  window.location.href = "inicio.html"; // Redirige a inicio.html cuando se presiona "Sí"
});

noButton.addEventListener("mouseenter", function () {
  // Movimiento del botón "No"
  const noButtonRect = noButton.getBoundingClientRect();
  const randomX = Math.random() * (window.innerWidth - noButtonRect.width);
  const randomY = Math.random() * (window.innerHeight - noButtonRect.height);
  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;

  // Agrandar el botón "Sí"
  yesButton.style.transform = "scale(1.5)"; // Directamente aplica el transform
});

noButton.addEventListener("mouseleave", function () {
  // Cuando el cursor sale del botón "No", el botón "Sí" vuelve a su tamaño normal
  yesButton.style.transform = "scale(1)"; // Vuelve al tamaño original
});
