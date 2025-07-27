var degree = 1800;
var clicks = 0;

const opciones = [
  "🔔 Campana",
  "💬 Comentario",
  "😄 Sonrisa",
  "❤️ Corazón",
  "⭐ Estrella",
  "💡 Idea"
];

$(document).ready(function () {
  $('#spin').click(function () {
    clicks++;
    let newDegree = degree * clicks;
    let extraDegree = Math.floor(Math.random() * 360);
    let totalDegree = newDegree + extraDegree;

    // Gira la ruleta
    $('#inner-wheel').css({ 'transform': 'rotate(' + totalDegree + 'deg)' });

    // Detectar resultado
    let gradosFinales = totalDegree % 360;
    let seccion = Math.floor(gradosFinales / 60);
    let resultado = opciones[seccion];

    // Mostrar resultado después de que termine de girar
    setTimeout(() => {
      $('#txt').html("Resultado: " + resultado);
    }, 6200); // el mismo tiempo que la animación (6s + un poco de margen)
  });
});
