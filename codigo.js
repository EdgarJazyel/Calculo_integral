function irCalculadora() {
  document.getElementById("calculadora").scrollIntoView({
    behavior: "smooth"
  });
}

function calcularIntegral() {
  let expresion = document.getElementById("expresion").value;
  let resultado = document.getElementById("resultado");

  expresion = expresion.replace(/\s/g, "");

  let regex = /^(\d*)x(-?\d+)$/;
  let partes = expresion.match(regex);

  if (!partes) {
    resultado.innerHTML = "Escribe algo como x4, 5x2 o 8x6";
    return;
  }

  let coeficiente = partes[1] === "" ? 1 : parseInt(partes[1]);
  let exponente = parseInt(partes[2]);

  if (exponente === -1) {
    resultado.innerHTML = `
      <h3>Resultado:</h3>
      <p>${coeficiente}ln|x| + C</p>
      <p>Este es un caso especial.</p>
    `;
    return;
  }

  let nuevoExponente = exponente + 1;

  resultado.innerHTML = `
    <h3>Resultado:</h3>
    <p>${coeficiente}x<sup>${nuevoExponente}</sup> / ${nuevoExponente} + C</p>

    <h3>Procedimiento:</h3>
    <p>1. Se suma 1 al exponente: ${exponente} + 1 = ${nuevoExponente}</p>
    <p>2. Se divide entre el nuevo exponente: ${nuevoExponente}</p>
    <p>3. Se agrega la constante C.</p>
  `;
}

let puntos = 0;

function verificarRespuesta() {
  let respuesta = document.getElementById("respuesta").value;
  let mensaje = document.getElementById("mensaje");

  respuesta = respuesta.replace(/\s/g, "").toLowerCase();

  if (
    respuesta === "8x7/7+c" ||
    respuesta === "8x^7/7+c" ||
    respuesta === "(8x7)/7+c"
  ) {
    puntos += 10;
    mensaje.innerHTML = "¡Correcto! Ganaste 10 puntos.";
  } else {
    mensaje.innerHTML = "Intenta otra vez. Recuerda sumar 1 al exponente.";
  }

  document.getElementById("puntos").innerText = puntos;
}
function resolverSustitucion() {
  document.getElementById("resultadoSustitucion").innerHTML = `
    <h3>Procedimiento:</h3>
    <p>u = x³ + 2x − 1</p>
    <p>du = (3x² + 2)dx</p>
    <p>∫u⁵du = u⁶/6 + C</p>
    <p><b>Resultado:</b> (x³ + 2x − 1)⁶/6 + C</p>
  `;
}

function resolverPartes() {
  document.getElementById("resultadoPartes").innerHTML = `
    <h3>Procedimiento:</h3>
    <p>u = x</p>
    <p>dv = eˣ dx</p>
    <p>du = dx</p>
    <p>v = eˣ</p>
    <p>∫xeˣdx = xeˣ − ∫eˣdx</p>
    <p><b>Resultado:</b> xeˣ − eˣ + C</p>
  `;
}