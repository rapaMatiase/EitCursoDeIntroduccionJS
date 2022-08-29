/* 
Dada una matriz de longitud fija 3x3.
Determinar para cada fila, si los elemenos en esta son distintos.

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
4min 11.04
*/
let matris = [

    [1,2,2],
    [2,3,1],
    [1,1,1]
]

for(let i = 0 ; i < matris.length ; i++){
    if(matris[i][0] != matris[i][1] && matris[i][0] != matris[i][2] && matris[i][1] != matris[i][2]){
        console.log("Son disitnos")
    }else{
        console.log("No son distintos")
    }
}
