/* 
Calcular el Factorial del numero 4.

4! = 1*2*3*4 = 24

NOTA: Tiene que ser una acumulacion pero con multiplicacion, en vez de suma.
3min 11.01
*/
let factorial = 1
for(let i = 1 ; i < 5 ; i++){
    factorial = factorial * i
}
console.log(factorial)