//Prueba de conexion JS
console.log("conexion establecida con JS!");

//creacion e variables
let num= 25;
let decimal=3.1416;
let texto= "hola mundo";
let boolean= "verdadero_o_falso";
let Numeros= " numeros arreglos";
let Persona ="objetoPersona";

//creacion de funcion numeroEntero, numero decimal

function numeroEntero() {
    return "Variable Númerica:" + num;
}

function numeroDeciaml() {
    return "Variable decimal:" + decimal;
}

function Letras(cadenas) {
let textoCompleto = "";
for (let i = 0; i < cadenas.length; i++) {
    textoCompleto += cadenas[i];
}
return textoCompleto;
}


function valor_Booleano(){
    return "variable boolean;"+boolean;
}
function arregloNumeros(numeros) {
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
return suma;
}

function objetoPersona{


    return "objetoPersona" 
}

//impresion de nose
console.log(num)
console.log(decimal)
console.log(texto)
console.log(boolean)
console.log(numeros)

