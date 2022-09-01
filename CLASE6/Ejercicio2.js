/* 
Realizar un programa que;
1) Solicite al usuario dos numeros positivos
2) Convertir a valor numerico
3) Hallar los divisores del primer numero y guardar en un array.
4) Repetir para el segundo numero el paso 3.
5) Hallar el mayor divisor comun entre los dos.

EJEMPLO;

16 -> [1,2,4,8,16]
20 -> [1,2,4,5,10,20]

El mayor divisor es 4. 

4min 9.20
*/


//1
let numeroIngresado1 = prompt("Ingrese un numero positivo")
let numeroIngresado2 = prompt("Ingrese un numero positivo")
//2
let numeroConvertido1 = Number(numeroIngresado1)
let numeroConvertido2 = Number(numeroIngresado2)
//3
let arrayDivisores1 = []
for(let i = 1; i <= numeroConvertido1; i++){
    if(numeroConvertido1 % i == 0){
        arrayDivisores1.push(i)
    }
}
//4
let arrayDivisores2 = []
for(let i = 1; i <= numeroConvertido2; i++){
    if(numeroConvertido2 % i == 0){
        arrayDivisores2.push(i)
    }
}
//5

//5.1 Tengo que crear un nuevo array con los numeros en comun entre los dos. Utilizo dos FOR anidados, el primer for recorre un array, y el segundo recorre el otro array. Por cada numero del primer array, voy a chequear si no esta en segundo array. Si llega a estar, lo agrego a un nuevo array, si no, no lo agrego. 9.29
let arrayComunesDivisores = []
for (let i = 0; i < arrayDivisores1.length; i++) {
    const numeroDelPriemrArray = arrayDivisores1[i];
    for (let j = 0; j < arrayDivisores2.length; j++) {
        const numeroDelSegundoArray = arrayDivisores2[j];
        if(numeroDelPriemrArray === numeroDelSegundoArray){
            arrayComunesDivisores.push(numeroDelPriemrArray)
        }
    }
}
console.log(arrayComunesDivisores)

//5.2 Tengo que buscar el numero mas grande en ese nuevo array. 3min 9.36

//COMO EL ARRAY ESTA ORDENDADO, PODEMOS DEVOLVER EL UTLIMO ELEMENTO.
let utlimaPosicion = arrayComunesDivisores.length -1
console.log(`El mayor comun divisor es ${arrayComunesDivisores[utlimaPosicion]}`)

//SI EL ARRAY NO ESTA ORDENADO

let mayor = arrayComunesDivisores[0]

for(let i = 1 ; i < arrayComunesDivisores.length ; i++){
    const numero = arrayComunesDivisores[i]
    if(mayor < numero){
        mayor = numero
    }
}
console.log(`El mayor comun divisor es ${mayor}`)
