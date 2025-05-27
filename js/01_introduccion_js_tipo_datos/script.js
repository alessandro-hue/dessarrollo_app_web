//Prueba de conexion JS
console.log("conexion establecida con JS!");

//creacion e variables
let num= 25;
let decimal=3.1416;
let texto= "hola mundo";
let boolean= "verdadero_o_falso";
let Numeros= " numeros arreglos";
let Persona ="objetoPersona";
let Indefinido = "valorIndefinido";
let valornulo ="ValorNulo";
let valorunico ="identificadorUnico";

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


function crearPersona() {
let persona = {
    nombre: "Juan Pérez",
    edad: 30
};
    return persona; 
}
function obtenerValorIndefinido() {

}

function obtenerValorNulo() {
  // Esta función devuelve explícitamente el valor 'null'.
return null; 
}




//impresion de nose
console.log(num)
console.log(decimal)
console.log(texto)
console.log(boolean)
console.log(Numeros)
console.log(Persona)
console.log(Indefinido)
console.log( valornulo)
console.log(valorUnico)

