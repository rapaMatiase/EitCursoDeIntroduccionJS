/* 
Mostrar en pantalla un mensaje indicando que el numero ingresado en positivo. Caso contrario indicar que es negativo. El 0 no tiene signo, no es positivo, ni negativo.

*/

let numeroIngresado = prompt("Ingrese un numero")
let numeroConvertido = Number(numeroIngresado)

if(isNaN(numeroConvertido) == false){
    //Mi algoritmo principal
    if(0 < numeroConvertido){ //SI la condicion logica es verdadera, entonces ...
        console.log("Es Positivo")
    }else if(numeroConvertido < 0){//SINO SI la condicion logica es verdaera, entonces ...
        console.log("Es Negativo")
    }else{ //SINO, entonces ...
        //Caso por default
        console.log("No tiene signo")
    }
}else{
    console.log("El valor ingresado no es valido.")
}