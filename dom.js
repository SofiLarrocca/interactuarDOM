let input = document.getElementById('input')
let btn = document.getElementById('button')
let divCard = document.getElementById ('productos')
let titulo = document.getElementById('titulo')

// EVENTOS
// Evento Enter
input.addEventListener ('keyup', (event) => {
    if (event.key === 'Enter') { 
        let opcion = input.value
        mostrarProductos (opcion)
        titulo.className = 'block'
    }
})

// Evento Click
function enviar () {
btn.addEventListener ('click', () => { 
    let opcion = input.value
    mostrarProductos (opcion)
})
}
enviar ()

function mostrarProductos (idProd) { 
    console.log (idProd)
    let existe = productos.some(e => e.id == idProd)

    if (existe) { 
        productos.filter (e => { 
            if (e.id == idProd) { 

                alert (`Se agregó ${e.marca} ${e.variedad}`)

                // Creo card del producto selecionado en HTML:
                let card = document.createElement('div')
                divCard.append(card)
                card.className = 'card-producto'

                // Pego elementos en la card-producto
                let img = document.createElement('img')
                img.src = e.img
                img.className = 'card-producto-img'
                let marca = document.createElement('h3')
                marca.innerText = e.marca
                let variedad = document.createElement('p')
                variedad.innerText = e.variedad
                // Pego en card:
                card.append(img, marca, variedad)
            } 
        })
    } else {
        alert ('Seleccione una opción correcta')
    }
}

