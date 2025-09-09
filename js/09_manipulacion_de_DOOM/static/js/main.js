/*Ejercicio 1: Registro de Estudiante
Objetivo específico: Capturar datos de un estudiante, validarlos y generar un resumen en el documento.
Entradas mínimas (formulario):
nombre (tipo texto, requerido, min. 2 caracteres)
edad (tipo number, rango 14–100).
curso (select con opciones, p. ej.: “3° Medio”, “4° Medio”).
jornada (radio: “Mañana”, “Tarde”).
aceptaReglamento (checkbox, obligatorio).
Lógica requerida (JS):
Validar campos (longitud de nombre, rango de edad, selección de jornada, aceptación del reglamento).
Normalizar el nombre (trim y capitalizar la primera letra de cada palabra).
Mostrar en un <p class="resultado"> un saludo formal que incluya nombre, edad y curso, jornada.
Si falta información o hay errores, mostrar en <p class="error"> un mensaje claro y no técnico.
Arreglos y bucles:
Mantener un arreglo de registros; al enviar, push del nuevo objeto {nombre, edad, curso, jornada}.
Recorrer el arreglo para contar cuántos estudiantes por jornada y mostrar un resumen (ej.: “Registrados: 3 en Mañana, 2 en Tarde”).
Extensión opcional: botón “Limpiar” que reinicie el formulario y la salida.*/


document.addEventListener('DOMContentLoaded', function()) {
    const form = document.getElementById('registroForm');
    const resultado = document.querySelector('.resultado');
    const error = document.querySelector('.error');
    const limpiarBtn = document.getElementById('limpiarBtn');
    const registros = [];

    form.addEventListener('submit', function(event)) {
        event.preventDefault();
        error.textContent = '';
        resultado.textContent = '';  

        const nombre = form.nombre.value.trim();
        const edad = parseInt(form.edad.value);
        const curso = form.curso.value;
        const jornada = form.jornada.value;
        const aceptaReglamento = form.aceptaReglamento.checked;
        let errores = [];
        // Validaciones
        if (nombre.length < 2) {
            errores.push('El nombre debe tener al menos 2 caracteres.');
        }
    }

}
