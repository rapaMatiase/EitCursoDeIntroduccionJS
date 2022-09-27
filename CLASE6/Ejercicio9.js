/* Refactorizar el codigo de abajo para que dada una coordenda de la matriz con los parametros i y j, incremente esa posicion en 1. 

EJEMPLO. 

Si el valor en i=0 y j = 2 es 3, despues de ejecutar la funcion tiene que ser 4. Si la vuelvo a ejecutar, debe ser 5, .... 

3min 12.29
*/

let matris = [
    [1,2,3],
    [2,5,2],
    [3,2,1]
]

function motrarCoord(i, j, matris){
    matris[i][j]++
}

motrarCoord(0,1, matris)
console.log(matris)