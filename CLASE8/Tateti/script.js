/* 100% javascript !!! */

function controlarFilas(matrix){
    let hayAlgunaFilaCon3EnLinea = false //Supogo que no hasta encontrar lo contrio
    for(let i = 0; i < matrix.length; i++){
        hayAlgunaFilaCon3EnLinea = (matrix[i][0] == matrix[i][1] && matrix[i][0]==matrix[i][2] && matrix[i][1] == matrix[i][2] && matrix[i][0] != "-" && matrix[i][1] != "-" && matrix[i][2] != "-")
    }
    return hayAlgunaFilaCon3EnLinea
}

function controlarColumnas(matrix){
    let hayAlgunaColumnaCon3EnLinea = false //Supogo que no hasta encontrar lo contrio
    for(let j = 0; j < matrix.length; j++){
        hayAlgunaColumnaCon3EnLinea = (matrix[0][j] == matrix[1][j] && matrix[0][j]==matrix[2][j] && matrix[1][j] == matrix[2][j] && matrix[0][j] != "-" && matrix[1][j] != "-" && matrix[2][j] != "-")
    }
    return hayAlgunaColumnaCon3EnLinea
}

function controlarDiagonales(matrix){
    let hayAlunaDiagonalCon3EnLinea = false
    if(matrix[0][0] == matrix[1][1] && matrix[0][0] == matrix[2][2] && matrix[1][1] == matrix[2][2] && matrix[0][0] != "-" && matrix[1][1] != "-" && matrix[2][2] != "-"){
        hayAlunaDiagonalCon3EnLinea = true
    }

    if(matrix[0][2] == matrix[1][1] && matrix[0][2] == matrix[2][0] && matrix[1][1] == matrix[2][0] && matrix[0][2] != "-" && matrix[1][1] != "-" && matrix[0][2] != "-"){
        hayAlunaDiagonalCon3EnLinea = true
    }
    return hayAlunaDiagonalCon3EnLinea
}


let matrixTateti = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ]
let jugadasValidasRelizadas = 0
let juegador = "x"        

function juagar(i, j){
    console.table(matrixTateti)

    let comprobrarPosicionEstaVacia = matrixTateti[i][j] == "-"
    
    if(comprobrarPosicionEstaVacia){
        matrixTateti[i][j] = juegador
        //Contabilizo la juagada
        jugadasValidasRelizadas++


        //Ya se que el jugador juego, entonces cambio
        if(juegador == "x"){
            juegador = "O"
        }else{
            juegador = "x"
        }
    }

    //Ya jugo, ahora controlo si tengo un ganador!!.


    let hayAlgunaFilaCon3EnLinea = controlarFilas(matrixTateti)
    let hayAlgunaColumnaCon3EnLinea = controlarColumnas(matrixTateti)
    let hayAlunaDiagonalCon3EnLinea = controlarDiagonales(matrixTateti)

    //TENGO GANADOR?
    let hayGanador = hayAlgunaFilaCon3EnLinea || hayAlgunaColumnaCon3EnLinea || hayAlunaDiagonalCon3EnLinea
    if(hayGanador){
        //Cuando llego aca, ya se paso de turno, por lo que gano el otro jugador.
        document.getElementById("result").innerHTML = juegador == "x" ? "Ganador O" : "Ganador x"
        console.log(`TENGO UN GANADOR!! ${juegador == "x" ? "O" : "x"}`)
    }

    // condicion logica ? "resutlado true " : "resultado del false"

    //EMPATE
    if(!hayGanador && jugadasValidasRelizadas == 9){
        document.getElementById("result").innerHTML = "EMAPATE"
        console.log("EMAPATE")
    }
    console.table(matrixTateti)

    return matrixTateti[i][j]
}