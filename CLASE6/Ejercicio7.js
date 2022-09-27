/* Dada la siguiente matris, crear una funcion que reciba tres parametros. Una posicion en i, una posicion en j, y la matris de abajo. Imprimir por pantalla el valor ubicado en las coordenadas i y j.  
Suponemos que siempre se envia valores numericos dentro del rango que la matris acepta. 
3min 12.13
*/

let matris = [
    [1,2,3],
    [2,5,2],
    [3,2,1]
]

function motrarCoord(i, j, matris){
    console.log(matris[i][j])
}

motrarCoord(0,1, matris)