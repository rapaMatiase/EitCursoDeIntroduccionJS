function saludar(nombre){
    //TIENE PARAMETROS, PERO NO RETORNA NINGUN VALOR.
    console.log(`Hola, ${nombre}`)
}

function saludar2(nombre) {
    //TIENE PARAMETROS, PERO RETORNA UN VALOR.
    return `Hola, ${nombre}`
}

function sumar(a, b){
    return a + b
}

saludar("Matias")
let valorRetornoado2 = saludar2("Cristian")
console.log(valorRetornoado2)