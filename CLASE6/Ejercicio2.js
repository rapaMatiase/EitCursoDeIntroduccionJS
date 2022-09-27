/* 
Refactorizar el IF, para determinar si el array de longitud fija 3, esta compuesto solo por elementos con la valores distintos entre si. 

NOTA: No utilizar for.
*/

let array = [1,2,3]

if(array[0] != array[1] && array[0] != array[2] && array[1] != array[2]){
    console.log(true)
}else{
    console.log(false)
}