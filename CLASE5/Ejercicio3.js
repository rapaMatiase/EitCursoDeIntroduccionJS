/* 
Dado un array de cantidad de elemenros pares. Imprimir en pantalla de a dos elementos en ubicaciones opuestas.

EJEMPLO
let array = [1,2,3,4,5,6]

RESULTADO 
1 6
2 5
3 4

NOTA: Tengo qeu imprimir la primera posicion y la ultima poscion juntos en la primera iteracion y luego ir crecion y decreciendo respectivamente.

PISTA
No itero igual a la cantidad de elementos, si no a la mitad, porque en cada iteracion a un contador el sumo uno, y a un segundo contador le resto uno. 
3min 9.27
*/

let array = [1,2,3,4,5,6]

let contadorAsendente = 0
let contadorDesendente = array.length - 1
for(let i = 0; i < array.length / 2; i++){
    console.log(`${array[contadorAsendente]} ${array[contadorDesendente]}`)
    contadorAsendente++
    contadorDesendente--
}