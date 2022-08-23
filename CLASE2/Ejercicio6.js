/* 
Realizar un programa que;
1) Solicite al usuario ingresar un nuemero cualquiera con PROMPT.
2) Convertir ese numero ingresado a tipo numerico.
3) Plantear la operacion de relacion para determinar si el numero es  mayor que 0. Mostrar TRUE si lo es, FALSE si no lo es.
4) Imprmir en pantalla el resultado.
3min 12.09
*/

//1
let numeroIngresado = prompt("Ingrese un numero")
//2
let numeroConvertido = Number(numeroIngresado)
//3
let esMayorQue0 = 0 < numeroConvertido
//4
console.log(esMayorQue0)