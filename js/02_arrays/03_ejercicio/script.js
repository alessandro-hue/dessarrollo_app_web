console.log("conectando correctamente...");

/*
Enunciado:
Crea una función que sume el primer y el
último elemento de un arreglo de números y 
muestre el resultado con un alert.
*/

function diferenciaCentroExtremos() {
    let numeros= [4,3,7,5,1];
    let resultado= ((numeros[0]+ numeros[numeros.length - 1])- numeros[2]);
    alert("la diferencia entre el numero central y el externo es: \n"
    +resultado);
}
