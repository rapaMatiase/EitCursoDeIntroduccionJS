/* 
Realizar un programa:
1) Que solicite la usuario ingresar un numero por PROMPT y guardarlo en una variable.
2) Utilizar otro PROMPT para solicitar otro valor al usaurio y guardarlo en una variable nueva.
3) Utilizar la funcion NUMBER para convertir los valores a tipo numerico, y guardar en variables nuevas respectivamente.
4) Hacer la suma.
5) Mostrar el mensaje "<NUMERO_INGRESADO_1> + <NUMERO_INGRESADO_2> = <RESULTADO>"
4min 9.41 
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