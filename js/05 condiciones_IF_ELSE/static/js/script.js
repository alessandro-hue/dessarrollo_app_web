//✅ Ejercicio 1: Verificar mayoría de edad
//Crea una variable edad con un valor numérico.
//Si la edad es mayor o igual a 18, muestra "Acceso permitido".
//Si no, muestra "Acceso denegado".


function mayorEdad() {
    let edad = parseInt(prompt("ingrese edad."));

    if (edad >= 18) {
        document.getElementById("resultado1").innerHTML =
        `<p> Es mayor de edad: ${edad}</p>`;

    } else if (edad <= 17 && edad > 0) {
        document.getElementById("resultado1").innerHTML =
        `<p> El valor<strong> ${edad}<strong> es valido.</p>`;
    }
    else {
        document.getElementById("resultado1").innerHTML =
        `<p> Es menor de edad: ${edad}</p>`;

    }
}


/* ✅ Ejercicio 2: Añadir producto si no está
js
let productos = ["pan", "leche", "queso"];

Declara la variable nuevoProducto.
Si productos no incluye el nuevo producto (agrégalo con push() y muestra el arreglo.
Si ya está, muestra "Producto ya ingresado". */
function mostrarNuevoProducto() {
    let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("Ingrese un nuevo Producto");
    if (productos[0] == nuevoProducto) {
        document.getElementById("resultado2").innerHTML =
            `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if (productos[1] == nuevoProducto) {
        document.getElementById("resultado2").innerHTML =
            `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if (productos[2] == nuevoProducto) {
        document.getElementById("resultado2").innerHTML =
            `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else {
        productos.push(nuevoProducto);
        document.getElementById("resultado2").innerHTML =
            `<p>Nueva lista de productos: <strong>${productos.join(" - ")}</strong> ingresado.</p>`;
    }

}
// Ejercicio 3
function controlTareas() {
    let tareas = ["tarea1", "tarea2", "tarea3", "tarea4", "tarea5", "tarea6"];
    if (tareas.length > 5) {
        tareas.pop();
        document.getElementById("resultado3").innerHTML =
        `<p>Tareas ajustadas: ${tareas.join(", ")}</p>`;
    } else {
        document.getElementById("resultado3").innerHTML =
        `<p>Lista aceptable</p>`;
    }
}

// Ejercicio 4
function validarCola() {
    let cola = ["sinNombre", "Pedro", "Lucia"];
    if (cola[0] === "sinNombre") {
        cola.shift();
        document.getElementById("resultado4").innerHTML =
        `<p>Nuevo orden de cola: ${cola.join(", ")}</p>`;
    } else {
        document.getElementById("resultado4").innerHTML =
        `<p>Cola correcta</p>`;
    }
}

// Ejercicio 5
function saludoCondicional() {
    let nombre = prompt("Ingrese su nombre:");
    if (nombre.trim() !== "") {
        let saludos = [];
        saludos.push(`Hola, ${nombre}`);
        document.getElementById("resultado5").innerHTML =
        `<p>${saludos[0]}</p>`;
    } else {
        document.getElementById("resultado5").innerHTML =
        `<p>Nombre no valido</p>`;
    }
}

// Ejercicio 6
function calificarNota() {
    let nota = parseFloat(prompt("Ingrese una nota entre 1 y 7:"));
    if (nota >= 6) {
        document.getElementById("resultado6").innerHTML = "<p>Excelente</p>";
    } else if (nota >= 4) {
        document.getElementById("resultado6").innerHTML = "<p>Aprobado</p>";
    } else {
        document.getElementById("resultado6").innerHTML = "<p>Reprobado</p>";
    }
}
//✅ Ejercicio 7: Registro de visitantes
//Crea un arreglo vacío visitas y una variable persona.
//Si el nombre no está vacío, usa unshift() para añadirlo al inicio.
//Si está vacío, muestra "Error: nombre vacío".

// Ejercicio 7
function registroVisitantes() {
    let visitas = [];
    let persona = prompt("Ingrese su nombre:");
    if (persona.trim() !== "") {
        visitas.unshift(persona);
        document.getElementById("resultado7").innerHTML =
        `<p>Visitas registradas: ${visitas.join(", ")}</p>`;
    } else {
        document.getElementById("resultado7").innerHTML =
        "<p>Error: nombre vacío</p>";
    }
}


//✅ Ejercicio 8: Control de stock
//js
//let stock = ["arroz", "fideos"];
//Declara la variable productoSolicitado.
//Si stock incluye el producto, muestra "Producto disponible".
//Si no, agrégalo con push() y muestra "Producto agregado al stock".

// Ejercicio 8
function controlStock() {
    let stock = ["arroz", "fideos"];
    let productoSolicitado = prompt("Ingrese el producto:");
    if (stock.includes(productoSolicitado)) {
        document.getElementById("resultado8").innerHTML = "<p>Producto disponible</p>";
    } else {
        stock.push(productoSolicitado);
        document.getElementById("resultado8").innerHTML = 
        `<p>Producto agregado al stock: ${stock.join(", ")}</p>`;
    }
}




//✅ Ejercicio 9: Lista de invitados
//js
//let invitados = ["Ana", "Luis", "Camila"];

//Declara la variable persona.
//Si la persona está en el arreglo, muestra "Bienvenido, [nombre]".
//Si no, muestra "No estás en la lista".

// Ejercicio 9
function verificarInvitado() {
    let invitados = ["Ana", "Luis", "Camila"];
    let persona = prompt("Ingrese su nombre:");
    if (invitados.includes(persona)) {
        document.getElementById("resultado9").innerHTML = `<p>Bienvenido, ${persona}</p>`;
    } else {
        document.getElementById("resultado9").innerHTML = "<p>No estas en la lista</p>";
    }
}

//✅ Ejercicio 10: Evaluar rol de usuario
//js
//let usuarios = ["Admin", "Editor", "Invitado"];
//Declara la variable rol.
//Si rol === "Admin", agrégalo al inicio con unshift() y muestra "Rol prioritario agregado".
//Si es otro rol, usa push() y muestra "Rol agregado".


// Ejercicio 10
function evaluarRol() {
    let usuarios = ["Admin", "Editor", "Invitado"];
    let rol = prompt("Ingrese el rol:");
    if (rol === "Admin") {
        usuarios.unshift(rol);
        document.getElementById("resultado10").innerHTML = "<p>Rol prioritario agregado</p>";
    } else {
        usuarios.push(rol);
        document.getElementById("resultado10").innerHTML = "<p>Rol agregado</p>";
    }
}
