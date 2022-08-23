/* 
Realizar un programa que;
1) Solicite el ingreso de un numero al usuario.
2) Convertir el numero ingresado a tipo numerico.
3) Realizar la operacion del resto (%) con un 2 y el numero ingresado.
4) Si el resultado de la operacion del resto con 2 es igual a 0, mostrar un true en pantalla porque el numero es par. Si es false, el numero es impar.
3min. 12.16
*/

//1
let numeroIngresado = prompt("Ingrese un numero")
//2
let numeroConvertido = Number(numeroIngresado)
//3
let resto = numeroConvertido % 2
//4
let esIgual0 = (resto == 0)
console.log(esIgual0)