/* Dado el mismo array del ejercicio anterior, imprimir al revez. De derecha a izquierda.

CUANDO RECORRO AL DERECHO
VALOR INICAL = 0
VALOR FINAL = array.length
VALOR SALTO = 1

CUANDO RECORRO AL REVEZ
VALOR INICAL = array.lenth - 1  
VALOR FINAL = 0
VALOR SALTO = -1 

3MIN 10.36
*/

let array = [44,32,656,84,24,-5,3,1-2,23,12*3]

for(let i = array.length -1 ; i > -1  ; i = i -1 ){
    console.log(array[i])
}


