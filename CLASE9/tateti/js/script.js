const SIMBOLO_JUGADOR_X = "X"
const SIMBOLO_JUGADOR_O = "O"
const SIMBOLO_CASILLA_VACIA = "-"


let tableroTateti = [
    [SIMBOLO_CASILLA_VACIA,SIMBOLO_CASILLA_VACIA,SIMBOLO_CASILLA_VACIA],
    [SIMBOLO_CASILLA_VACIA,SIMBOLO_CASILLA_VACIA,SIMBOLO_CASILLA_VACIA],
    [SIMBOLO_CASILLA_VACIA,SIMBOLO_CASILLA_VACIA,SIMBOLO_CASILLA_VACIA],
]

let turno = SIMBOLO_JUGADOR_X
let contadorDeJugadar = 0
let elJuegoNoSeTermino = true 

function arrayCompuestoSoloPorUnSimbolo(tablero, i){
    return tablero[i][0] == tablero[i][1] && tablero[i][0] == tablero[i][2]
}

function arrayNoContieneElSimboloDeUnaCasillaVacia(tablero, i){
    return tablero[i][0] != SIMBOLO_CASILLA_VACIA && tablero[i][1] != SIMBOLO_CASILLA_VACIA && tablero[i][2] != SIMBOLO_CASILLA_VACIA
}

function controlarFilas(tablero){
    /* Devuelvo true, si alguna de las tres filas resulta estar compuesta solo por un unico simbolo. */
    let estanTodasLasFilasCompuestasPorDistinosSimbolos = false
    for(let i = 0; i < tablero.length ; i++){
        if(arrayCompuestoSoloPorUnSimbolo(tablero, i) && arrayNoContieneElSimboloDeUnaCasillaVacia(tablero, i)){
            estanTodasLasFilasCompuestasPorDistinosSimbolos = true
        }
    }
    return estanTodasLasFilasCompuestasPorDistinosSimbolos
}

function columnaCompuetaPorUnSoloSimbolo(tablero, j){
    return tablero[0][j] == tablero[1][j] && tablero[0][j] == tablero[2][j]
}

function columnaNoContieneElSimboloDeUnaCasillaVacia(tablero, j){
    return tablero[0][j] != SIMBOLO_CASILLA_VACIA && tablero[1][j] != SIMBOLO_CASILLA_VACIA && tablero[2][j] != SIMBOLO_CASILLA_VACIA
}

function controlarColumnas(tablero){
    /* Devuelvo true, si alguna de las tres filas resulta estar compuesta solo por un unico simbolo. */
    let estanTodasLasColumnasCompuestasPorDistinosSimbolos = false
    for(let j = 0; j < tablero.length ; j++){
        if(columnaCompuetaPorUnSoloSimbolo(tablero, j) && columnaNoContieneElSimboloDeUnaCasillaVacia(tablero, j)){
            estanTodasLasColumnasCompuestasPorDistinosSimbolos = true
        }
    }
    return estanTodasLasColumnasCompuestasPorDistinosSimbolos
}

function ControlarDiagonales(tablero){
    let estanTodasLasDiagonalesCompuestasPorDistintosSimbolos = false

    if(tablero[0][0] == tablero[1][1] && tablero[0][0] == tablero[2][2] && tablero[0][0] != SIMBOLO_CASILLA_VACIA && tablero[1][1] != SIMBOLO_CASILLA_VACIA && tablero[2][2] != SIMBOLO_CASILLA_VACIA){
        estanTodasLasDiagonalesCompuestasPorDistintosSimbolos = true
    }

    if(tablero[0][2] == tablero[1][1] && tablero[0][2] == tablero[2][0] && tablero[0][2] != SIMBOLO_CASILLA_VACIA && tablero[1][1] != SIMBOLO_CASILLA_VACIA && tablero[2][0] != SIMBOLO_CASILLA_VACIA){
        estanTodasLasDiagonalesCompuestasPorDistintosSimbolos = true
    }

    return estanTodasLasDiagonalesCompuestasPorDistintosSimbolos
}

function elJuegoEstaTerminado(tablero){
    /* Devuevle true si alguno de los dos jugadores logro hacer 3 en linea. */
    return controlarFilas(tablero) || controlarColumnas(tablero) || ControlarDiagonales(tablero)
}

function pasarDeTurnoDeJugador(){
    if( turno == SIMBOLO_JUGADOR_X){
        turno = SIMBOLO_JUGADOR_O
    }else{
        turno = SIMBOLO_JUGADOR_X
    }
}

function escribirJugada(x, y){
    if(tableroTateti[x][y] === SIMBOLO_CASILLA_VACIA){
        tableroTateti[x][y] = turno
        //Solo paso de turno si la jugada se puedo hacer
        pasarDeTurnoDeJugador()
        //Tomo nota de la cantidad de jugadas realizada durante la partida
        contadorDeJugadar++
    }else{
        console.log("Ahi no podes jugar, porque ya se jugo.")
    }
}

function quienFueElUltimoEnJugar(){
    let ultimoEnJugar = SIMBOLO_CASILLA_VACIA
    if( turno == SIMBOLO_JUGADOR_X){
        ultimoEnJugar = SIMBOLO_JUGADOR_O
    }else{
        ultimoEnJugar = SIMBOLO_JUGADOR_X
    }
    return ultimoEnJugar
}

function play(x, y){
    escribirJugada(x, y)

    if(elJuegoEstaTerminado(tableroTateti)){
        let jugadorGanador = quienFueElUltimoEnJugar()
        console.log(`Se termino el jeugo, gano ${jugadorGanador}`)
        elJuegoNoSeTermino = false
    }else if(contadorDeJugadar == 9){
        console.log("Empate")
        elJuegoNoSeTermino = false
    }

    console.log(elJuegoEstaTerminado(tableroTateti))
    console.table(tableroTateti)
}

function cargarJuego(){
    let listaDeCasilla = document.querySelectorAll("article section")
    for(let i = 0 ; i < listaDeCasilla.length ; i++){
        listaDeCasilla[i].addEventListener("click", function(event){    
            //El elemento cliqueado por el usuario
            let elCliqueado = event.target
            //Puedo sacar la posicion correspondiente
            let x = elCliqueado.getAttribute("data-x")
            let y = elCliqueado.getAttribute("data-y")
            //Ahora puedo jugar
            if(elJuegoNoSeTermino == true){
                play(x, y)
                elCliqueado.innerHTML = quienFueElUltimoEnJugar()
            }
        })
    }

    console.log(listaDeCasilla)
}
