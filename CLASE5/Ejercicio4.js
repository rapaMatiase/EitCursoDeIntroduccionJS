/* 
Dado un array, determinar que no hay numeros mayores a 50.

EJEMPLO 1
let array = [1,2,3,77]
RESULTADO 
false (SI hay numeros mayores de 50)

EJEMPLO 2
let array = [1,2,3,7]
RESULTADO 
true (NO hay numeros mayores de 50)
3min 9.45
*/

let array = [1,2,3,77]
let banderaNoHayNumeroMayores50 = true
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(50 < element){
        banderaNoHayNumeroMayores50 = false
    }
}
console.log(banderaNoHayNumeroMayores50)