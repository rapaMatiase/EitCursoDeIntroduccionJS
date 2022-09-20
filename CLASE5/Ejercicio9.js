/* Realizar un programa que cree 2 array, pero solo usando un for. Del 0 al 1000.

El primer array debe contener todos los numeros pares.
El segundo array debe contener todos los multiplos de 5. 

4min 12.22
*/

let array1 = []
let array2 = []

for(let i = 0; i < 1001 ; i++){
    if(i % 2 === 0){
        array1.push(i)
    }
    
    if(i % 5 === 0){
        array2.push(i)
    }
}

console.log(array1, array2)