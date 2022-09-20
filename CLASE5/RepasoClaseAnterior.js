/* Para agregar elementos a un array, puedo ir enlistandolos uno a uno separandolos con coma. */
let array = ["a","b","gola", "a",32, true]

/* Cada posicion del array funciona como una variable, pero en vez de tener un nombre propio, comparten el nombre del array y los distingo por la posicion que ocupan el mismo. */

/* ¿COMO ACCEDO A UN VALOR EN ESPECIFICO? nombreDelArray[posicion] */
let primerElemento = array[0]
let segundoElemento = array[1]
//...

/* ¿COMO RECORRO EL ARRAY DE PRINCIPIO A FIN DE FORMA DINAMICA? Con un for que inicie en 0 hasta array.length (cantida de elementos) sin incluir. */
for(let i = 0 ; i < array.length ; i++){
    console.log(array[i])
}

/* ¿COMO MODIFICO UN VALOR EN UNA POSICION ? Con la misma notacion que utilizo para acceder a una posicion en particular, puedo usarla para guardar un nuevo valor. */
array[2] = "SOY EL NUEVO"
console.log(array)

/* ¿COMO DECLARO UN ARRAY VACIO? */
let arrayVcio = []