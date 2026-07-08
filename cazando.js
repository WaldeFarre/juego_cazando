const canvas = document.getElementById("areaJuego");
const ctx = canvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
let puntos = 0;
let tiempo = 10;
let intervalo;

const ANCHO_GATO = 40;
const ALTO_GATO = 40;
const ANCHO_COMIDA = 20;
const ALTO_COMIDA = 20;

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

function detectarColision() {
  if (gatoX < comidaX + ANCHO_COMIDA &&
      gatoX + ANCHO_GATO > comidaX &&
      gatoY < comidaY + ALTO_COMIDA &&
      gatoY + ALTO_GATO > comidaY) {

    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);

    puntos = puntos + 1;
    mostrarEnSpan("puntos", puntos);
 
    limpiarCanva();
    graficarGato();
    graficarComida();

    if (puntos == 6) {
      alert("¡Ganaste! Cazaste toda la comida");
      clearInterval(intervalo);
    }
  }
}
 
function restarTiempo() {
  tiempo = tiempo - 1;
  mostrarEnSpan("tiempo", tiempo);
 
  if (tiempo == 0) {
    alert("Game Over");
    clearInterval(intervalo);
  }
}
 
function iniciarJuego() {
  clearInterval(intervalo);
 
  gatoX = (canvas.width - ANCHO_GATO) / 2;
  gatoY = (canvas.height - ALTO_GATO) / 2;
 
  comidaX = canvas.width - ANCHO_COMIDA;
  comidaY = canvas.height - ALTO_COMIDA;
 
  puntos = 0;
  tiempo = 10;
  mostrarEnSpan("puntos", puntos);
  mostrarEnSpan("tiempo", tiempo);
 
  limpiarCanva();
  graficarGato();
  graficarComida();
 
  intervalo = setInterval(restarTiempo, 1000);
}
 
function reiniciar() {
  iniciarJuego();
}