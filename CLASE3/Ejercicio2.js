/* 
Refactorizar el codigo, y controlar que el ingreso del usuario fue convertido correctamente a valor numerico. Si no es asi, mostrar un error en pantalla. 
3min 9.33
*/

let edadIngresado = prompt("Ingrese un numero")
let edadConvertido = Number(edadIngresado)

//IsNaN devuelve FAlSO cuando no es NaN
//!isNaN = noIsNaN
if(!isNaN(edadConvertido)){
    if(0 < edadConvertido && edadConvertido < 100){
        console.log("Edad correctamente ingresada")
    }else{
        console.log("La edad fue ingresada incorrectamente")
    }
}else{
    console.log("Error - Eso no es un numero")
}
