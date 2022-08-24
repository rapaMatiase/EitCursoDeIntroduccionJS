/* 
Refatorizar el codigo para que cuando el usuario ingrese un numero que el resto sea igaul a 0, muestre el mensaje en pantalla "El numero <NUMERO_INGRESADO> es PAR". Caso contrario inidcar que impar con el mensaje "El numero <NUMERO_INGRESADO> es IMPAR".
2min 10.58
*/
//1
let numeroIngresado = prompt("Ingrese un numero")
//2
let numeroConvertido = Number(numeroIngresado)
//3
let resultadoResto = numeroConvertido % 2
//4
if(resultadoResto == 0){
    console.log(`El numero ${numeroConvertido} es PAR`)
}else{
    console.log(`El numero ${numeroConvertido} es IMPAR`)
}