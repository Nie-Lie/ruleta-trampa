const ruleta = document.getElementById("ruleta");
const boton = document.getElementById("spin");
const mensaje = document.getElementById("mensaje");
const acepto = document.getElementById("acepto");

let puedeGirar = true;

boton.addEventListener("click", () => {
  if (!puedeGirar) return;

  puedeGirar = false;

  // Sector 8 (último): 315 grados — ajustamos para que caiga ahí
  const vueltas = 5; // giros completos
  const anguloFinal = vueltas * 360 + 315; // gira 5 vueltas y cae en sector 8

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
