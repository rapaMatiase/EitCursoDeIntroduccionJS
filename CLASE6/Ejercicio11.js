/* 
Refactorizar el codigo de abjo para que en vez de dar un resultado por cada fila, de un resultado por toda la matris. Si todas las filas estan compuestas por valores distintos, entonces devuelva true. Si una sola fila tiene un repetido, devuelve false.

let matris = [
    [1,2,3],
    [1,3,3],
    [1,6,3],
]

RESULTADO :
false porque hay un repetido en la fila 1
*/

let matris = [
    [1,2,3],
    [1,3,3],
    [1,6,3],
]

let banderaNoHayRepetidos = true
for(let i = 0 ; i < matris.length ; i++){
    if(matris[i][0] == matris[i][1] || matris[i][1] == matris[i][2] || matris[i][1] == matris[i][2]){
        banderaNoHayRepetidos = false
    }
}

console.log(banderaNoHayRepetidos)

