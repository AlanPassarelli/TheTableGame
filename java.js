// Inicializamos nuestras variables
let producto = "";
let precio = 0;
let cantidad = 0;
let precioTotal = 0;
let cantidadTotal = 0;
let seguirComprando = false;

do {
producto = prompt("¿Que Juego queres comprar entre ellos estan: Erudito, Esquinados, Atenea, El Cinéfilo, Camarero, Melomano, Musa, Piramide del Sol, Saboteur, Caverna, Bituka y Catan?","Ej: Catan"
).toUpperCase(); 

cantidad = Number(prompt("¿Cuantos queres comprar?"));

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
    case "ERUDITO":
    precio = 2000;
    break;
    case "ESQUINADOS":
    precio = 1500;
    break;
    case "ATENEA":
    precio = 2000;
    break;
    case "EL CINEFOLI":
    precio = 2000;
    break;
    case "CAMARERO":
    precio = 2500;
    break;
    case "MELOMANO":
    precio = 2000;
    break;
    case "MUSA":
    precio = 2000;
    break;
    case "PIRAMIDE DE SOL":
    precio = 2500;
    break;
    case "SABOTEUR":
    precio = 2000;
    break;
    case "CAVERNA":
    precio = 2000;
    break;
    case "BITOKU":
    precio = 2500;
    break;
    case "CATAN":
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
"A comprado " + cantidadTotal +" " +producto +" el total es: $" + precioTotal
);

let finalizarCompra = confirm("¿Desea finalizar la compra?");

if (finalizarCompra) {
alert("Su compra se ha realizado con éxito!");
} else {
alert("Aguardamos su Compra, lo esperamos volver a ver por el sitio");
}
