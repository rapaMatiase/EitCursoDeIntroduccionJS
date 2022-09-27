/* 
Refactorizar el IF, para determinar si cada fila de la matris de longitud fija 3x3 estan solo conformadas por valores distintos entre si. Dar un resultado por cada fila por separado.

let matris = [
    [1,2,3],
    [1,3,3],
    [1,6,3],
]

RESULTADO :
true
false
true

NOTA : Utilizar solo un FOR.
*/

let matris = [
    [1,2,3],
    [1,3,3],
    [1,6,3],
]

//PASO 1 : FOR QUE IMPRIMA CADA FILA POR SERAPADO EN PANTALLA. 3 min 11.57

// for(let i = 0 ; i < matris.length ; i++){
//     /* ACA DENTRO, LA MATRIZ EN LA POSICON I, FUNCIONA COMO SI FUERA UN ARRAY.  */
//     console.log(matris[i])
// }

/* PASO 2 : ANIDAR UN IF DENTRO DEL FOR, CAMBIANDO LA POSICION HARDCODEADA DE LAS FILAS POR EL VALOR DE LA VARIABEL I. */

for(let i = 0 ; i < matris.length ; i++){
    if(matris[i][0] != matris[i][1] && matris[i][1] != matris[i][2] && matris[i][1] != matris[i][2]){
        console.log(true)
    }else{
        console.log(false)
    }
}

