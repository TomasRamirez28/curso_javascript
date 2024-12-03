
alert("Paquetes de Entrenamiento Personalizados. \n"+
"Descripción: Programas de entrenamiento diseñados por el jugador basados en su experiencia.\n"+
"Tipos de paquetes:\n \n"+
"Nivel principiante: Conceptos básicos como posicionamiento y manejo del balón.\n \n"+
"Nivel intermedio: Estrategias de rotación, control aéreo, y tiros avanzados.\n \n"+
"Nivel avanzado: Técnicas de flip resets, ceiling shots y jugadas en equipo.\n \n");





while (true) {
    let eleccion_compra = prompt("¿desea comprar un paquete? (SI/NO)");

    if (eleccion_compra == "NO") {
        alert("Gracias por su visita!");
        break;
    
    }
    else if (eleccion_compra == "SI") {
        while (true) {
            let eleccion = prompt("Seleccione el paquete que desea adquirir:\n\n"+
                "1 = Nivel principiante = $10.000\n\n"+
                "2 = Nivel intermedio = $15.000\n\n"+
                "3 = Nivel avanzado = $20.000");    

            if (eleccion === "1" || eleccion === "2" || eleccion === "3") {
                alert("¡Gracias por su compra! Procesando el paquete seleccionado...");
                break; 
            } else {
                alert("Por favor, seleccione una opción válida: 1, 2 o 3.");
            }

        }
        break; 

    } else {
        alert("Por favor, ingrese 'SI' o 'NO'.");
    }
}



                
        
  
   
    





    




