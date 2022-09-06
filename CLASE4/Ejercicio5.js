/* 
Realizar un programa que solicite la usuario ingresar un numeor por PROMPT y determine si el nuemro es multiplo de;
 - 3
 - 5
 - o de ambos.

pero debe informar uno solo.

NOTA:
Un numeor es multiplo de otro, si le resultado de hacer el resto es igual a 0.

30 % 3 = 0 es multiplo
31 % 3 = 1 no es multiplo

Ejemplo

6 me tiene que responder que es multiplo solo de 3
10 me tiene que responder que es multiplo solo de 5
15 me tiene que responder que es multiplo de 3 y 5

4min 10.56
*/

let numeroIngresado = prompt("Ingrese un nuemro")
let numeroConveritdo = Number(numeroIngresado)

if((numeroConveritdo % 3) === 0 && (numeroConveritdo % 5) === 0){
    console.log("Es multiplo de 3 y 5")
}else if((numeroConveritdo % 3) === 0){
    console.log("Es multiplo de 3")
}else if((numeroConveritdo % 5) === 0){
    console.log("Es multiplo de 5")
}