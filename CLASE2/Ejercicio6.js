/* 
Refactorizar el codigo, para que si el usuario es mayor edad, muestre un mensaje comunicando que puede votar. Caso contrario no hacemos nada.
3min 10.30
*/

//1
let edadIngresada = prompt("Ingrese su edad")
//2
let edadConvertida = Number(edadIngresada)
//3
if(18 <= edadConvertida){
    console.log("Podes votar")
}