
//Una funcion que controle repetidos en filas
function hayRepetidosEnFilas(matris){
    //Esta funcion debe devolver true si hay repetiso, false si no los hay. Usar de ejemplos los ejercicios hechos en la clase 5 o 6 de matrices.
    let hayRepetidos = false //NO
    for(let i = 0 ; i < matris.length ; i++){
        if(matris[i][0] == matris[i][1] || matris[i][0] == matris[i][2] || matris[i][1] == matris[i][2] || matris[i][0] == 0 || matris[i][1] == 0 || matris[i][2] == 0){
            hayRepetidos = true
        }
    }
    //4min 9.44
    return hayRepetidos
}

//Una funcion que controle repetidos en columnas
function hayRepetidosEnColumnas(matris){
    //Realizar una funcion que devuleva true si hay repetidos en las columnas, flase si no las hay. El cero no es un valor valido. 3min 9. 55
    let hayRepetidos = false
    for(let j = 0 ; j < matris.length ; j++){
        if(matris[0][j] == matris[1][j] || matris[0][j] == matris[2][j] || matris[1][j] == matris[2][j] || matris[0][j] == 0 || matris[1][j] == 0 || matris[2][j] == 0){
            hayRepetidos = true
        }
    }
    return hayRepetidos
}