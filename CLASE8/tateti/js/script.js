/* 
Ejercicio 1 
Crear una funcion que verifique si hay un fila con todos los elemntos iguales. No importa quien gano todavia.
3min 11.51
*/

function controlarFilas(tablero){
    /* Devuelvo true, si alguna de las tres filas resulta estar compuesta solo por un unico simbolo. */
    let estanTodasLasFilasCompuestasPorDistinosSimbolos = false
    for(let i = 0; i < tablero.length ; i++){
        if(tablero[i][0] == tablero[i][1] && tablero[i][0] == tablero[i][2] && tablero[i][0] != "-" && tablero[i][1] != "-" && tablero[i][2] != "-"){
            estanTodasLasFilasCompuestasPorDistinosSimbolos = true
        }
    }
    return estanTodasLasFilasCompuestasPorDistinosSimbolos
}

/* 
Ejercio 2
Hacer una funcion que controle si hay una columna solo conformada por un mismo simbolo. Lo mismo que arriba, pero para columnas
*/

/* 
Ejercicio 3
Hacer una funcion que controle si hay alguna de las dos diagonales compuesta solo por un mismo simobolo. 
AYUDA
 NO UTILIZAR FOR, solo IF. 
 
*/