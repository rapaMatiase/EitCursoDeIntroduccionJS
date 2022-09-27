/* Refactorizar el codigo de abajo para que dada una coordenda de la matriz con los parametros i y j, incremente esa posicion en 1 cada vez que se ejecute hasta llegar a 4. Cuando llega a 4 y vuelve a incrementar, debe volver a 1 el valor.

EJEMPLO. 

Si el valor en i=0 y j = 2 es 2, enconces;
- La primera ejecucion se convierte en 3
- La segunda ejecucion se convierte en 4
- La tercera ejecucion se convierte en 1

3min 12.34
*/

let matris = [
    [1,2,3],
    [2,5,2],
    [3,2,1]
]

function motrarCoord(i, j, matris){
    if(matris[i][j] < 4){
        matris[i][j]++
    }else{
        matris[i][j] = 1
    }
}

motrarCoord(0,1, matris)
console.log(matris)


//SOLUCION JULIO
// function incrementarCeldaValor(i, j, matriz) {
//     if (matriz[i][j] >= 4) {
//         matriz[i][j] = 1
//     }
//     else {
//         matriz[i][j]++
//     }
//     console.log(matriz[i][j]))
// }
