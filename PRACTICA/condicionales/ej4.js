/*
EJERCICIO 4

Calcular costo de envío
Necesitamos calcular el costo de envío de un paquete, y este costo depende de la
distancia recorrida desde el lugar de despacho al de recepción. Para ello distancias
entre 0-500km el costo es de $ 5.000, entre 500-1000km es de $ 7.250 y superior a
este es $ 10.000.

 */

let costo
let distancia = parseFloat(prompt("cual es la distancia recorrida desde el lugar de despacho al de recepción?"))
if (distancia >= 0 && distancia <= 500){
    costo = 5000;
} else if(distancia > 500 && distancia <= 1000){
    costo = 7250;
} else if(distancia > 1000){
    costo = 10000;
} else{
    alert("ingrese un numero positivo");0
}

if (distancia >= 0){
    alert("el costo del producto es de $" + costo + " ya que la distancia recorrida fue de "+ distancia +"km" );
}






