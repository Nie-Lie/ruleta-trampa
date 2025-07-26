let container = document.querySelector(".container");
let btn = document.getElementById("spin");

let totalGiro = 0; // acumulador de giros

btn.onclick = function () {
  let vueltas = 5; // vueltas completas
  let anguloPorNumero = 360 / 8;
  let numeroTrampa = 8;

  // Ángulo exacto para caer en el número 8
  let anguloFinal = anguloPorNumero * (numeroTrampa - 1); // 315°

  // Sumar al total de giros
  totalGiro += (vueltas * 360) + anguloFinal;

  // Aplicar la animación
  container.style.transition = "transform 4s ease-out";
  container.style.transform = "rotate(" + totalGiro + "deg)";
}
