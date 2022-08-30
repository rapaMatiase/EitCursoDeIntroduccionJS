/* 
Realizar un programa que;
1) Solicite al usuario ingresar un numero
2) Convertirlo al tipo numerico
3) Determinar si es o no entero. Comunicar con un mensaje el resultado.

NOTA: Un numero es entero cuadno el resultado de hacer el resto con 1 es igual a 0. 

4 min 10.19

*/

//1
let numeroIngresado = prompt("Ingrese un numero")
//2
let numeroConvertido = Number(numeroIngresado)
//3
let resto = numeroConvertido % 1
if(resto === 0){
    console.log("Es entero")
}else{
    console.log("No es entero")
}