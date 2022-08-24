/* 
Refatorizar para que el codigo corresponda a la siguiente susecion de hechos;
- Si tiene menos de 16 años, no puede votar.
- Si tiene 16 años, puede votar y es optativo.
- Si tiene 17 años, puede votar y es optativo.
- Si tiene 18 o mas, puede votar y es obligatorio.
- Si tiene 65 o mas, puede votar y es optativo.
5min 11.22
*/

//1
let edadIngresada = prompt("Ingrese su edad")
//2
let edadConvertida = Number(edadIngresada)
//3
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
