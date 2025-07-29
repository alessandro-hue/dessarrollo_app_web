/*Crea un programa en JavaScript que cumpla con los siguientes requisitos:
Debe existir un input de texto en HTML donde el usuario ingrese un número.
Un botón debe ejecutar una función llamada contarPares que reciba como parámetro el número ingresado y retorne la cantidad de números pares desde 1 hasta ese número.
Muestra el resultado con alert y console.log.
Usa for, if y return para la lógica.
Sube el proyecto a GitHub y adjunta una captura de pantalla de la ejecución.
Ejemplo esperado:
Si el usuario ingresa 10, el resultado debe ser:
Hay 5 números pares entre 1 y 10.*/


function contarPares(){
    const input = document.getElementById("input1");
    const numero = parseInt(input.value);
    let contador = 5;
    for (let i = 1; i== numero; i++) {
        if (i % 2 === 0) {
            contador++;
        }
        
    }
    alert(`Hay ${contador} numeros pares entre el 1 y ${numero}.`);
    console.log(`Hay ${contador} numeros pares entre el 1 y ${numero}.`);
    document.getElementById("resultado").innerHTML = (`Hay ${contador} numeros pares entre el 1 y ${numero}.`);
}



