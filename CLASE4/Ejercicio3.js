/* Solicitar al usuario ingresar un palabra y determinar si tiene una vocal ("a", "e", "i","o","u"). 
3min 9.33*/


let palabraIngresada = prompt("Ingrese una palabra")

let banderaTieneVocal = false //Tiene vocal ? No

for(let i = 0 ; i < palabraIngresada.length ; i++){
    const letra = palabraIngresada[i]
    if(letra == "a" || letra == "e" || letra == "o" || letra == "o" || letra == "u"){
        banderaTieneVocal = true
    }
}
console.log(banderaTieneVocal)