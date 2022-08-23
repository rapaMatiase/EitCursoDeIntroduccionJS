/* 

Realizar un programa que;
1) Solicite un ingreso al usuario por medio de un PROMPT y lo guarde en una variable.
2) Utilizar la funcion TYPEOF para identificar el tipo del valor ingresado, y guardar el resultado de la funcion en una nueva variable.
3) Mostrar por pantalla el mensaje, "El ingreso <INGRESO_USUARIO> es del tipo <TIPO>".
4) Correr varias veces el progrmaa y probar con varios ingresos; "hola", 1232, true. 
4min 10.37
*/

//1
let ingresoUsuario = prompt("Ingrese un valor")
//2
let tipoDelIngreso = typeof(ingresoUsuario)
//3
console.log(` El ingreso ${ingresoUsuario} es del tipo ${tipoDelIngreso} `)
//4 
/* Conclusion
    El prompt sin importar que tipo de ingreso haga el usuario, lo convierte a un string. Spoiler, lo mismo nos va pasar con los ingresos por HTML. 
*/