/* 
Realizar un programa que;
1) Solicte al usuario su edad y la conveirta a valor numericos.
2) Determinara para la edad ingresada que situacion corresponde al usuario;
- Si es menore de 16 años, no puede votar.
- Si tiene 16 años, puede votar y es optativo.
- Si tiene 17 años, puede votar y es optativo.
- Si tiene 18 o mas, puede votar y es obligatorio.
- Si tiene 65 o mas, puede votar y no es obligatorio.

4min 10. 48
*/
//1
let edadIngresada = prompt("Ingrese su edad")
let edadConvertida = Number(edadIngresada)
//2
if(edadConvertida < 16){
    console.log("No podes votar 😥")
}else if(edadConvertida === 16){
    console.log("Podes votar y es optativo")
}else if(edadConvertida === 17){
    console.log("Podes votar y es optavio")
}else if(65 <= edadConvertida){
    console.log("Podes votar y no es obligatorio")
}else if(18 <= edadConvertida ){
    console.log("Podes votar y es obligatorio")
}else{
    console.log("No se que ingresaste, pero no es una edad")
}

/* DOWN-TOP es ir de lo mas especifico a lo general. Priemro pregunto por el caso mas chico (mayores que 65) y luego por le caso mas grande (mayores de 18). */