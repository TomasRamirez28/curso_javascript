/*
EJERCICIO 6

 Comprobar si una variable contiene texto
Desarrollaremos una forma de identificar a nuestro usuario dentro de la aplicación, y
si este está identificado (con algún nombre de usuario por ejemplo) le permitiremos
acceso a algunas características del sitio que un usuario no registrado no puede
acceder

*/

let nombreDeUsuario = prompt("ingrese su nombre d usuario");

if (nombreDeUsuario !== ""){
    alert("Hola, " + nombreDeUsuario + "! Tienes acceso completo a la aplicación.");
} else {
    alert("Hola, desconocido! Su acceso es limitado, regístrese para una experiencia más amplia.");
}
