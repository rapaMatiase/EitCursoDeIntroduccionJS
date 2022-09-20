//API REST
let JSON = [
    {id : 001, precio : 321, detalle : "Lampara usada"},
    {id : 002, precio : 40000, detalle : "Tableta samsung Redear amazon"},
    {id : 003, precio : 100000, detalle : "Talbeta samsung tab6 lite"},
]

for(let i = 0 ; i < JSON.length ; i++){
    const producto = JSON[i]
    let element = `<p id="${producto.id}"> ${producto.detalle} - $ ${producto.precio} </p>`
    document.write(element)
}