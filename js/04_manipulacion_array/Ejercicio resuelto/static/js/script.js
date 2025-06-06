// crear un arreglo vacio llamado compras usan push 
// para agregar los siguientes 
// elementos: pan, leche, huevos muestra el arreglo resultando

let compras =[]; //arreglo vacio
function listaCompras(){
    compras.push("pan", "leche", "huevos");
    alert(`lista de compras: ${compras.join(" - ")}`);
}


//Ejercicio 2 

function eliminarElemento(){
    let compraEliminada= compras.pop();
    alert(`Elemento eliminado: ${compraEliminada}`);
}

//ejercicio 3
let colores=[];
function listaColores(){
    colores.unshift("rojo", "azul");
    let colores= (`amarillo`);
    alert(`los nuevos colores: ${colores.join(" - ")}`);
}

//ejercicio 4


// Creación de Arreglo
let array = ["Xbox","Nintendo"];
//Creación de funciones
function usarPush(){
// Agregar al final
    let entrada = prompt("Agregar una consola de juego: ");
    array.push(entrada);
    alert("El nuevo arreglo es: " + array.join(" - "));
}
function usarPop(){
    //Elimina el último elemento
    let basurero = array.pop();
    alert(`Elemento eliminado: ${basurero}`);
}
function usarUnshift(){
    // Agregar al inicio
    let entrada = prompt("Agregar una consola de juego: ");
    array.unshift(entrada);
    alert("El nuevo arreglo es: " + array.join(" "));
}
function usarShift(){
        //Elimina el primer elemento
        let basurero = array.shift();
        alert(`Elemento eliminado: ${basurero}`);
}