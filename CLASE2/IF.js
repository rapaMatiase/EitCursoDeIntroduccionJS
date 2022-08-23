/* 
Muestre en pantalla el mensje "Es positivo" si el numero ingresado por el usuario es mayor que 0.

*/

let numeroIngresado = prompt("Ingrese un numero")
let numeroConvertido = Number(numeroIngresado)

if(0 < numeroConvertido){
    console.log("Es positivo")
}