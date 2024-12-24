/*
EJERCICIO 2
. Generar tablas de multiplicar
Así cómo escribíamos las tablas de multiplicar en nuestros cuadernos cuando
éramos pequeños, aquí abordaremos el uso de un ciclo repetitivo para construir una
tabla de multiplicar, para ello solicitamos al usuario un número entero y
construiremos dicha solución del 1 al 10.
*/

let numero = parseInt(prompt("ingrese un numero y se mostrara el resultado de sus multiplicaciones"));
let i;

for (i=1; i<=10; i++){
    console.log( numero.toString() + "x" + i.toString() +"="+ numero*i.toString());
};
