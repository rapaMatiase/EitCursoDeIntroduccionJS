/* 
Realizar un programa que;
1) Solicite al usuario ingresar su edad.
2) Convertir a tipo numerico la edad ingresada. Suponemos que el usuario es copado y siempre ingresa valores correctos.
3) Plantear la operacion de relacion necesaria para determinar si el usaurio es mayor de edad o no. (18 o mas).
4) Mostra le mensaje "El usario es mayor de edad? <RESULTADO>"
3MIN10.04
*/

//1
let edadIngresada = prompt("Ingrese su edad")
//2
let edadConvertida = Number(edadIngresada)
//3
let esMayorDeEdad = 18 <= edadConvertida
//4
console.log(`El usuario es mayor de edad? ${esMayorDeEdad}`)