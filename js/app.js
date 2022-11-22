
let carrito = [];

const contenedorProductos = document.getElementById("producto-contenedor");
const carritoNumero = document.querySelector("#cesta-carrito");
const vaciarCarrito = document.querySelector('#vaciarCarrito');
const precioTotal = document.querySelector('#precioTotal');



document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  mostrarCarrito();
});


const mostrarProd = () => {
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML += `<div class="card text-bg-secondary align-items-center" style="width: 18rem;">
          <img src=${producto.img}>
          <div class="card-body">
              <h5 class="card-title text-center">${producto.nombre}</h5>
              <h6 class="card-title text-center">$${producto.precio}</h6>
          </div>
          <div>
          <button type="button" class="btn btn-secondary" id=boton${producto.id}>  Agregar  </button>
          </div>
      </div>
              `;
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
    });
  });

  vaciarCarrito.addEventListener ('click', () => {

    carrito.length = []

    mostrarCarrito ()
    
})
}
mostrarProd()

const agregarAlCarrito = (prodId) => {

    const existe = carrito.some (prod => prod.id === prodId)

    if (existe) {
        const prod = carrito.map (prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {
        const item = productos.find((prod) => prod.id === prodId);
        carrito.push(item);
    }


  mostrarCarrito();
};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
    const { id, nombre, precio, img, cantidad } = prod;
    console.log(modalBody);
    modalBody.innerHTML += `
        <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
        <p>Precio: $${precio}</p>
        <p>Cantidad :${cantidad}</p>
        <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
        </div>
        `;
    });

  }

  if (carrito.length === 0) {
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">Agrega Un Producto Al Carrito</p>
    `;
  }

  carritoNumero.textContent = carrito.length;

  precioTotal.textContent = carrito.reduce((acc,prod) => acc + prod.cantidad * prod.precio, 0) 




  guardarstorage();
};

function eliminarProducto(id) {
  const juegoId = id;
  carrito = carrito.filter((juego) => juego.id !== juegoId);
  mostrarCarrito();
}

function guardarstorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

