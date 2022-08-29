/* 

La susecion de figonachi pero con array

let array = [1,1]

Agregarle al array los elemenos necesarios para completar la sucesion de figonachi hasta el elemento numero 7.

1,1,2,3,5,8,13

Mostrar el pantalla el array terminado.

3min 10.19

*/

let array = [1,1]
let posicionAnterior = 0
let posicionActual = 1
for(let i = 0 ; i < 5 ; i++){
    let siguiente = array[posicionAnterior] + array[posicionActual]
    array.push(siguiente)
    posicionActual++
    posicionAnterior++
}
console.log(array)