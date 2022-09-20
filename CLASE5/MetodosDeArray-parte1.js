/* 
PARTE 1 : Son los metodos sencillos
PARTE 2 : Son los metodos de array que requieren funciones.
*/

//parte 1

/* Un metodo de array son funciones nativas especificas para los array, modifican o determinan un valor sobre el arrray. */

let array = [1,2,3,4]
//CANTIDAD DE ELEMENTOS DE UN ARRAY
console.log(`Cantidad de elementos : ${array.length}`)

//PUEDO AGREGAR UN ELEMENTO NUEVO AL FINAL DEL ARRAY
array.push("NUEVO AL FINAL")
console.log(`El resultado de PUSH es [${array}]`)
//SACAR EL ULTIMO ELEMENTO DEL ARRAY 
let elementoSacado = array.pop()
console.log(`El elemento sacado es "${elementoSacado}" y el array quedo [${array}]`)

//PROCESO IDENTICO PERO AL PRINCIPIO DEL ARRAY
array.unshift("NUEVO ELEMENTO AL PRINCIOPIO") //AGREGA
console.log(array)
let primerElemento = array.shift() //QUITA
console.log(primerElemento)
console.log(array)