const buscador = () => {

    let inputTexto = document.getElementById("inputTexto");
    inputTexto.addEventListener("change", () => {

        let buscador = inputTexto.value;
        let prodFiltrados = productos.filter((producto) =>
            producto.nombre.includes(buscador.toUpperCase()))

        prodFiltrados.map((producto) => {
            contenedorProductos.innerHTML = ""
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