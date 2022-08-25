/* 
Realizar un programa que solicite al usuario ingresar su edad y que controle que ese numero sea mayor que  0 pero que no supere los 100 años.
3min 9.24
*/

let edadIngresado = prompt("Ingrese un numero")
let edadConvertido = Number(edadIngresado)

if(0 < edadConvertido && edadConvertido < 100){
    console.log("Edad correctamente ingresada")
}else{
    console.log("La edad fue ingresada incorrectamente")
}