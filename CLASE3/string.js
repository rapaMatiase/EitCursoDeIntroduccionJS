/* 
Las variables STRING son inmutables.


*/


let string = "hola"
console.log(string)
//Esto esta OK
string = "Chau"
console.log(string)


//COMO HAGO PARA ACCEDER A UN CARACTER? POR LA POSICION PERO CONTADO DESDE EL 0 Y NO EL 1.
console.log(string[2])
//ESTO NO ES VALIDO
string[2] = "X"