/* 
Realizar un programa que solicite al usuario un numero y convertilo. Responder al usuario segun corresponga;
- Si el nuemro es multiplo de 3, responder "buzz"
- Si el numero es multiplo de 5, responder "fizz"
- Si no es ninguno, responder "Este nuemero <NUMERO_INGRESADO> no es multiplo de nadie".

NOTA: Un nuemero es multiplo de otro, si el resultado de hacer el resto es igual a 0.


4min 11.29

*/

let nuemroIngresado = prompt("Ingrese un numero")
let numeroConvertido = Number(nuemroIngresado)

if(numeroConvertido % 3 === 0){
    console.log("Es multiplo de 3")
}else if(numeroConvertido % 5 === 0){
    console.log("Es multiplo de 5")
}else{
    console.log(`Este numero ${numeroConvertido} no es multiplo de nadie`)
}