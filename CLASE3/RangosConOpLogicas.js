/* 
Quiero controlar que un numero ingresado este entre 10 y -10.
*/

let numeroIngresado = prompt("Ingrese un numero")
let numeroConvertido = Number(numeroIngresado)

if(-10 < numeroConvertido && numeroConvertido < 10){
    console.log("Cumple")
}else{
    console.log("No cumple")
}