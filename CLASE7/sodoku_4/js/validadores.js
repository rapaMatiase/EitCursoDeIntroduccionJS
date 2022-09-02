
function hayRepetidosEnFilas(matris){
    let hayRepetidos = false //NO
    for(let i = 0 ; i < matris.length ; i++){
        if(matris[i][0] == matris[i][1] || matris[i][0] == matris[i][2] || matris[i][1] == matris[i][2] || matris[i][0] == 0 || matris[i][1] == 0 || matris[i][2] == 0){
            hayRepetidos = true
        }
    }
    return hayRepetidos
}

function hayRepetidosEnColumnas(matris){
    let hayRepetidos = false
    for(let j = 0 ; j < matris.length ; j++){
        if(matris[0][j] == matris[1][j] || matris[0][j] == matris[2][j] || matris[1][j] == matris[2][j] || matris[0][j] == 0 || matris[1][j] == 0 || matris[2][j] == 0){
            hayRepetidos = true
        }
    }
    return hayRepetidos
}