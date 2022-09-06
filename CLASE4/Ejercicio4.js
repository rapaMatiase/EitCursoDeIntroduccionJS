/* 
Realizar un programa que solicite la usuario ingresar un numeor por PROMPT y determine si el nuemro es multiplo de 3 o no.

NOTA:
Un numeor es multiplo de otro, si le resultado de hacer el resto es igual a 0.

30 % 3 = 0 es multiplo
31 % 3 = 1 no es multiplo

3min 10.46

*/

let numeroIngresado = prompt("Ingrese un nuemro")
let numeroConveritdo = Number(numeroIngresado)

if((numeroConveritdo % 3) === 0){
    console.log("Es multiplo")
}else{
    console.log("No es multiplo")
}