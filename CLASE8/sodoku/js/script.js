/* --------------------------- VARIALBES GLOBALES --------------------------- */

let elCasillaList = document.querySelectorAll("#tablero section")
let elDesboard = document.getElementById("desboard")

let gameState = true
let sodokuTablero = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
//Filas
function hayRepetidosEnLasFilas(matrix) {
    let bandera = true //Supongo que no hay repetidos
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] == matrix[i][1] || matrix[i][0] == matrix[i][2] || matrix[i][1] == matrix[i][2] || matrix[i][0] == 0 || matrix[i][1] == 0 || matrix[i][2] == 0) {
            bandera = false
        }
    }
    return bandera
}

//Columna
function hayRepetidosEnLasColumnas(matrix) {
    let bandera = true
    for (let j = 0; j < matrix.length; j++) {
        if (matrix[0][j] == matrix[1][j] || matrix[0][j] == matrix[2][j] || matrix[1][j] == matrix[2][j] || matrix[0][j] == 0 || matrix[1][j] == 0 || matrix[2][j] == 0) {
            bandera = false
        }
    }
    return bandera
}

/*  Parte 1
    Armar un IF que permita sumar hasta llegar a 3 y vuelva a 1 en vez de seguir a 4. 
*/

function sumarUnoPosicion(i, j) {
    if (sodokuTablero[i][j] < 3) {
        sodokuTablero[i][j]++
    } else {
        sodokuTablero[i][j] = 1
    }
}

function jugada(casillaDondeSeHizoClick) {
    if(gameState == true){
        //Saco del elemento donde se hizo click, los valores de los atributos que cree para representar las posiciones.
        let i = casillaDondeSeHizoClick.getAttribute("data-x")
        let j = casillaDondeSeHizoClick.getAttribute("data-y")
        //Paso la posicon donde se juego a la funcion que se hace cargo de modificar el tablero segun corresponda
        sumarUnoPosicion(i, j)
        //Como medio para comprobar el resultado, muestro por consola el tablero
        console.table(sodokuTablero)
        //Actualizo la interfaz para el usuario
        casillaDondeSeHizoClick.innerHTML = sodokuTablero[i][j]

        //Ahora contrlo si se termino el juego!!!!
        if(hayRepetidosEnLasFilas(sodokuTablero) == false || hayRepetidosEnLasColumnas(sodokuTablero) == false){
            //Si hay repetidos, no se termino el juego
            console.log("Dale, es sodoku, no estan dificil")
            elDesboard.innerHTML = "Segui intentando"
        }else{
            //Si no hay repetidos, se termino el juego.
            console.log("Juego terminado")
            elDesboard.innerHTML = "Juego terminado, Ganate"
            gameState = false
        }
    }
}

function play() {
    for(let i = 0 ; i < elCasillaList.length ; i++){
        elCasillaList[i].addEventListener("click", function (event) {
            //Obtengo del parametro Event (viene por defualt) el elemento donde se hizo click
            let casillaDondeSeHizoClick = event.target
            jugada(casillaDondeSeHizoClick)
            console.log("clickc")
        })
    }
}

play()