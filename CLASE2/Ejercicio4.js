/* 
Realizar un programa que;
1) Solicite al usuario un numero por PROMPT y lo guarde en una variable.
2) Converitir ese ingreso a tippo numerico con NUMBER y guardar en una nueva variable.
3) Multiplicar por 10 ese ingreso y guardar en otra variable nueva.
4) Mostrar el resultado en pantalla con el mensaje "El resultado de <NUMERO_INGRESADO> * 10 = <RESULTADO>"
4MIN 11.04
*/

//1
let numeroIngresado = prompt("Ingrese un nuemro")
//2
let ingresoConvertido = Number(numeroIngresado)
//3
let resultado = 10 * ingresoConvertido
//4
console.log(`El resutlado de ${numeroIngresado} * 10 = ${resultado}`)
