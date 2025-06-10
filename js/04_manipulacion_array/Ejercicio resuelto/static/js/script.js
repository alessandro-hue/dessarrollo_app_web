// crear un arreglo vacio llamado compras usan push 
// para agregar los siguientes 
// elementos: pan, leche, huevos muestra el arreglo resultando

let compras =[]; //arreglo vacio
function listaCompras(){
    compras.push("pan", "leche", "huevos");
    alert(`lista de compras: ${compras.join(" - ")}`);
}


//Ejercicio 2 

function eliminarcompras(){
    //mostrar lista de compras eleminadas
    alert(`lista de compras${compras}.`)
    //guardar el elemento eleminado en una variable
    let eliminado = compras.pop();
    //mostrar la lista actualizada
    alert(`Producto eleminado ${eliminado}\nlista de compra actualizada: ${compras}.`);

}

//ejercicio 3
let colores =[ "rojo", "azul"];

function agregarcolor(){
    let entrada = prompt("Agregar un color");
    colores.unshift(entrada);
    alert(`el color agregado es ${entrada}\n colores actualizados: ${colores}`);
}


//ejercicio 4
function eliminarPrimercolor(){
    let coloreleiminado = colores.shift();
    alert("el color fue eleminado - " + coloreleiminado + 
        "\n colores actualizados" )

}

//ejercicio 5
/* Ejercicio 5: Combinación de métodos
Crea un arreglo llamado numeros = [10, 20, 30].
Agrega 40 al final.
Quita el primer número.
Agrega 5 al inicio.
Elimina el último número.
Muestra el arreglo final usando console.log().*/

let numeros=[10,20,30]
function agregarNumeros(){
    numeros.push(40)
    alert(`Le agregamos 40 al final`);
    numeros.shift()
    alert(`le quitamos el primer numero`);
    numeros.unshift(5)
    alert(`le agregamos un 5 al final`);
    numeros.pop()
    alert(`eliminamos el ultimo numero`);
    alert(`El arreglo quedo asi $(numeros.joing(-->"))`)
    
}
//ejecicio 6

let orden=[]

function agregarOrdenInverso(){
    let num1 = prompt("ingrese el numero 1");
    orden.unshift(num1)
    let num2 = prompt("ingrese el numero 2");
    orden.unshift(num2)
    let num3 = prompt("ingrese el numero 3");
    orden.unshift(num3);

    console.log(`orden Inverso: ${orden.join(" --> ")}`);


}


//ejercicio 7
let historial = [];

function historialMensaje(){
    historial.push("Hola","¿como estas?", "adios.");
    let eliminado = historial.pop();
    alert(`ultimo mensaje eliminado: ${eliminado}`);
    alert(`Historial de mensaje actualizado:${historial.join(", ")}`)
}




//ejercicio 8
let cola =[" cliente1", "cliente2", "cliente3"]

function actualizarCola(){
    cola.shift();
    cola.push("cliente4");
    alert("cola: "+ Cola);
}






