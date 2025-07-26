let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let mensaje = document.getElementById("mensaje");
let acepto = document.getElementById("acepto");

let vueltas = 5;
let anguloPorNumero = 360 / 8;
let numeroTrampa = 8;
let totalGiro = 0;

btn.onclick = function () {
  // Bloquear botón mientras gira
  btn.disabled = true;

  // Ocultar mensaje si estaba abierto
  mensaje.style.display = "none";

  // Reiniciar transición para reiniciar animación
  container.style.transition = "none";

  requestAnimationFrame(() => {
    container.style.transition = "transform 4s ease-out";

    totalGiro += vueltas * 360 + anguloPorNumero * (numeroTrampa - 1);
    container.style.transform = `rotate(${totalGiro}deg)`;
  });

  // Mostrar mensaje después del giro
  setTimeout(() => {
    mensaje.style.display = "block";
  }, 4000);
};

acepto.onclick = function () {
  mensaje.style.display = "none";
  btn.disabled = false;
};
