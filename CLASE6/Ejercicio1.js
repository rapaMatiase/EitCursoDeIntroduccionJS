/* 
Realizar un programa que;
1) Solicite al usuario un numero positivo mayor que 0.
2) Convertir a valor numerico
3) Utilizando un FOR y un IF hallar todos los divisores de ese numero.

EJEMPLO;
Ingreso 16 sus divisores son 1, 2, 4, 8, 16.

Esto es porque;
16 % 1 === 0
16 % 2 === 0
...

4min 9.10
*/

//1
let numeroIngresado = prompt("Ingrese un numero positivo")
//2
let numeroConvertido = Number(numeroIngresado)
//3
for(let i = 1; i <= numeroConvertido; i++){
    if(numeroConvertido % i == 0){
        console.log(i)
    }
}

//1
let numeroIngresado2 = prompt("Ingrese un numero positivo")
//2
let numeroConvertido2 = Number(numeroIngresado2)
//3
let array = []
for(let i = 1; i <= numeroConvertido2; i++){
    if(numeroConvertido2 % i == 0){
        array.push(array)
    }
}
console.log(array)