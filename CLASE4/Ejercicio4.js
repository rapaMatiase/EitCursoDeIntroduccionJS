/* 
Realizar un programa que solicite al usuario ingresar un palabra y determinar si esta contiene caracteres numericos.
4min 9.42
*/

let palabraIngresada = prompt("Ingrese una palabra")

let banderaContieneNumeros = false //Contiene numeros ? No

for(let i = 0 ; i < palabraIngresada.length ; i++){
    const letra = palabraIngresada[i]
    if(letra == "0" || letra == "1" || letra == "2" || letra == "3" || letra == "4" || letra == "5" || letra == "6" || letra == "7" || letra == "8" || letra == "9"){
        banderaContieneNumeros = true
    }
}
console.log(banderaContieneNumeros)