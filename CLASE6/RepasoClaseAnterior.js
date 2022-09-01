let array = [1,2,3]

let matris  = [
    [1,2,3],
    [2,3,4],
    [2,3,3]
]

console.table(matris)

for (let i = 0; i < matris.length; i++) {
    for (let j = 0; j < matris[i].length; j++) {
        const cellda = matris[i][j];
        console.log(cellda)
    }    
}

