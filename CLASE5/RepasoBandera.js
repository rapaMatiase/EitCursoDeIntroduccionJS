/* 
Si yo quiero demostrar que no hay numeros 8 en el siguiente array;

- Demostrar que ninguno era 8
- Encontrar un 8.

Suponog que no hay ningun 8.

*/
let array = [1,2,3,4]
let banderaNoHay8 = true

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element == 8){
        banderaNoHay8 = false
    }
}

console.log(banderaNoHay8)