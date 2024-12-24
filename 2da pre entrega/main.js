// 1️⃣ Variables y Objetos
const paquetes = [
    { nivel: "Principiante", precio: 10000, descripcion: "Conceptos básicos como posicionamiento y manejo del balón." },
    { nivel: "Intermedio", precio: 15000, descripcion: "Estrategias de rotación, control aéreo, y tiros avanzados." },
    { nivel: "Avanzado", precio: 20000, descripcion: "Técnicas de flip resets, ceiling shots y jugadas en equipo." }
];

// Carrito para almacenar las compras
let carrito = [];

// 2️⃣ Funciones esenciales
// Mostrar todos los paquetes
function mostrarPaquetes() {
    let mensaje = "Paquetes disponibles:\n\n";
    paquetes.forEach((paquete, index) => {
        mensaje += `${index + 1}. Nivel: ${paquete.nivel} - $${paquete.precio}\n   ${paquete.descripcion}\n\n`;
    });
    alert(mensaje);
}

// Buscar un paquete por nivel
function buscarPaquetePorNivel(nivel) {
    return paquetes.find(paquete => paquete.nivel.toLowerCase() === nivel.toLowerCase());
}

// Filtrar paquetes por rango de precios
function filtrarPaquetesPorRango(minPrecio, maxPrecio) {
    return paquetes.filter(paquete => paquete.precio >= minPrecio && paquete.precio <= maxPrecio);
}

// Verificar si un paquete ya está en el carrito
function paqueteYaEnCarrito(paquete) {
    return carrito.some(item => item.nivel === paquete.nivel);
}

// Agregar paquete al carrito
function agregarAlCarrito(paquete) {
    if (paqueteYaEnCarrito(paquete)) {
        alert(`El paquete "${paquete.nivel}" ya fue agregado al carrito.`);
    } else {
        carrito.push(paquete);
        alert(`Se ha agregado el paquete "${paquete.nivel}" al carrito.`);
    }
}

// Mostrar contenido del carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let mensaje = "Carrito de compras:\n\n";
    let total = 0;

    carrito.forEach((paquete, index) => {
        mensaje += `${index + 1}. Nivel: ${paquete.nivel} - $${paquete.precio}\n`;
        total += paquete.precio;
    });

    mensaje += `\nTotal a pagar: $${total}`;
    alert(mensaje);
}

// 3️⃣ Flujo principal
alert("¡Bienvenido a los paquetes de entrenamiento personalizados!");

while (true) {
    const accion = prompt(
        "¿Qué desea hacer?\n\n" +
        "1. Ver todos los paquetes.\n" +
        "2. Buscar un paquete por nivel.\n" +
        "3. Filtrar paquetes por rango de precios.\n" +
        "4. Agregar paquetes al carrito y mostrar total.\n" +
        "5. Salir."
    );

    if (accion === "1") {
        mostrarPaquetes();
    } else if (accion === "2") {
        const nivel = prompt("Ingrese el nivel del paquete (Principiante, Intermedio, Avanzado):");
        const paquete = buscarPaquetePorNivel(nivel);
        if (paquete) {
            alert(`Paquete encontrado:\n\nNivel: ${paquete.nivel}\nPrecio: $${paquete.precio}\n${paquete.descripcion}`);
        } else {
            alert("No se encontró un paquete con ese nivel.");
        }
    } else if (accion === "3") {
        const minPrecio = parseInt(prompt("Ingrese el precio mínimo:"));
        const maxPrecio = parseInt(prompt("Ingrese el precio máximo:"));
        const paquetesFiltrados = filtrarPaquetesPorRango(minPrecio, maxPrecio);

        if (paquetesFiltrados.length > 0) {
            let mensaje = "Paquetes disponibles en el rango seleccionado:\n\n";
            paquetesFiltrados.forEach(paquete => {
                mensaje += `Nivel: ${paquete.nivel} - $${paquete.precio}\n   ${paquete.descripcion}\n\n`;
            });
            alert(mensaje);
        } else {
            alert("No se encontraron paquetes en ese rango de precios.");
        }
    } else if (accion === "4") {
        mostrarPaquetes();
        const seleccion = parseInt(prompt("Ingrese el número del paquete que desea agregar al carrito (1, 2, 3):"));
        if (seleccion >= 1 && seleccion <= paquetes.length) {
            const paqueteSeleccionado = paquetes[seleccion - 1];
            agregarAlCarrito(paqueteSeleccionado);
            mostrarCarrito();
        } else {
            alert("Opción inválida. Por favor, seleccione un número válido.");
        }
    } else if (accion === "5") {
        alert("¡Gracias por visitar nuestro servicio!");
        break;
    } else {
        alert("Por favor, seleccione una opción válida.");
    }
}

    





    




