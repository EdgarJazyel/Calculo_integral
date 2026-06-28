/* ==================== SISTEMA DE PRÁCTICA DINÁMICO ==================== */
let puntos = 0;
let ejercicioActual = {};

// Banco de ejercicios (puedes agregar los que quieras)
const bancoEjercicios = [
    { problema: "∫8x⁶ dx", respuestas: ["8x^7/7+c", "8/7x^7+c", "8x7/7+c"] },
    { problema: "∫3x² dx", respuestas: ["x^3+c", "1x^3+c", "x3+c"] },
    { problema: "∫5x⁴ dx", respuestas: ["x^5+c", "1x^5+c", "x5+c"] },
    { problema: "∫10x⁹ dx", respuestas: ["x^10+c", "x10+c"] },
    { problema: "∫4x³ dx", respuestas: ["x^4+c", "x4+c"] },
    { problema: "∫2x dx",  respuestas: ["x^2+c", "x2+c"] }
];

// Carga un ejercicio al azar al abrir la página o después de acertar
function cargarEjercicio() {
    let indice = Math.floor(Math.random() * bancoEjercicios.length);
    ejercicioActual = bancoEjercicios[indice];
    
    // Si el elemento existe en la página actual (solo en index.html)
    if(document.getElementById("problema-texto")) {
        document.getElementById("problema-texto").innerText = ejercicioActual.problema;
        document.getElementById("respuesta").value = "";
        document.getElementById("mensaje").innerHTML = "";
    }
}

// Ejecutar al cargar la página
window.onload = function() {
    cargarEjercicio();
};

function verificarRespuesta() {
    let inputRespuesta = document.getElementById("respuesta").value.replace(/\s+/g, '').toLowerCase();
    let divMensaje = document.getElementById("mensaje");
    let spanPuntos = document.getElementById("puntos");

    if (inputRespuesta === "") {
        divMensaje.innerHTML = "<p style='color: #f59e0b; margin-top: 10px;'>Por favor, escribe una respuesta.</p>";
        return;
    }

    // Verifica si la respuesta que dio el usuario está en la lista de respuestas correctas
    if (ejercicioActual.respuestas.includes(inputRespuesta)) {
        divMensaje.innerHTML = "<p style='color: #10b981; font-weight: bold; margin-top: 10px;'>¡Correcto! Has ganado 10 puntos. 🎉 Generando nuevo ejercicio...</p>";
        puntos += 10;
        spanPuntos.innerText = puntos;
        
        // Pone un nuevo ejercicio después de 2 segundos
        setTimeout(cargarEjercicio, 2000);
    } else {
        divMensaje.innerHTML = "<p style='color: #ef4444; margin-top: 10px;'>Incorrecto. Inténtalo de nuevo, recuerda poner <strong>+c</strong></p>";
    }
}
