
//FUNCION DEL EJERCICIO 10, PERO AHORA CUENTA HASTA 3.
function incrementar(i, j){
    if(matrisSodoku[i][j] < 3){
        matrisSodoku[i][j]++
    }else{
        matrisSodoku[i][j] = 1
    }
}

//EJERCICIO 11 CONVERTIDO EN FUNCION
function noHayRepetidosEnFilas(){
    let banderaNoHayRepetidos = true
    for(let i = 0 ; i < matrisSodoku.length ; i++){
        if(matrisSodoku[i][0] == matrisSodoku[i][1] || matrisSodoku[i][1] == matrisSodoku[i][2] || matrisSodoku[i][1] == matrisSodoku[i][2]){
            banderaNoHayRepetidos = false
        }
    }
    
    return banderaNoHayRepetidos
}

//EJERCICIO 6 CONVERTIDO EN FUNCION MAS BANDERA COMO EN EL EJERICICO 11 PARA FILAS. 
function noHayRepetidosEnColumnas(){
    let banderaNoHayRepetidos = true
    for(let j = 0 ; j < matrisSodoku.length ; j++){
        const primeraCelda = matrisSodoku[0][j]
        const segundaCelda = matrisSodoku[1][j]
        const tercerCelda = matrisSodoku[2][j]
        if(primeraCelda == segundaCelda || primeraCelda == tercerCelda || segundaCelda == tercerCelda){
            banderaNoHayRepetidos = false
        }
    }
    
    return banderaNoHayRepetidos
}

let juegoTerminado = false
function play(i, j){
    if(juegoTerminado == false){
        //Jugada realizada por el jugador
        incrementar(i, j)
        //Comprobar si ya gano.
        let resultadoFilas = noHayRepetidosEnFilas()
        let resultadoColumnas = noHayRepetidosEnColumnas()
        if(resultadoFilas && resultadoColumnas){
            juegoTerminado = true
            console.log("GANASTE - SE TERMINO EL JUEGO")
        }
        console.table(matrisSodoku)
    }
    return matrisSodoku[i][j]
}