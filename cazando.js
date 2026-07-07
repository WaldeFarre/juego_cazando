
const canvas = document.getElementById("areaJuego");
const ctx = canvas.getContext("2d");

function graficarGato() {
  ctx.fillStyle = "green";
  ctx.fillRect(230, 230, 40, 40);
}

function graficarComida() {
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 20, 20);
}

function iniciarJuego() {
  graficarGato();
  graficarComida();
}