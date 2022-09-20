/* Dado un array, imprimir en pantalla los elemenos en posiciones pares. 

Usar de base el ejercicio anterior para obtener las posiciones pares. 
4min 10.27
*/

let array = [44,32,656,84,24,-5,3,1-2,23,12*3]

/* 
RELACION QUE SIEMPRE SE CUMPLE PARA TODOS LOS ARRAYS!!!
ULTIMA POSICION DEL ARRAY = ARRAY.LENGTH - 1
POR LO TANTO, CUALQUIER CONTADOR QUE SE MENOR A ARRAY.LENGHT SIN INCLUIR LLEGA HASTA LA ULTIMA POSICION SIEMPRE.
*/
for(let i = 0; i < array.length; i = i + 2){
    console.log(array[i])
}