/* 
Refatorizar el codigo para que cuando el usuario ingrese un numero que el resto sea igaul a 0, muestre el mensaje en pantalla "El numero <NUMERO_INGRESADO> es PAR". Caso contrario inidcar que impar con el mensaje "El numero <NUMERO_INGRESADO> es IMPAR". CUIDADO, El 0 no tiene paridad, si el valor es 0, indicar que es un numero sin paridad.
3min 11.38
*/
//1
let numeroIngresado = prompt("Ingrese un numero")
//2
let numeroConvertido = Number(numeroIngresado)
//3
let resultadoResto = numeroConvertido % 2
//4
if(numeroConvertido == 0){
    console.log("No tiene signo")
}else if(resultadoResto == 0){
    console.log(`El numero ${numeroConvertido} es PAR`)
}else if(resultadoResto == 1){
    console.log(`El numero ${numeroConvertido} es IMPAR`)
}