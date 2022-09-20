/* Dada una matris hacer la sumatoria de sus elementos */

let matris = [
    [1, 2],
    [3, 4]
]

let acumulador = 0

for(let i = 0 ; i < matris.length ; i++){
    for(let j = 0; j < matris[i].length ; j++){
        acumulador = acumulador + matris[i][j]
    }
}

console.log(acumulador)