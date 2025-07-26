const container = document.querySelector(".container");
const btn = document.getElementById("spin");
const mensaje = document.getElementById("mensaje");
const acepto = document.getElementById("acepto");

const vueltas = 5;
const anguloPorNumero = 360 / 8;
const numeroTrampa = 8;
let totalGiro = 0;

btn.onclick = function () {
  btn.disabled = true;
  mensaje.style.display = "none";
  container.style.transition = "none";

  requestAnimationFrame(() => {
    container.style.transition = "transform 4s ease-out";
    totalGiro += vueltas * 360 + anguloPorNumero * (numeroTrampa - 1);
    container.style.transform = `rotate(${totalGiro}deg)`;
  });

  setTimeout(() => {
    mensaje.style.display = "block";
  }, 4000);
};

acepto.onclick = function () {
  mensaje.style.display = "none";
  btn.disabled = false;
};
