/* 
No podiamos tener dos variables con el mismo nombre en un mismo contexto.

VAR, LET, CONST.

LET y CONST es buena practica.

CONTEXTO GLOBAL : Incluye todo lo que esta en la pagina.
CONTEXTO DE FUNCION : Que el realciona a una funcion
CONTEXTO DE BLOQUE : Que relacionado a una estructura de control.

*/

//CONTEXTO GLOBAL.
var nombre = "Matias"
console.log(nombre) // Matias
for(let i = 1; i < 4; i++){
    //CONTEXTO DE EJECUCION DEL FOR
    var nombre = "Galo"
    console.log(nombre) // Galo
}
console.log(nombre) // Galo. Incorrecto, Matias
