/* 
Dado un array de numeros, filtrar todas los numeros menores de 40 y mayores de 50. Crear un nuevo array con el resultado.

EJEMPLO
[1,2,55,34,44]
RESULTADO
[44]
3min 11.28
*/
let array= [1,2,6,66,4,2,35,3,364,43,63,46]

let acumulador = []
//RECORDAMOS QUE EL ACUMULADOR DEBE SER EL ELEMENTO NEUTRO PARA LA OPERACION A LLEVAR A CAVO. 
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(40 < element && element < 50){
        acumulador.push(element)
    }
}
console.log(acumulador)