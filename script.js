let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let mensaje = document.getElementById("mensaje");

let vueltas = 5; // Vueltas por click
let anguloPorNumero = 360 / 8;
let numeroTrampa = 8;
let totalGiro = 0;

btn.onclick = function () {
  // Ocultar mensaje si ya había salido antes
  mensaje.style.display = "none";

  // Reiniciar transición si gira muy rápido
  container.style.transition = "none";

  // Esperar un frame antes de activar transición
  requestAnimationFrame(() => {
    container.style.transition = "transform 4s ease-out";

    // Calcular ángulo final
    totalGiro += (vueltas * 360) + (anguloPorNumero * (numeroTrampa - 1));

    // Girar la ruleta
    container.style.transform = `rotate(${totalGiro}deg)`;
  });

  // Mostrar mensaje cuando termina el giro (después de 4s)
  setTimeout(() => {
    mensaje.style.display = "block";
  }, 4000);
}
