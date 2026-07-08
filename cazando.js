
const canvas = document.getElementById("areaJuego");
const ctx = canvas.getContext("2d");
 
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
 
const ANCHO_GATO = 40;
const ALTO_GATO = 40;
const ANCHO_COMIDA = 20;
const ALTO_COMIDA = 20;

function limpiarCanva() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda() {
  gatoX = gatoX - 10;
  limpiarCanva();
  graficarGato();
  graficarComida();
  detectarColision();
}

function moverDerecha() {
  gatoX = gatoX + 10;
  limpiarCanva();
  graficarGato();
  graficarComida();
  detectarColision();
}

function moverArriba() {
  gatoY = gatoY - 10;
  limpiarCanva();
  graficarGato();
  graficarComida();
  detectarColision();
}

function moverAbajo() {
  gatoY = gatoY + 10;
  limpiarCanva();
  graficarGato();
  graficarComida();
  detectarColision();
}

function graficarRectangulo(x, y, ancho, alto, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, ancho, alto);
}
 
function graficarGato() {
  graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "green");
}
 
function graficarComida() {
  graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "red");
}
 
function iniciarJuego() {
  gatoX = (canvas.width - ANCHO_GATO) / 2;
  gatoY = (canvas.height - ALTO_GATO) / 2;
 
 comidaX = canvas.width - ANCHO_COMIDA;
  comidaY = canvas.height - ALTO_COMIDA;
 
  graficarGato();
  graficarComida();
}

function detectarColision() {
  if (gatoX < comidaX + ANCHO_COMIDA &&
      gatoX + ANCHO_GATO > comidaX &&
      gatoY < comidaY + ALTO_COMIDA &&
      gatoY + ALTO_GATO > comidaY) {
    alert("¡El gato tocó la comida!");
  }
}