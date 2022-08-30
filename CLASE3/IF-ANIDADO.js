/* 
Muestre en pantalla el mensje "Es positivo" si el numero ingresado por el usuario es mayor que 0. Si no que diga "Es negativo". El cero no es positivo, ni negativo.

Controlar que el valor ingresado fue convertido en valor numerico exitosamente.
*/

let numeroIngresado = prompt("Ingrese un numero")
let numeroConvertido = Number(numeroIngresado)



if(!isNaN(numeroConvertido)){
    if(0 < numeroConvertido){ 
        console.log("Es positivo")
    }else if(numeroConvertido < 0){ 
        console.log("Es negativo")
    }else if(numeroConvertido === 0){ 
        console.log("No tiene signo")
    } else {
        console.log("No se falco, fijate que hiciste porque llegaste aca y eso esta mal.")
    }
}else{
    console.log("Eso no es un nuemero")
}