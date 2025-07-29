/*Instrucción:
Crea un programa en JavaScript que cumpla con lo siguiente:
Debe existir un input de texto en HTML donde el usuario ingrese un número.
Un botón debe ejecutar una función llamada mostrarSecuencia que reciba como parámetro el número ingresado.
La función debe generar y retornar una cadena con todos los números desde 1 hasta el número ingresado, marcando con un asterisco (*) aquellos que sean múltiplos de 4.
El resultado debe mostrarse en el html.
Publicar el proyecto en GitHub y adjuntar una captura de pantalla de la ejecución.
Ejemplo esperado:
Si el usuario ingresa 10, la salida debe ser:
1, 2, 3, 4*, 5, 6, 7, 8*, 9, 10
*/


function mostrarSecuencia() {
    const input = document.getElementById('numeroInput');
    const numero = parseInt(input.value);
    let resultado = '';

    for (let i = 1; i <= numero; i++) {
        if (i % 4 === 0) {
            resultado += `${i}*`;
        } else {
            resultado += `${i}`;
        }
        if (i < numero) {
            resultado += ', ';
        }
    }

    document.getElementById('resultado').innerText = resultado;
}       
function mostrarPalabras() {
    const input
}