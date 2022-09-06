/* Realizar un programa que determine si el numero ingresado por el usaurio es positivo, negativo o cero. Controlar que el ingreso es convertible a tipo numerico y que le numero no es mayor que 1000. */

let numeroIngresado = prompt("Ingrese un numero")
let numeroConvertido = Number(numeroIngresado)

if(!isNaN(numeroConvertido) && numeroConvertido < 1000){
    if(0 < numeroConvertido){
        console.log("Es positiva")
    }else if(numeroConvertido < 0){
        console.log("Es negativa")
    }else if(numeroConvertido == 0){
        console.log("Es cero")
    }
}else{
    console.warn("Eso no es un numero, carajo")
}