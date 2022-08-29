/* 
Dada una matriz, determinar si la diagonal principal de esta esta conformada por elementos identicos.

Ejmplo
let matris = [

    [1,2,2],
    [2,1,2],
    [2,2,1]
]
RESULTADO
true

NOTA: Solo usar IF, NADA FOR.

3mipn 11.43
*/

let matris = [

    [1,2,2],
    [2,1,2],
    [2,2,1]
]


if(matris[0][0] == matris[1][1] && matris[0][0] == matris[2][2]){
    console.log("Son iguales")
}else{
    console.log("No son iguaels")
}