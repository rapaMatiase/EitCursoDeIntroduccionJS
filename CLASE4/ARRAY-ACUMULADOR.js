let array = [1,2,3,4,5]

let sumatoria = 0
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sumatoria = sumatoria + element
}

console.log(sumatoria)

/* CUIDADO, normalmente los array se trabajan siendo los elementos de un mismo tipo, para que la operaiones tengan un resultado congruente. 
Si estoy sumando numeros, y aparece un string en el medio, me cambia el tipo y comienza a concadenar.
*/

array = [1,2,"hola",4,5]

sumatoria = 0
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sumatoria = sumatoria + element
}

console.log(sumatoria)