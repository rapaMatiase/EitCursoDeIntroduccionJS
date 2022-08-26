/* 
Dado un texto, convertir a array y filtrar todas las palabras que tengan una longitud menor a 5 caracteres.
1) Convierto el string a array
2) Recorro el array con un for
3) Planteo el if anidado en for con la condicion logica necesaria para ver si elemento del array cumple.

NOTA : Sobre cada elemento del array utilizar length para chequear la cantidad de letras que tiene la palabra.

NOTA: Utilizar la funcion split(" ") para string. 

EJEMPLO
texto = "hola, como estas?"
array = ["hola", "como", "estas?"]
RESULTADO
acumulador = ["estas?"]

2min 11.43
*/

let texto = "Existe un tremendo logro por parte de ciertos directores y ciertas compañías como Marvel y DC que realmente han llevado el universo de superhéroes al máximo. Quiero decir, todo lo que puedas imaginar ha sido creado. "

let arrayDePalabras = texto.split(" ")

let acumulador = []

for (let i = 0; i < arrayDePalabras.length; i++) {
    const palabra = arrayDePalabras[i];
    if(palabra.length > 5){
        acumulador.push(palabra)
    }
}

console.log(acumulador)