/* 
Realizar un programa que;
1) Solciite al usuario un numero y convertilo a tipo numero.
2) Determininar si el numero es par o no con la operacion del resto con 2, pero 0 no tiene paridad. Informar en cada caso el mensaje correspondiente.

EJEMPLO1 
Si ingresa 4, el resultado es que es "PAR"
EJEMPLO2
Si ingresa 3, el resutlado es que es "IMPAR"
EJEMPLO3
Si ingresa 0, el resultado es que "NO TIENE PARIDAD"
3MIN 11. 11
*/

let numeroIngresado = prompt("Ingrese un numero")
let numeroConvertido = Number(numeroIngresado)

let resto = numeroConvertido % 2

// == es igualdad sin tipo entonces 3 == "3" es true 
// === es igualdad con tipo entonces 3 === "3" es false proque son de distintos tipos.

if(numeroConvertido === 0){
    console.log("No tiene paridad")
}else if(resto === 0){
    console.log("Es par")
}else if(resto !== 0){
    console.log("Es impar")
}