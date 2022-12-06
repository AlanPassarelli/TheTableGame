// inicio de buscardor

const buscador = () => {

    let inputTexto = document.getElementById("inputTexto");
    inputTexto.addEventListener("change", () => {

        let buscador = inputTexto.value;
        let prodFiltrados = productos.filter((producto) =>
            producto.nombre.includes(buscador.toUpperCase()))

            contenedorProductos.innerHTML = ""

        prodFiltrados.map((producto) => {

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


        });
    })
}
buscador()

const eliminarFiltro = document.getElementById("eliminar")


eliminarFiltro.addEventListener('click', () => {
    contenedorProductos.innerHTML = ""
    mostrarProd()
})

// fin de buscador

// inicio de filtro por rango de precio
const rangoPrecio = () => {

    let rango = document.getElementById("rangoDePrecio");
    rango.addEventListener("change", () => {
    
        let rangoPrecio = rango.value;
        let prodRango = productos.filter((producto) =>
            producto.precio < rangoPrecio)

            contenedorProductos.innerHTML = ""

        prodRango.map((producto) => {
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


        });
    })
}
rangoPrecio()

const eliminarRango = document.getElementById("eliminaRango")


eliminarRango.addEventListener('click', () => {
    contenedorProductos.innerHTML = ""
    mostrarProd()
})

//fin de filtro por rango de precio