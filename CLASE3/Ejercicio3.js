/* 
Refatorizar para que el codigo para utilizar rangos en el control de la edad. Lograr simplificar la estructura de control.
3min 9.41
*/

//1
let edadIngresada = prompt("Ingrese su edad")
//2
let edadConvertida = Number(edadIngresada)
//3
if(isNaN(edadConvertida)==false){
    if(edadConvertida < 16){
        console.log("No podes votar")
    }else if(edadConvertida == 16 || edadConvertida == 17){
        console.log("Podes votar y es optativo")
    }else if(18 <= edadConvertida && edadConvertida < 65){
        console.log("Podes votar y es obligatorio")
    }else if(65 <= edadConvertida){
        console.log("Podes votar y es optativo")
    }else{
        console.log("Error - Si llegaste aca, es porque te mandaste una macana")
    }
}else{
    console.log("Ese valor no es valido")
}