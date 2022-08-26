/* 
Refactorizar el codigo para que en vez de pedir una palabra al usuario trabaje con un array declarado. Los numeros en este son de un solo digito.
2min 10.11
*/

let array = ["as", true, 2, 3, "chua"]

let banderaContieneNumeros = false //Contiene numeros ? No

for(let i = 0 ; i < array.length ; i++){
    const element = array[i]
    if(element == "0" || element == "1" || element == "2" || element == "3" || element == "4" || element == "5" || element == "6" || element == "7" || element == "8" || element == "9"){
        banderaContieneNumeros = true
    }
}
console.log(banderaContieneNumeros)