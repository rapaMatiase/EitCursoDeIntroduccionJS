/* 
Tres tipos de SCOPE;
- El GLOBAL que lo aberca todo el programa y es unico.
- El FUNCION que se crea con cada ejecucion de una funcion.
- El BLOQUE que se crea uno para cada ejecucion de un condicion (if, if-else, ...) o ciclo.

El scope es el area donde vive las variables, y determina a que variables podemos acceder.
*/

let nombre = "Matias"
console.log(nombre) //Matias
for(let i = 1 ; i < 3 ; i++){
    let nombre = "Julio"
    console.log(nombre) //Julio
}
console.log(nombre) //Matias


//Ocuerre es HOISTING
// var nombre = "Matias"
// console.log(nombre) //Matias
// for(let i = 1 ; i < 3 ; i++){
//     var nombre = "Julio"
//     console.log(nombre) //Julio
// }
// console.log(nombre) //Julio


// VAR, LET y COSNT