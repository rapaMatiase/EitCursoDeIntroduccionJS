let sodokuMatrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]


function add(i, j) {
    if (sodokuMatrix[i][j] == 3) {
        sodokuMatrix[i][j] = 1
    } else {
        sodokuMatrix[i][j]++
    }
    
    if(!existeRepetidosEnColumna() && !existeRepetidosEnFila() && !existePosicionesVacias()){
        //MODIFICACION AGREGADA PARA EL PASO 11
        document.getElementById("resultado").innerHTML = "JUEGO TERMINADO"
        console.log("Juego terminado")
    }
    console.table(sodokuMatrix)
    //MODIFICACION AGREGADA PARA EL PASO 10 - 2/2
    return sodokuMatrix[i][j]
}

function existePosicionesVacias(){
    let bandera = false
    for (let i = 0; i < sodokuMatrix.length; i++) {
        for (let j = 0; j < sodokuMatrix[i].length; j++) {
            if(sodokuMatrix[i][j] == 0){
                bandera = true
            }                    
        }
    }
    return bandera
}
function existeRepetidosEnFila() {
    let bandera = false
    for (let i = 0; i < sodokuMatrix.length; i++) {
        if ((sodokuMatrix[i][0] == sodokuMatrix[i][1] || sodokuMatrix[i][0] == sodokuMatrix[i][2] || sodokuMatrix[i][1] == sodokuMatrix[i][2]) && (sodokuMatrix[i][0] != 0 && sodokuMatrix[i][1] != 0 && sodokuMatrix[i][2] != 0)) {
            bandera = true
        }
    }
    return bandera
}

function existeRepetidosEnColumna() {
    let bandera = false
    for (let j = 0; j < sodokuMatrix.length; j++) {
        if ((sodokuMatrix[0][j] == sodokuMatrix[1][j] || sodokuMatrix[0][j] == sodokuMatrix[2][j] || sodokuMatrix[1][j] == sodokuMatrix[2][j]) && (sodokuMatrix[0][j] != 0 && sodokuMatrix[1][j] != 0 && sodokuMatrix[0][j] != 0)){
            bandera = true
        }
    }
    return bandera
}


let elCasillas = document.querySelectorAll("#sodoku input")
console.log(elCasillas)

for (let i = 0; i < elCasillas.length; i++) {
const element = elCasillas[i];
element.addEventListener("click", function(e){
    let elTarget = e.target //Obtengo el elemento
    
    let i = elTarget.getAttribute("data-i")
    let j = elTarget.getAttribute("data-j")

    let resultado = add(i,j)

    elTarget.value = resultado
})
/* PASO 1 
Otra forma de armar el condicional
*/
element.addEventListener("keypress", function(e){

    let codeKey = e.which
    let caracterIngresado = String.fromCharCode(codeKey)
    const VALUES = ["1","2","3"]
    if(caracterIngresado in VALUES){
        //Limpio el input para que no se concadene el contenido anterior
        e.target.value = ""
    }else{
        e.preventDefault()
    }
})
}