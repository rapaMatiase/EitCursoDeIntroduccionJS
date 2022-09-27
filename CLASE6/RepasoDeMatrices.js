let matris = [
    [1,2,3,4],
    [1,2],
    [1,2,4,5,7]
]

for (let i = 0; i < matris.length; i++) {
    for(let j = 0; j < matris.length; j++){
        console.log(matris[i][j]) //[FILA][COLUMNA]
    }
}

console.table(matris)