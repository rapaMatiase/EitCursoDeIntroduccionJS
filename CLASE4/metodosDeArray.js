let array = [1,2,3,4]
console.log(array)

//ESTAR FUNCIONES ME PERMITEN UTILIZAR EL ARRAY COMO UNA PILA.
//Agregar elementos al array al final del mismo
array.push(5)
console.log(array)
//Sacar el elemento final del array
let ultimoElemento = array.pop()
console.log(ultimoElemento)
console.log(array)

//Agregar el elemento al princio
array.unshift(22)
console.log(array)
//Quitar el elemento del principio
let primerElemento = array.shift()
console.log(array)

//STRING TO ARRAY
let texto = "Hola, como va?, todo bien? que contas?"
let textoToArray = texto.split(" ")
console.log(textoToArray)

//ARRAY TO STRING
let arrayToString = textoToArray.join(" ")
console.log(arrayToString)

//DOCUMENTACION https://www.w3schools.com/jsref/jsref_splice.asp