// 10 digitos de la sucesion de figonachi.

// 0 1 1 2 3 5 8 13 21
// 21 = 8 + 13
// 13 = 8 + 5
// 8 = 5 + 3
// 5 = 3 + 2
// 3 = 2 + 1
// 2 = 1 + 1
// 1 = 1 + 0
//Donde salio el 0 y 1 del pricipio? 0 +0 +0 +0 ES 0.

let anterior = 0
let actual = 1
console.log(anterior)
console.log(actual)

for(let i = 0 ; i < 8 ; i++){
    let nuevoActual = actual + anterior
    console.log(nuevoActual)
    anterior = actual
    actual = nuevoActual
}

/* 
REHACER ESTE PERO UTILIZANDO ARRAYS

let array = [0, 1]

Rellana el array con el resto de los valores de la sucesion hasta tener 10 digitos en total. 
*/