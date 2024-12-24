/*
EJERCICIO 3
 Lista de pendientes
Permitir al usuario ingresar una frase que represente una tarea a realizar, el
algoritmo nos debe permitir cargar tareas siempre que el usuario no ingrese una
cadena de texto vacía. Durante el proceso de carga debemos mostrar por consola la
tarea cargada y el orden en el que fue creada. Al final del proceso mostrar en un
alert la cantidad de tareas proporcionadas. 
*/

let continuar = true;
let contador = 0;


while (continuar) {

    let tarea=prompt("ingrese una tarea, o presione cancelar para finalizar");

    if (tarea == "cancelar") {
        continuar = false
        alert("programa finalizado");
    } else if (tarea == ""){
        alert("error, ingrese una tarea!");
    }
    else{
        contador++;
    }

    console.log("tarea numero " + contador + ": " + tarea);
    
}

alert("cantidad de tareas anotadas: "+contador);