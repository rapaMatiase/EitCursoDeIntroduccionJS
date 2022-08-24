/* 
Refatorizar para que el codigo para que controle que el ingreso del usurio es un numero valido. Si no indicar un error en pantalla.
2min 11.50
*/

//1
let edadIngresada = prompt("Ingrese su edad")
//2
let edadConvertida = Number(edadIngresada)
//3
if(isNaN(edadConvertida)==false){
    if(edadConvertida < 16){
        console.log("No podes votar")
    }else if(edadConvertida == 16){
        console.log("Podes votar y es optativo")
    }else if(edadConvertida == 17){
        console.log("Podes votar y es optativo")
    }else if(65 <= edadConvertida){
        console.log("Podes votar y es optativo")
    }else if(18 <= edadConvertida){
        console.log("Podes votar y es obligatorio")
    }else{
        console.log("Error - Si llegaste aca, es porque te mandaste una macana")
    }
}else{
    console.log("Ese valor no es valido")
}