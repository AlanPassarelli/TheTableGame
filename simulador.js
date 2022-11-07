// Inicializamos nuestras variables
function comprarProductos() {
  let producto = "";
  let precio = 0;
  let cantidad = 0;
  let precioTotal = 0;
  let cantidadTotal = 0;
  let seguirComprando = false;
  
  const productos = [
    { id: 1, nombre: "ERUDITO", precio: 2000 },
    { id: 2, nombre: "ESQUINADOS", precio: 1500 },
    { id: 3, nombre: "ATENEA", precio: 2000 },
    { id: 4, nombre: "EL CINEFOLI", precio: 2000 },
    { id: 5, nombre: "CAMARERO", precio: 2500 },
    { id: 6, nombre: "MELOMANO", precio: 2000 },
    { id: 7, nombre: "MUSA", precio: 2000 },
    { id: 8, nombre: "PIRAMIDE DE SOL", precio: 2500 },
    { id: 9, nombre: "SABOTEUR", precio: 2000 },
    { id: 10, nombre: "CAVERNA", precio: 2000 },
    { id: 11, nombre: "BITOKU", precio: 2500 },
    { id: 12, nombre: "CATAN", precio: 2000 },
    ]
  
    alert ("Bienvenido a nuestro sitio")
    alert ("los siguientes son nuestros productos")
  
    let todosLosProductos = productos.map ((producto) => producto.nombre + " " + "$" + producto.precio) 
    alert (todosLosProductos.join (" - "))
  
  do {
  producto = prompt("¿Que Juego queres comprar? Ejemplo: CATAN"
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
  
  const totalConEnvio = calcularEnvio(precioTotal);
  
  return totalConEnvio;
  
  }
  
  function calcularEnvio(precioTotal) {
    let tieneEnvioADomicilio = false;
  
    tieneEnvioADomicilio = confirm('Queres envio a domicilio?');
  
    if (tieneEnvioADomicilio && precioTotal >= 2000) {
        alert('Tenes envio gratis. El total de la compra es: '+precioTotal);
    } else if (tieneEnvioADomicilio && precioTotal < 2000 && precioTotal !== 0) {
        precioTotal += 500;
        alert('El envío cuesta $500. El total de la compra es: '+precioTotal);
    } else {
        alert('El total de la compra es: '+precioTotal);
    }
  
    return precioTotal;
  }
  
  function calcularCantidadDeCuotas() {
    let cuotas = 0;
    let tieneCuotas = false;
  
    tieneCuotas = confirm('Queres pagar en cuotas?');
  
    if (tieneCuotas) {
        cuotas = parseInt(prompt('¿En cuántas cuotas queres pagar?'));
        if (cuotas === 0) {
            cuotas = 1;
        } else if (Number.isNaN(cuotas)) {
            calcularCantidadDeCuotas();
        }
    } else {
        cuotas = 1;
    }
  
    return cuotas;
  }
  
  function calcularIntereses(cuotas) {
    let tasa = 10;
    let sinIntereses = 0;
    let tasaTotal = 0;
    let interesesTotales = 0;
  
    if (cuotas === 1) {
        return sinIntereses;
    } else {
        tasaTotal = tasa + cuotas * 0.4;
        interesesTotales = tasaTotal * cuotas;
        return interesesTotales;
    }
  }
  
  function calcularTotalAPagar(precioTotal, cuotas, intereses) {
    precioTotal = precioTotal + intereses;
    let valorCuota = precioTotal / cuotas;
    alert('El total a pagar es: $'+precioTotal+' en '+cuotas+' cuotas de $'+valorCuota);
  }
  const precioTotal = comprarProductos();
  const cuotas = calcularCantidadDeCuotas();
  const intereses = calcularIntereses(cuotas);
  
  calcularTotalAPagar(precioTotal, cuotas, intereses);
  
  let finalizarCompra = confirm("¿Desea finalizar la compra?");
  
  if (finalizarCompra) {
  alert("Su compra se ha realizado con éxito!");
  } else {
  alert("Aguardamos su Compra, lo esperamos volver a ver por el sitio");
  }
  
  