/* 
Mostrar los numeros pares entre el 1 y 1000.

1 2 3 4 5 6 7

Vi = 2
Vf = 1001
Vs = 2
2min 10.11
*/

for(let i = 2; i < 1001 ; i = i + 2){
    console.log(i)
}

// Se prodria hacer con un IF anidado en el FOR?

for(let i = 1 ; i < 1001 ; i = i + 1 ){
    if(i % 2 == 0){
        console.log(i)
    }
}