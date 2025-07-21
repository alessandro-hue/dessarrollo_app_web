/*🟦 Ejercicio 1: Repetir una palabra N veces
📌 Solicita al usuario una palabra y un
número usando prompt. Luego, crea una función
que reciba ambos valores como parámetros,
repita la palabra N veces utilizando un bucle,
y retorne el resultado completo como una
cadena de texto. Muestra el resultado con
  alert. */

function repetirPalabra(palabra, veces){
    let resultado = "";
    for(let i = 0; i < veces; i++){
        resultado += `${palabra} `//  'hola hola hola hola '
    }
    return resultado.trim(); // trim elimina espacios 'hola hola hola hola'
    // en los extremos
}

function mostrarPalabras(){
let input1 = document.getElementById("input1");
let palabra = input1.value;
let numero = parseInt(prompt("Ingrese cantidad a repetir"));

let resultadoFinal = repetirPalabra(palabra, numero);

document.getElementById("resultado1").textContent = resultadoFinal;
}

/*🟦 Ejercicio 2: Comparar dos números
📌 Usa input para pedir dos números. Crea una función con dos parámetros que compare
los valores y retorne un mensaje indicando cuál número es mayor, menor o si son iguales. Muestra el mensaje 
*/

function compararNumeros(num1, num2){
    if(num1 > num2){
        return `${num1} es mayor que ${num2}`;
    } else if(num1 < num2){
        return `${num1} es menor que ${num2}`;
    } else {
        return `${num1} es igual a ${num2}`;
    }
}