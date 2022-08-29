/* 
Dado un array imprimir al revez.

EJMPLO
let array = [1,2,3,4]
RESULTADO
4 (ULTIMA POSICION)
3
2
1 (PRIMERA POSICION)

3MIN 9.09
*/
let array = [1,2,3,4]
// Vi = array.length - 1
// Vf = 0 - 1 = -1 
// Vs = -1
for (let i = array.length - 1; i > -1; i--) {
    const element = array[i]
    console.log(element)
}
