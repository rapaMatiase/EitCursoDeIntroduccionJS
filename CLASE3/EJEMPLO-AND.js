let numeroIngresado = prompt("Ingrese su edad")
let numeroConvertido = Number(numeroIngresado)

//Ademas de ver que el numero fue convertido, quiero controlar que no fuera menor que 0.

//EL && y || tiene mas jerarquia que el not !
if(!isNaN(numeroConvertido) && 0 < numeroConvertido){
    console.log("Urra!!! fue convertido exitosamente")
}else{
    console.log("WUWUW, eso no es un numero")
}
