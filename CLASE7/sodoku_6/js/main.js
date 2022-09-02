
let desboardSodoku = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let estaElJuegoTerminado = false //NO
let elGanador = document.getElementById("ganador")

function comenzarJugar(i, j){
    //¿Como hago para bloquear el tablero de juego para que cuando el juegador gane no pueda continuar haceindo cambios en el tablero? 3min 10..12
    if(!estaElJuegoTerminado){
        if(desboardSodoku[i][j] < 3){
            desboardSodoku[i][j]++
        }else{
            desboardSodoku[i][j] = 1
        }

        if(!hayRepetidosEnColumnas(desboardSodoku) && !hayRepetidosEnFilas(desboardSodoku)){
            estaElJuegoTerminado = true //Si, se termino
            //MUESTRO EN HTML
            elGanador.textContent = "GANASTE"
            //MUESTRO EN LA CONSOLA
            console.log("GANASTE")
        }else{
            console.log("Segui intentandolo")
        }
    }else{
        console.log("Juego terminado, reinicia o anda a hacer otra cosa.")
    }
    console.table(desboardSodoku)

    return desboardSodoku[i][j]
}