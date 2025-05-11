const palabras = [
  "manzana", "elefante", "murcielago", "escuela", "montaña", "playa", "avion", "ciudad",
  "bosque", "piramide", "camion", "bicicleta", "carretera", "oceano", "reloj", "mariposa",
  "volcan", "isla", "pintura", "musica", "teatro", "planeta", "galaxia", "universo",
  "lenguaje", "historia", "geografia", "cultura", "poesia", "pelicula", "familia",
  "amistad", "libertad", "justicia", "pueblo", "bandera", "escudo", "himno", "fuego",
  "nieve", "lluvia", "tormenta", "cielo", "sol", "luna", "estrella", "nube", "rayo",
  "trueno", "semilla", "flor", "hoja", "arbol", "tigre", "perro", "gato", "leon", "pez",
  "cabra", "conejo", "jirafa"
];

let palabra, adivinadas, intentos;

function iniciarJuego() {
  palabra = palabras[Math.floor(Math.random() * palabras.length)];
  adivinadas = [];
  intentos = 6;

  document.getElementById("mensaje").textContent = "";
  document.getElementById("input-letra").disabled = false;
  document.getElementById("letras-usadas").textContent = "";
  document.getElementById("intentos-restantes").textContent = intentos;

  mostrarPalabra();
}

function mostrarPalabra() {
  const display = palabra
    .split("")
    .map(letra => (adivinadas.includes(letra) ? letra : "_"))
    .join(" ");
  document.getElementById("palabra-secreta").textContent = display;
}

function adivinarLetra() {
  const input = document.getElementById("input-letra");
  const letra = input.value.toLowerCase();
  input.value = "";
  input.focus();

  if (!letra || adivinadas.includes(letra)) return;

  if (palabra.includes(letra)) {
    adivinadas.push(letra);
  } else {
    intentos--;
  }

  document.getElementById("letras-usadas").textContent += letra + " ";
  document.getElementById("intentos-restantes").textContent = intentos;

  mostrarPalabra();
  verificarEstado();
}

function verificarEstado() {
  const palabraMostrada = palabra
    .split("")
    .map(letra => (adivinadas.includes(letra) ? letra : "_"))
    .join("");

  if (palabraMostrada === palabra) {
    document.getElementById("mensaje").textContent = "¡Ganaste! 🎉";
    desactivarInput();
  } else if (intentos === 0) {
    document.getElementById("mensaje").textContent = `Perdiste 😢 La palabra era: ${palabra}`;
    desactivarInput();
  }
}

function desactivarInput() {
  document.getElementById("input-letra").disabled = true;
}

function reiniciarJuego() {
  iniciarJuego();
}

iniciarJuego();
