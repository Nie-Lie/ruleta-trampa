const ruleta = document.getElementById("ruleta");
const boton = document.getElementById("spin");
const mensaje = document.getElementById("mensaje");
const acepto = document.getElementById("acepto");

let puedeGirar = true;

boton.addEventListener("click", () => {
  if (!puedeGirar) return;

  puedeGirar = false;

  const vueltas = 5;
  const anguloFinal = vueltas * 360 + 315;

  ruleta.style.transition = "transform 4s ease-out";
  ruleta.style.transform = `rotate(${anguloFinal}deg)`;

  setTimeout(() => {
    mensaje.style.display = "flex";
  }, 4200);
});

acepto.addEventListener("click", () => {
  mensaje.style.display = "none";
  puedeGirar = true;
});
