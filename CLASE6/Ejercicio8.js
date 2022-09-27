/* Refactorizar el codigo de abajo, para que reciba tambien un valor numerico como cuarto parametro. En la posicion i y j de la matris, sobreescriibr con el valor recibido.

Si tengo matris de abajo, y i = 0, j = 0 y recibo 1000,
el resultado debe ser
let matris = [
    [1000,2,3],
    [2,5,2],
    [3,2,1]
]


3min 12.22
*/

let matris = [
    [1,2,3],
    [2,5,2],
    [3,2,1]
]

function motrarCoord(i, j, matris, valor){
    matris[i][j] = valor
}

motrarCoord(0,1, matris, 9999)
console.log(matris)