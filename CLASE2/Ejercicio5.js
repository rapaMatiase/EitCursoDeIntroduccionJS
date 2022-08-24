/* 
Realizar un programa que :
1) Solicite un numero cualquiera el usuario.
2) Convertir el ingreso en tipo numerico.
3) Hacer la operacion del resto(%) con un 2.
4) Determinar si el numero es PAR o no. Un numero es par cuando el resultado de hacer numero % 2 es igual a 0. Plantear la operacion de realacion necesaria.
5) Mostra el mensaje "El numero <NUMERO_INGRESADO> es par? <RESULTADO>"
4MIN 10.13
*/
//1
let numeroIngresado = prompt("Ingrese un numero")
//2
let numeroConvertido = Number(numeroIngresado)
//3
let resultadoResto = numeroConvertido % 2
//4
let esPar = resultadoResto == 0
//5
console.log(`El numero ${numeroConvertido} es par? ${esPar}`)