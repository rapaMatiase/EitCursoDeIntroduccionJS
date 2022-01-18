//Nosotors determinamos que "-" significa posicion libre.
let tableroTateti = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
]

let cantidadDeTurno = 0

const SIMBOLO_JUGADOR_X = "X"
const SIMBOLO_JUAGADOR_O = "O"
const SIMBOLO_VACIO = "-"

const PANEL_TURNO = document.getElementById("panel_turno")
const PANEL_RESULTADO = document.getElementById("panel_resultado")
const EL_BUTTON_REPLAY = document.getElementById("replay")
let turno = SIMBOLO_JUGADOR_X

let gameOver = false

function estaLaPosicionLibre(i, j) {
    return tableroTateti[i][j] == SIMBOLO_VACIO
}

//Funcion que contrle los 3 en linea horizontales
function hayTresEnLineaHorizontal() {
    //2min 21.39HS
    let hayTresEnLinea = false
    for (let i = 0; i < tableroTateti.length; i++) {
        if (tableroTateti[i][0] == tableroTateti[i][1] && tableroTateti[i][0] == tableroTateti[i][2] && tableroTateti[i][0] != "-" && tableroTateti[i][1] != "-" && tableroTateti[i][2] != "-") {
            hayTresEnLinea = true
        }
    }
    return hayTresEnLinea
}

//Funcion que contrle los 3 en linea verticales
function hayTresEnLineaVertical() {
    //2min 21.45
    let hayTresEnLinea = false
    for (let j = 0; j < tableroTateti.length; j++) {
        if (tableroTateti[0][j] == tableroTateti[1][j] && tableroTateti[0][j] == tableroTateti[2][j] && tableroTateti[0][j] != "-" && tableroTateti[1][j] != "-" && tableroTateti[2][j] != "-") {
            hayTresEnLinea = true
        }
    }
    return hayTresEnLinea
}
//Funcion que contrle los 2 dos diagonales
function hayTresEnLineaDigonal() {
    let hayTresEnLinea = false

    if (tableroTateti[0][0] == tableroTateti[1][1] && tableroTateti[0][0] == tableroTateti[2][2] && tableroTateti[0][0] != SIMBOLO_VACIO && tableroTateti[1][1] != SIMBOLO_VACIO && tableroTateti[2][2] != SIMBOLO_VACIO) {
        hayTresEnLinea = true
    }

    if (tableroTateti[0][2] == tableroTateti[1][1] && tableroTateti[0][2] == tableroTateti[2][0] && tableroTateti[0][2] != SIMBOLO_VACIO && tableroTateti[1][1] != SIMBOLO_VACIO && tableroTateti[2][0] != SIMBOLO_VACIO) {
        hayTresEnLinea = true
    }

    return hayTresEnLinea
}

function hayGanador() {
    return hayTresEnLineaHorizontal() || hayTresEnLineaVertical() || hayTresEnLineaDigonal()
}

//Donde la i y j son las coordenadas donde jugar
function play(i, j, el) {

    if (!gameOver) {
        if (estaLaPosicionLibre(i, j)) {
            //REFLEJO LA JUGADA EN AL ESTRUCTURA LOGICA
            tableroTateti[i][j] = turno
            //REFLEJO LA JUGADA EN LA INTERFAZ GRAFICA
            el.innerHTML = turno
            cantidadDeTurno++



            //GANADOR
            let hayGanadorEntoncesSeTerminoElJuego = hayGanador()
            if (hayGanadorEntoncesSeTerminoElJuego) {
                console.log(`Hay un ganador. ${turno}`)
                PANEL_RESULTADO.innerHTML = `Hay un ganador. ${turno}`
                gameOver = true
            }

            //EMPATE
            let noHayGanador = !hayGanadorEntoncesSeTerminoElJuego
            if (noHayGanador && cantidadDeTurno == tableroTateti.length * tableroTateti.length) {
                console.log("Es un empate")
                PANEL_RESULTADO.innerHTML = "Es un empate"
                gameOver = true

            }

            //Cambio el turno
            if (turno == SIMBOLO_JUGADOR_X) {
                turno = SIMBOLO_JUAGADOR_O
            } else {
                turno = SIMBOLO_JUGADOR_X
            }
            //REFLEJO EN LA INTERFAZ EL CAMBIO DE TURNO
            PANEL_TURNO.innerHTML = turno
        } else {
            console.log("Esa posicion ya esta ocupada")
        }

        console.table(tableroTateti)
    }
}


function CargarJuego() {
    //PRESENTO EL TURNO DE QUIEN ES
    PANEL_TURNO.innerHTML = turno

    //MAS TARDE CREAMOS LA INTERFAZ ACA.
    
}


EL_BUTTON_REPLAY.addEventListener("click", function () {
    tableroTateti = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ]

    for (let i = 0; i < elSections.length; i++) {
        elSections[i].innerHTML = ""
    }

    cantidadDeTurno = 0
    turno = SIMBOLO_JUGADOR_X

    PANEL_RESULTADO.innerHTML = ""

    gameOver = false

})