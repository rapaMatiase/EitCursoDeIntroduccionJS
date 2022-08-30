/* 
Realizar un programa que solicite al usuario un numero y convertilo. Responder al usuario segun corresponga;
- Si el nuemro es multiplo de 3, responder "buzz"
- Si el numero es multiplo de 5, responder "fizz"
- Si el nuemro es multiplo de 3 y 5, responder "buzzfizz"
- Si no es ninguno, responder "Este nuemero <NUMERO_INGRESADO> no es multiplo de nadie".

NOTA: Un nuemero es multiplo de otro, si el resultado de hacer el resto es igual a 0.


3min 12.12

*/

let nuemroIngresado = prompt("Ingrese un numero")
let numeroConvertido = Number(nuemroIngresado)

if(numeroConvertido % 3 === 0 && numeroConvertido % 5 === 0){
    console.log("fizzbuzz")
}else if(numeroConvertido % 3 === 0){
    console.log("fizz")
}else if(numeroConvertido % 5 === 0){
    console.log("buzz")
}else{
    console.log(`Este numero ${numeroConvertido} no es multiplo de nadie`)
}

//OPCION 2 SIN APLICAR LA REGLA DE DOWN-TOP
// if(numeroConvertido % 3 === 0 && numeroConvertido % 5 !== 0){
//     console.log("fizz")
// }else if(numeroConvertido % 3 !== 0 && numeroConvertido % 5 === 0){
//     console.log("buzz")
// }else if(numeroConvertido % 3 === 0 && numeroConvertido % 5 === 0){
//     console.log("fizzbuzz")
// }else{
//     console.log(`Este numero ${numeroConvertido} no es multiplo de nadie`)
// }