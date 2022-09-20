/* 
Dado un array hacer las sumatorias de los numeros en posicion par y otra para los numeros en posiciones impares, pero solo utilizar un FOR para recorrer el array. Puedne utilizar IF.
4 11.20
*/

let array = [44,32,656,84,24,-5,3,1-2,23,12*3]

let acumuladorPosicionPar = 0
let acumuladorPoscionImpares = 0

for(let i = 0 ; i < array.length ; i++){
    if(i % 2 === 0){
        acumuladorPosicionPar = acumuladorPosicionPar + array[i]
    }else{
        acumuladorPoscionImpares = acumuladorPoscionImpares + array[i]
    }
}

console.log(acumuladorPoscionImpares, acumuladorPosicionPar)