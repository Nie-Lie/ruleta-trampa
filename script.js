const ruleta = document.getElementById("ruleta");
const boton = document.getElementById("spin");
const mensaje = document.getElementById("mensaje");
const acepto = document.getElementById("acepto");

let puedeGirar = true;

boton.addEventListener("click", () => {
  if (!puedeGirar) return;

  puedeGirar = false;

  // Ángulo donde está el espacio "Cita con Pachuca", por ejemplo el octavo (315°)
  let targetAngle = 360 * 5 + 315; // 5 vueltas + ángulo deseado

  ruleta.style.transition = "transform 4s ease-out";
  ruleta.style.transform = `rotate(${targetAngle}deg)`;

  setTimeout(() => {
    mensaje.style.display = "flex";
  }, 4200);
});

acepto.addEventListener("click", () => {
  mensaje.style.display = "none";
  puedeGirar = true;
});
