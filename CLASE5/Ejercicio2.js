
/* 
Dado un array, crear otro nuevo array con los numeros menores de 20.

EJEMPLO
let array = [22,1,2,42,12,42]
RESULADO
[1,2,12]

NOTA:  Acumular los numeors que cumplen en un nuevo array vacio [].
3min 9.19
*/
let array = [22,1,2,42,12,42]
let arrayFiltrado = []

for(let i = 0 ; i < array.length ; i++){
    const elemento = array[i]
    if(elemento < 20){
        arrayFiltrado.push(elemento)
    }
}
console.log(arrayFiltrado)