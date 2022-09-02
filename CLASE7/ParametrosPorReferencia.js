let array = [1,2,3]
let numero = 1

//Una funcion puede acceder a un valor  en una variable de dos formas;
// - Recibiendolo como parametro
// - Llamando a una variable global [ES MALA PRACTICA]

function mostrarValores(){
    console.log(array)
    console.log(numero)
}

//¿Como modificar valores de una variable desde una funcion?

//Si paso una variable primitiva (numero, string o boolean) se hace una copia de la original y cualquier cambio se pierde una vez finalizada la funcion.
function cambiarValor1(valor){
    valor = "CAMBIO HECHO"
}

function cambiarValor2(valor){
    valor = "CAMBIO HECHO"
    return valor
}

//En el caso de los objetos, se pasan por refencia por lo que cualquier cambio en su valor se conserva una vez terminada la ejecucion de la funcion.
function cambiarValor3(vector){
    vector[0] = "hola"
}

cambiarValor1(numero)
mostrarValores()

numero = cambiarValor2(numero)
mostrarValores()


cambiarValor3(array)
mostrarValores()


