/* 
NaN es palabra reservada que indica que en una sentencia con una sintaxis correcta y una semantica que indicaba una operacion con resultado del tipo numerico, no se puedo realizar la misma correctamente.

NaN -> No allow Number

*/

//Por ejemplo, tratar de convertir un texto con letras en numero
let ingresoUsuario = prompt("Ingrese un valor")
let convertido = Number(ingresoUsuario)
console.log(convertido)

//CURIOSIDAD, NaN es un numero.
let tipoDelNaN = typeof(NaN)
console.log(tipoDelNaN)

/* Por lo tanto, puedo utilizarlo para operar pero todas las operaciones que haga van a tener como resultado NaN.    */