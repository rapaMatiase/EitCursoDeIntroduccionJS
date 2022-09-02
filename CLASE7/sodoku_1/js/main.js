//ACA ARRANCA LA LOGICA DE MI SODOKU


//El cero indica que una casilla esta vacia, y elijo un valor que me convenga.

let desboardSodoku = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

//Esta es la funcion donde comienza el juego.
function comenzarJugar(i, j){

    // PASO 1 : Dada dos coordenadas pasas como parametro. Crear una linea de codigo que sume uno a la posicion enviada. 3min 9.26
    //desboardSodoku[i][j]++

    //PASO 2 : Agregar la estrucutra de control condicional necesaria para que le valor en una posicion del tablero siempre este entre 1 y 3. Si el usaurio pide sumar uno mas a una posicion que vale 3, deberia volver a tener un valor igual a 1. 4min 9.33
    if(desboardSodoku[i][j] < 3){
        desboardSodoku[i][j]++
    }else{
        desboardSodoku[i][j] = 1
    }

    //Muestro por consola el estado del tablero de juego
    console.table(desboardSodoku)
}