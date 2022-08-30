/* 
Refactorizar el codigo para que cumpla con las modficaciones;
1) Solicte al usuario su edad y la conveirta a valor numericos.
2) Determinara para la edad ingresada que situacion corresponde al usuario;
- Si es menore de 16 años, no puede votar.
- Si tiene 16 o 17 años, puede votar y es optativo.
- Si tiene 18 o mas y menos de 65 años, puede votar y es obligatorio.
- Si tiene 65 o mas, puede votar y no es obligatorio.

3min 12. 23
*/
//1
let edadIngresada = prompt("Ingrese su edad")
let edadConvertida = Number(edadIngresada)
//2
if(edadConvertida < 16){
    console.log("No podes votar 😥")
}else if(edadConvertida === 16 || edadConvertida === 17){
    console.log("Podes votar y es optativo")
}else if(18 <= edadConvertida && edadConvertida < 65){
    console.log("Podes votar y es obligatorio")
}else if(65 <= edadConvertida){
    console.log("Podes votar y no es obligatorio")
}else{
    console.log("No se que ingresaste, pero no es una edad")
}

/* DOWN-TOP es ir de lo mas especifico a lo general. Priemro pregunto por el caso mas chico (mayores que 65) y luego por le caso mas grande (mayores de 18). */