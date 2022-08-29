/* 
Refactorizar el codigo para que emita un resultado unico por toda la matriz. Si todas las filas estan compuestas por elementos distintos, entonces debe mostrar true. Si al menos una fila tiene componenetes repetidos, debe mostra false.

NOTA: Utilizar una bandera.
3min 11.29
*/
let matris = [
    [1,2,2],
    [2,3,1],
    [1,1,1]
]

let banderaSonTodosDistintos = true
for(let i = 0 ; i < matris.length ; i++){
    if(matris[i][0] == matris[i][1] || matris[i][0] == matris[i][2] || matris[i][1] == matris[i][2]){
        banderaSonTodosDistintos = false
    }
}
console.log(banderaSonTodosDistintos)
