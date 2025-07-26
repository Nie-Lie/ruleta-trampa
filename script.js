let container = document.querySelector(".container");
let btn = document.getElementById("spin");

btn.onclick = function () {
  let vueltas = 5; // vueltas completas
  let anguloPorNumero = 360 / 8;
  let numeroTrampa = 8;

  // Ángulo exacto para caer en el número 8
  let anguloFinal = anguloPorNumero * (numeroTrampa - 1); // 315°

  // Total de grados a girar
  let totalGiro = (vueltas * 360) + anguloFinal;

  container.style.transition = "transform 4s ease-out";
  container.style.transform = "rotate(" + totalGiro + "deg)";
}
