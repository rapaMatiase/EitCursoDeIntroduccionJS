/* Ingresado un texto por el usuario, determinar cuantas palabras tiene el mismo.

NOTA: Utilizar las funciones SPLIT o JOIN
3min 11.05 */

let textoIngresado = prompt("Ingrese un texto")

let textoConvertidoArray = textoIngresado.split(" ")

let cantidadDePalabras = textoConvertidoArray.length

console.log(`El texto tiene ${cantidadDePalabras} palabras`)