/* 

Dado un array de longitud fija 3. Crear la condicion logica necesaria en un IF para determinar si todos los elementos son distintos entre si.

let array = [1,2,3]

NOTA: No utilizar FOR.
3min 10.51
*/

let array = [1,2,3]

if(array[0] != array[1] && array[0] != array[2] && array[1] != array[2]){
    console.log("Son distintos")
}else{
    console.log("No son distintos")
}