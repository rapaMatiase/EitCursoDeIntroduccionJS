/* 
Refactorizar para que el resultado sea una conclusion de toda la matris y no por columna. Al igual que el ejercicio 13, pero para columnas. 
3min 11.37
*/
let matris = [
    [1,2,2],
    [2,3,1],
    [1,1,1]
]
let banderaSonTodosDistintos = true
for(let j = 0 ; j < matris.length ; j++){
    if(matris[0][j] == matris[1][j] || matris[0][j] == matris[2][j] || matris[1][j] == matris[2][j]){
        banderaSonTodosDistintos = false
    }
}
console.log(banderaSonTodosDistintos)
