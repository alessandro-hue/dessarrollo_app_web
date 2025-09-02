/*Ejercicio 1: Registro de Estudiante
Objetivo específico: Capturar datos de un estudiante, validarlos y generar un resumen en el documento.
Entradas mínimas (formulario):
nombre (tipo texto, requerido, min. 2 caracteres).
edad (tipo number, rango 14–100).
curso (select con opciones, p. ej.: “3° Medio”, “4° Medio”).
jornada (radio: “Mañana”, “Tarde”).
aceptaReglamento (checkbox, obligatorio).
Lógica requerida (JS):
Validar campos (longitud de nombre, rango de edad, selección de jornada, aceptación del reglamento).
Normalizar el nombre (trim y capitalizar la primera letra de cada palabra).
Mostrar en un <p class="resultado"> un saludo formal que incluya nombre, edad y curso, jornada.
Si falta información o hay errores, mostrar en <p class="error"> un mensaje claro y no técnico.
*/

function registrarEstudiante(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
    const curso = document.getElementById('curso').value;
    const jornada = document.querySelector('input[name="jornada"]:checked');
    const aceptaReglamento = document.getElementById('aceptaReglamento').checked;
}





