/* 
Mostrar en pantalla un mensaje indicando que el numero ingresado en positivo.

*/

let numeroIngresado = prompt("Ingrese un numero")
let numeroConvertido = Number(numeroIngresado)

if(0 < numeroConvertido){ //SI la condicion logica es verdadera, entonces ...
    console.log("Es Positivo")
} // caso contrario no hago nada