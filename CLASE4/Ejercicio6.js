/* Dado un array, imprimir en pantalla al revez.

EJEMPLO
[1,2,3]
RESULTADO
3
2
1

3min 11.14

NOTA: Cual es el Valor inicial, valor final y valor de salto para el FOR?
*/


let array = [1,2,3,4]
//LENGHT -> Me devuelve un numero contando como persona, arrancando en el 1.
//ULTIMA POSICION -> Es contando como computadora, arrancando en el 0.

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

//ULTIMO ELEMENTO + 1 = CANTIDAD DE ELEEMTNOS
//ULTIMO ELEMENTO = CATIDAD DE ELEMENTO - 1
for(let i = array.length -1 ; i > -1 ; i--){
    console.log(array[i])
}