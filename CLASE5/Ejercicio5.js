/* 
Refactorizar el siguiente codigo para determinar si el array es un palindrome.

[1,2,2,1] -> Es palindrome
[1,2,3,1] -> No es palindrome
3min 9.52
*/

let array = [1,2,3,4,5,6]

let contadorAsendente = 0
let contadorDesendente = array.length - 1
let banderaEsPalindrome = true
for(let i = 0; i < array.length / 2; i++){
    if(array[contadorAsendente] != array[contadorDesendente]){
        banderaEsPalindrome = false
    }
    contadorAsendente++
    contadorDesendente--
}
console.log(banderaEsPalindrome)