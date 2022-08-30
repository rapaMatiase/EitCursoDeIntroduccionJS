/* 
Muestre en pantalla el mensje "Es positivo" si el numero ingresado por el usuario es mayor que 0. Si no que diga "Es negativo". El cero no es positivo, ni negativo.

*/

let numeroIngresado = prompt("Ingrese un numero")
let numeroConvertido = Number(numeroIngresado)

//EN UN IF ENCADENADO SIMPRE;
// LA PRIMERA ESTRUCTURA ES UN IF SOLO
// EN EL MEDIO, SIMPRE VAN ELSE IF
// SI HAY ELSE, DEBE SER SIEMPRE LA ULTIMA ESTRUCUTRA


if(0 < numeroConvertido){ //Si es positivo..
    console.log("Es positivo")
}else if(numeroConvertido < 0){//Si no, SI es negativo, enotnces...
    console.log("Es negativo")
}else if(numeroConvertido === 0){ //SI NO, entonces ...
    console.log("No tiene signo")
} else {
    //CASO POR DEFUALT : SI LLEGO ACA, ES PORQUE TODAS LAS CONDICIONES LOGICAS FALLARON, Y NORMALMENTE SIGNFICA QUE OCURRIO UN ERROR.
    console.log("No se falco, fijate que hiciste porque llegaste aca y eso esta mal.")
}