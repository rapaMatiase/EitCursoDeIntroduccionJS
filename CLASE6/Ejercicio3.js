/* 
Refactorizar el IF, para determinar si la primera fila de la matris de longitud fija 1x3, esta compuesto solo por elementos con valores distintos entre si. 
EJMEPLO

let matris = [
    [1,2,3]
]

RESULTADO :
true


NOTA: No utilizar for.
*/

let matris = [
    [1,2,3],
]


if(matris[0][0] != matris[0][1] && matris[0][1] != matris[0][2] && matris[0][1] != matris[0][2]){
    console.log(true)
}else{
    console.log(false)
}