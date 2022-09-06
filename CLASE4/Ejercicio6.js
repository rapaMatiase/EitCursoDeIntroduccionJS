/* 
Realizar un programa que muestre los numeros del 1 al 100 en consola, pero;
- Cuando el numero sea multiplo de 3, imprimir la palabra "fizz"
- Cuando el numeor sea multiplo de 5, imprimir la palabra "buzz"
- Cuando el numero sea multiplo de 3 y 5, imprimir la palabra "fizzbuzz"
- Si no es multiplo de ninguno, mostrar el numero. 

3min 11.07

*/

for(let i = 1 ; i < 101 ; i = i +1 ){
    if((i % 3) === 0 && (i % 5) === 0){
        console.log("%cfizzbuzz", "font-size: 50px; color : red;")
    }else if((i % 3) === 0){
        console.log("fizz")
    }else if((i % 5) === 0){
        console.log("buzz")
    }else{
        console.log(i)
    }
}