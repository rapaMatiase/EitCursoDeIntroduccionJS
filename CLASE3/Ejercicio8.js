/* 
RETO BUZZJUZZ

Mostrar en pantalla los numeros del 1 al 100, pero;
- Si el numero es multiplo de 3, mostrar la palabra buzz
- Si el numero es multiplo de 5, mostrar la plabra juzz
- Si el numero es multiplo de 15, mostrar la palabra buzzjuzz.

Ejemplo
1
2
buzz
3
juzz
...
14
buzzjuzz
16
4min 10.26

*/

for(let i = 1 ; i < 101 ; i = i + 1){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("buzzjuzz")
    }else if(i % 3 == 0){
        console.log("buzz")
    }else if( i % 5 == 0){
        console.log("juzz")
    }else{
        console.log(i)
    }
}