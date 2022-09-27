/* 
Refactorizar el IF, para determinar si todas las columna de la matris de longitud fija 3x3, esta compuesto solo por elementos con valores distintos entre si. 
EJMEPLO

let matris = [
    [1,2,3],
    [2,5,2],
    [3,2,1]
]

RESULTADO :
true


NOTA: No utilizar for.
*/

let matris = [
    [1,2,3],
    [2,5,2],
    [3,2,1]
]

for(let j = 0; j < matris.length ; j++){
    if(matris[0][j] != matris[1][j] && matris[0][j] != matris[2][j] && matris[1][j] != matris[2][j]){
        console.log(true)
    }else{
        console.log(false)
    }
}

