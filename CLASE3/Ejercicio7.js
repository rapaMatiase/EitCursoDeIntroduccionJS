/* 
Realizar un programa que le solicite un numero al usuario y determine si es o no multiplo de 3.

NOTA: Un numero es multiplo de 3, si el resto con 3 es igual a 0.
3min 10.18

ACLARACION : No se pide nada con FOR.
*/

let numeroIngresado = prompt("Ingrese un numero")
let numeroConvertido = Number(numeroIngresado)

if(numeroConvertido % 3 === 0){
    console.log("Es multiplo")
}else{
    console.log("No es multiplo")
}