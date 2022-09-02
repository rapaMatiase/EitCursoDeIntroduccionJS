
let desboardSodoku = [
    [0,0,0],
    [3,1,2],
    [2,3,1]
]

function comenzarJugar(i, j){

    if(desboardSodoku[i][j] < 3){
        desboardSodoku[i][j]++
    }else{
        desboardSodoku[i][j] = 1
    }

    //Muestro por consola el estado del tablero de juego
    console.table(desboardSodoku)
}