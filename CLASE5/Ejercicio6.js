/* 
Crear un FOR que permita mostra la siguiente sucesion de numeros.

1,1,2,3,5,8,13

NOTA:Se tiene dos variables que contiene el valor anterior y al actual.

ITERCAION 1
anterior = 1
actual = 1
siguiente = anterior + actual = 2

ITERACIION 2
anterior = 1
actual = 2
siguiente = anterio + actual = 3

ITERACION 3
anterior = 2
actual = 3
siguiente = anterior + actual = 5

y sucesivamente...
3min 10.04
*/

let anterior = 1
let actual = 1
let siguiente = 0
for(let i = 0 ; i < 5 ; i++){
    siguiente = anterior + actual
    console.log(siguiente)
    anterior = actual
    actual = siguiente
}