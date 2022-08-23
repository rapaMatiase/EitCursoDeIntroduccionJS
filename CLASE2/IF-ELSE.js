/* 
Muestre en pantalla el mensje "Es positivo" si el numero ingresado por el usuario es mayor que 0. Si no que diga "Es negativo". El cero no es positivo, ni negativo.

*/

let numeroIngresado = prompt("Ingrese un numero")
let numeroConvertido = Number(numeroIngresado)

if(0 < numeroConvertido){ //Si es positivo..
    console.log("Es positivo")
}else{//Si no, enotnces...
    console.log("Es negativo")
}