// Inicializamos nuestras variables
let producto = "";
let precio = 0;
let cantidad = 0;
let precioTotal = 0;
let cantidadTotal = 0;
let seguirComprando = false;

do {
producto = prompt(
    "¿Que Juego queres comprar entre ellos estan: Erudito, Esquinados, Atenea, El Cinéfilo, Camarero, Melomano, Musa, Piramide del Sol, Saboteur, Caverna, Bituka y Catan?",
    "Ej: Catan"
);
cantidad = parseInt(prompt("¿Cuantos queres comprar?"));

  // Validaciones
while (Number.isNaN(cantidad) || cantidad === 0) {
    if (cantidad !== 0) {
    alert("Debe agregar un número.");
    } else {
    alert("Debe ingresar un número distinto de cero.");
    }
    cantidad = Number(prompt("¿Cuantos queres comprar?"));
}

switch (producto) {
    case "Erudito":
    precio = 2000;
    break;
    case "Esquinados":
    precio = 1500;
    break;
    case "Atenea":
    precio = 2000;
    break;
    case "El Cinefilo":
    precio = 2000;
    break;
    case "Camarero":
    precio = 2500;
    break;
    case "Melomano":
    precio = 2000;
    break;
    case "Musa":
    precio = 2000;
    break;
    case "Piramide del Sol":
    precio = 2500;
    break;
    case "Saboteur":
    precio = 2000;
    break;
    case "Caverna":
    precio = 2000;
    break;
    case "Bitoku":
    precio = 2500;
    break;
    case "Catan":
    precio = 2000;
    break;

    default:
    alert("Alguno de los datos ingresados no es correcto.");
    precio = 0;
    cantidad = 0;
    break;
}

  precioTotal += precio * cantidad;
cantidadTotal += cantidad;

seguirComprando = confirm("¿Queres agregar otro producto?");
} while (seguirComprando);

alert(
"A comprado " + cantidadTotal + " productos y el total es: " + precioTotal
);

let finalizarCompra = confirm("¿Desea finalizar la compra?");

if (finalizarCompra) {
alert("Su compra se ha realizado con éxito!");
} else {
alert("Esperamos volver a verlo pronto.");
}
