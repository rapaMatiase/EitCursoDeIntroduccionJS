/* Dado el mismo array del ejercicio anterio, realizar la sumatoria de los valores en las posicion pares.
4min 11.09
*/

let array = [44,32,656,84,24,-5,3,1-2,23,12*3]
//SOLUCION 1
let acumulador = 0
for(let i = 0 ; i < array.length ; i = i+2){
    acumulador = acumulador + array[i]
}

//SOLUCION 2
let acumulador2 = 0
for(let i = 0 ; i < array.length ; i++){
    if(i % 2 === 0){
        acumulador2 = acumulador2 + array[i]
    }
}
