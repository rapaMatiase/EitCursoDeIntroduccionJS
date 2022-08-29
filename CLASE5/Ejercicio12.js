/* 
Dada una matriz de longitud fija 3x3.
Determinar para cada COLUMNA, si los elemenos en esta son distintos.

let matris = [
    [1,2,2],
    [2,3,1],
    [1,1,1]
]
RESULTO
No son distintos
Son distitnos
No son distintos

NOTA :Utilizar solo un FOR y un IF anidado (basandose en el ejericcio 9)
4min 11.20
*/
let matris = [
    [1,2,2],
    [2,3,1],
    [1,1,1]
]

for(let j = 0 ; j < matris.length ; j++){
    if(matris[0][j] != matris[1][j] && matris[0][j] != matris[2][j] && matris[1][j] != matris[2][j]){
        console.log("Son disitnos")
    }else{
        console.log("No son distintos")
    }
}
