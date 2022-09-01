/* 
Solicitar la usuario un numero y determinar si es par o impar. Utilizar funciones para hacer mas declarativo el codigo.
3min 10.31
*/

/* 
    Devuelve true si el numero es par, caso contrario devuelve false.
*/    
function esPar(numero){
    return numero % 2 === 0
}

let numeroIngresado = prompt("Ingrese numero")
let numeroConvertido = Number(numeroIngresado)

if(esPar(numeroConvertido)){
    console.log("Es par")
}else{
    console.log("Es impar")
}