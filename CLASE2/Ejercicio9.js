/* 
Refactorizar el codigo para que si el numero es par (Osea el resto es igual a 0), muestre en pantalla el mensaje "El numero <NUMERO_INGRESADO> es PAR". Caso contrario mostrar el mismo mensaje pero indicando que es IMPAR.
2min 12.40
*/

//1
let numeroIngresado = prompt("Ingrese un numero")
//2
let numeroConvertido = Number(numeroIngresado)
//3
let resto = numeroConvertido % 2
//REFACTORIZO
if(resto == 0){
    console.log(`El numero ${numeroConvertido} es PAR`)
}