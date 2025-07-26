let container = document.querySelector(".container");
let btn = document.getElementById("spin");

let vueltas = 5; // Vueltas por cada click
let anguloPorNumero = 360 / 8;
let numeroTrampa = 8;
let totalGiro = 0;

btn.onclick = function () {
  // Quitar transición para que puedas reiniciar animación si giras muy rápido
  container.style.transition = "none";

  // Esperar un frame antes de aplicar nueva transición (truco de reinicio)
  requestAnimationFrame(() => {
    // Agregar nueva transición
    container.style.transition = "transform 4s ease-out";

    // Calcular el nuevo giro
    totalGiro += (vueltas * 360) + (anguloPorNumero * (numeroTrampa - 1));

    // Aplicar el giro
    container.style.transform = `rotate(${totalGiro}deg)`;
  });
}
