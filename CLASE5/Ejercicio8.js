/* 
Realizar un programa que cree un array con los numeros multiplos de 3, de 0 a 1000.

NOTA. Un numero es multiplo de 3, si la operacion del resto con 3 es igual a 0.

6 % 3 = 0, es multiplo
5 % 3 = 2, no es multiplo.

3min 12.12
*/
//OPCION 1
let array = []

for(let i = 0; i < 1001 ; i = i + 3){
    array.push(i)
}

//OPCION 2
let array2 = []

for(let i = 0; i < 1001 ; i++){
    if(i % 3 === 0){
        array2.push(i)
    }
}