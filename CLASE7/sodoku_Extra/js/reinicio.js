function reinicioDeJuego(){
    //Devolver todas las variables al mismo estado que tenia antes de comenzar a jugar. 4min 10.24

    desboardSodoku = [
        [VALOR_VACIO,VALOR_VACIO,VALOR_VACIO],
        [VALOR_VACIO,VALOR_VACIO,VALOR_VACIO],
        [VALOR_VACIO,VALOR_VACIO,VALOR_VACIO]
    ]

    estaElJuegoTerminado = false

    for (let i = 0; i < elSquarts.length; i++) {
        const element = elSquarts[i];
        element.textContent = ""
    }

    elGanador.textContent = ""
}