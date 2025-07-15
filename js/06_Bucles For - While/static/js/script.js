/*✅ Ejercicio 1: Contador del 1 al N
Pide al usuario un número con prompt() 
y usa un for para mostrar los números del 1 hasta ese número.
*/

function contarHastaN() {
    let n = parseInt(prompt("ingrese un numero hasta donde puede contar"));
    let numeros = [];
    //bucle for contar hasta N
    for (let i = 1; i <= n; i++) {
        numeros.push(i);
        document.getElementById("resultado1").innerHTML =
            `<p> el conteo de 1 hasta ${n} es el siguiente</p> <br> <strong>${numeros.join(" - ")}</strong>`;
    }
}

/* Ejercicio 2: Suma de 5 números
Con un while, pide 5 números al usuario (uno por uno con prompt()) y muestra la suma total en pantalla.*/
            
function sumarCincoNumeros() {
    let suma = 0;
    let contador = 0;
    while (contador < 5) {
        let numero = parseFloat(prompt("ingresa un numero"));
        suma += numero;
        contador++;
    }
    document.getElementById("resultado2").innerHTML =
        `<p> La suma de los 5 numeros es: <strong> ${suma} </strong> </p>`
}

/*✅ Ejercicio 3: Mostrar solo los pares entre 1 y 20
Usa un for para mostrar en pantalla solo los 
números pares del 1 al 20.
*/

function mostrarPares() {
    let pares = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    document.getElementById("resultado3").innerHTML =
        `<p>Los numeros pares del 1 al 20 son : </p> <br> <strong>${pares.join("-")}</strong>;`

}

/*✅ Ejercicio 4: Contador regresivo con condición
Pide un número al usuario y, usando un while, 
cuenta regresivamente hasta 0. Si el número es menor que 0, muestra "Número no válido".
*/

function contadorRegresivo() {
    let numero = parseFloat(prompt("ingresa un numero para contar regresivamente"));

    if (numero < 0) {
        document.getElementById("resultado4").innerHTML = `<P> Número no válido </p>`;
    }
    else {
        let contador = numero;
        let numeros = [];
        while (contador >= 0) {
            numeros.push(contador);
            contador--;
        }
        document.getElementById("resultado4").innerHTML =
            `<p> El conteo regresivo desde ${numero} es el siguiente: </p> <br> <strong>${numeros.join("- ")}</strong>`;

    }

}


/*✅ Ejercicio 5: Mostrar la tabla de multiplicar de un número
Solicita al usuario un número y 
usa un for para mostrar su tabla de multiplicar del 1 al 10.
*/


function tablaMultiplicar() {
    let numero = parseFloat(import(prompt("ingresa un numero para mostrar su tabla d emultiplicar")));
    let tabla = [];
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        tabla.push(`${numero} x ${i} = ${resultado4}`);
    }
    document.getElementById("resultado5").innerHTML =
        `<p> la tabla de multiplicar del ${numero} es: </p> <br> <strong>${tabla.join("<br>")}</strong>`;
}

/*✅ Ejercicio 6: Sumar hasta que se ingrese cero
Con while, sigue pidiendo números con prompt() y súmalos, hasta que el usuario escriba 0. Muestra el total acumulado.
*/

function sumarHastaCero() {
    let suma = 0;
    let numero;
    do  {
        numero =parseFloat(prompt("ingresa un numero para sumar, o 0 para terminar"));
        if (numero !== 0 ){
            suma += numero;
        }
    } while (numero !== 0);
    document.getElementById("resultado6").innerHTML =
        `<P> El total acumulado es: <strong>${suma}</strong> </p>`;
    }    

/*✅ Ejercicio 7: Mostrar letras de una palabra
Pide al usuario una palabra y usa un for para mostrar cada letra por separado en el HTML.
*/

function mostrarletrasPalabra() {
    let palabra = prompt("ingresa una palabra");
    let letras = [];
    for (let i = 0; i < palabra.length; i++) {
        letras.push(palabra[i]);
    }   
    document.getElementById("resultado7").innerHTML =
        `<p> Las letras de la palabra "${palabra}" son: </p> <br> <strong>${letras.join(" -")}</strong>`;
}

/*✅ Ejercicio 8: Validar contraseña
Pide una contraseña al usuario y sigue pidiendo con while hasta que escriba "admin123".
Luego, muestra "Acceso concedido".
*/

function validarContrasena() {  
    let contrasena;
    do {
        contrasena = prompt("ingresa la contrasena");
    }  while (contrasena !=="admin123");
    document.getElementById("resultado8").innerHTML =`<p> acceso concedido </p>`;
}


/*✅ Ejercicio 9: Promedio de notas
Pide con prompt() cuántas notas va a ingresar. Usa un for para pedir cada nota,
calcula el promedio y lo muestra.*/

function promedioNotas() {
    let cantidadNotas =parseFloat(prompt("¿cuantas notas vas a ingresar?"));
    let suma = 0;
    for (let i = 0; i < cantidadNotas; i++) {
        let nota = parseFloat(prompt(`ingresa la nota ${i + 1}`));
        suma += nota;
    }   
    let promedio =suma / cantidadNotas;
    document.getElementById("resultado9").innerHTML =
    `<p> El promedio de las notas es: <strong>${promedio.toFixed(2)}</strong> </p>`;

}


/*✅ Ejercicio 10: Contar cuántos son mayores de edad
Pide con prompt() cuántas personas vas a ingresar. 
Por cada persona, pide la edad y muestra al final cuántas son mayores de edad (18+).*/


function contarMayoresEdad() {
    let cantidadPersonas = parseInt(prompt("¿cuantas personas vas aingresar?"));
    let mayoresEdad = 0;
    for (let i = 0; i < cantidadPersonas; i++){
        let edad = parseInt(prompt(`ingresa la edad de la personas ${i + 1}`));
        if (edad >= 18) {
            mayoresEdad++;
        } 
    }   
    document.getElementById("resultado10").innerHTML =
        `<p> El numero de personas mayores de edad es: <strong>${mayoresEdad}</strong> </p>`;

}

/*🟦 Ejercicio 11: Repetir una palabra N veces
📌 Solicita al usuario una palabra y un número usando prompt. Luego,
crea una función que reciba ambos valores como parámetros, repita la palabra N veces utilizando un bucle,
y retorne el resultado completo como una cadena de texto. Muestra el resultado con alert.
*/





