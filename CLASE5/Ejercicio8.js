/* DADA UNA MATRIS IMPRIMIR EN PANTALLA AL REVEZ

let matris = [
    [1,2],
    [3,4]
]

RESULTADO
4
3
2
1

3min 10.46
*/
let matris = [
    [1,2],
    [3,4]
]


for(let i = matris.length - 1 ; i > -1 ; i--){
    for(let j = matris[i].length -1 ; j > -1 ; j--){
        console.log(matris[i][j])
    }
}