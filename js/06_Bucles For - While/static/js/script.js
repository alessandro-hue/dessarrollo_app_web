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
        document.getElementById("resultado").innerHTML =
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
    document.getElementById("resultado1").innerHTML =
        `<p> La suma de los 5 numeros es: <strong> ${suma} </strong> </p>`
}

/*✅ Ejercicio 3: Mostrar solo los pares entre 1 y 20
Usa un for para mostrar en pantalla solo los 
números pares del 1 al 20.
*/

function mostrarPares(){
        let pares=[];
    for(let i=1; i <=20; i++){
        if(i % 2 ===0){
            pares.push(i);
        }
    }
    document.getElementById("resultado2").innerHTML=
    `<p>Los numeros pares del 1 al 20 son : </p> <br> <strong>${pares.join("-")}</strong>;`

}

/*✅ Ejercicio 4: Contador regresivo con condición
Pide un número al usuario y, usando un while, 
cuenta regresivamente hasta 0. Si el número es menor que 0, muestra "Número no válido".
*/

function contadorRegresivo() {
    let numero =parseFloat(prompt("ingresa un numero para contar regresivamente"));
    
    if (numero < 0) {
        document.getElementById("resultado3").innerHTML =`<P> Número no válido </p>`;
    }
    else {
        let contador = numero;
        let numeros =[];
        while (contador > = 0) {
            numeros.push(contador);
            contador--;
        }
        document.getElementById("resultado3").innerHTML =
            `<p> El conteo regresivo desde ${numero} es el siguiente: </p> <br> <strong>${numeros.join("- ")}</strong>`;

    }

}
/*✅ Ejercicio 5: Mostrar la tabla de multiplicar de un número
Solicita al usuario un número y usa un for para mostrar su tabla de multiplicar del 1 al 10.
/*


function mostrarTablamultiplicar() {
}