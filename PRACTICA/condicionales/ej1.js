/*
EJERCICIO 1
Suponer que necesitamos validar el saldo de la cuenta bancaria de un cliente, si el
cliente posee un saldo positivo (superior a cero) puede continuar con la transacción
requerida.*/

let saldo = prompt("ingrese el saldo");

if (saldo > 0){
    alert("puede continuar cn la transaccion");
} 
else {
    alert ("saldo insuficiente");
}