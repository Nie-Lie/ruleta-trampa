let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let mensaje = document.getElementById("mensaje");
let acepto = document.getElementById("acepto");

let vueltas = 5; // número de vueltas completas para el giro
let anguloPorNumero = 360 / 8; // grados por segmento (8 segmentos)
let numeroTrampa = 8; // segmento donde quieres que caiga siempre (el 8)
let totalGiro = 0;

btn.onclick = function () {
  btn.disabled = true;             // bloquear botón mientras gira
  mensaje.style.display = "none";  // ocultar mensaje si está visible

  container.style.transition = "none"; // reset transición para reiniciar animación

  requestAnimationFrame(() => {
    container.style.transition = "transform 4s ease-out"; // transición suave de 4s
    // aumentar el ángulo total para que gire y termine en el segmento trampa
    totalGiro += vueltas * 360 + anguloPorNumero * (numeroTrampa - 1);
    container.style.transform = `rotate(${totalGiro}deg)`;
  });

  // mostrar mensaje después de 4 segundos (cuando termina el giro)
  setTimeout(() => {
    mensaje.style.display = "block";
  }, 4000);
};

acepto.onclick = function () {
  mensaje.style.display = "none"; // ocultar mensaje
  btn.disabled = false;            // habilitar botón para girar de nuevo
};
