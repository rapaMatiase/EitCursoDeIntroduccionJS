/* 
Refactorizar el IF, para determinar si la primera columna de la matris de longitud fija 3x1, esta compuesto solo por elementos con valores distintos entre si. 
EJMEPLO

let matris = [
    [1],
    [2],
    [3]
]

RESULTADO :
true


NOTA: No utilizar for.
*/

let matris = [
    [1],
    [2],
    [3]
]


if(matris[0][0] != matris[1][0] && matris[1][0] != matris[2][0] && matris[1][0] != matris[2][0]){
    console.log(true)
}else{
    console.log(false)
}