/* 
Determinar si un numero es positivo, negativo o cero.

*/

function esPositivo(valor){
    if(0 < valor){
        return true
    }else{
        return false
    }
}

function esPositivo2(valor){
    let resultado = false
    if(0 < valor){
        resultado =  true
    }
    return resultado
}

function esPositivo3(valor){
    return (0 < valor)
}

function esNegativo(valor){
    return valor < 0
}

function esCero(valor){
    return valor === 0
}

let numeroIngresado = prompt("Ingrese un numero")
let numeroConvertido = Number(numeroIngresado)

if(esPositivo3(numeroConvertido)){
    console.log("POSITIVO")
}else if( esNegativo(numeroConvertido)){
    console.log("NEGATIVO")
} else if(esCero(numeroConvertido)){
    console.log("ES CERO")
}