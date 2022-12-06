const banner = document.querySelector('#banner')

fetch('../fondo.json')
    .then((response) => response.json())
    .then((fondo) => {
        fondo.forEach(imagen => {
            const div = document.createElement('div')
            div.innerHTML = `
            <img src=${imagen.img}>
            `
            banner.appendChild(div)
        })
    })
