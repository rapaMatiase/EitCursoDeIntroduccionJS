/* 

Realizar un programa que;
1) Solicite al usuario un numero por PROMPT y lo guarde en una variable.
2) Solicitar otro numero al usuario con PROMPT y guardar en otra nueva variable.
3) Hacer la conversion de los dos valores ingresados a tipo numerico y guardar cada uno en una nueva variable respectivamente.
4) Hacer la suma de estos dos.
5)Mostra el mensaje "<NUMERO_INGRESADO_1> + <NUMERO_INGRESADO_2> = <RESULTADO>"
4MIN 11.27
*/

//1
let numeroIngresado1 = prompt("Ingrese un numero")
//2
let numeroIngresado2 = prompt("Ingrese otro numero")
//3
let numeroConvertido1 = Number(numeroIngresado1)
let numeroConvertido2 = Number(numeroIngresado2)
//4
let resultadoSuma = numeroConvertido1 + numeroConvertido2
//5
console.log(`${numeroConvertido1} + ${numeroConvertido2} = ${resultadoSuma}`)

