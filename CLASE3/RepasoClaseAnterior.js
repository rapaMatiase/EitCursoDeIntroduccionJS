let numeroIngresado = prompt("Ingrese su edad")

let numeroConvertido = Number(numeroIngresado)

//isNaN() devuelve FALSE si el valor fue convertido exitosamente
//isNaN() devuelve TRUE si el valor no fue convertido exitosamente

//CONDICIONES LOGICAS
// - SIMPLES : 1 sola operacion de relacion (==, ===, !=, !==, >, <, >=, <=) que siempre devuelven un boolenao
// - COMPUESTA : 2 operacion de relacion por lo menos y una operacion logica tambien por lo menos.  

if(isNaN(numeroConvertido) == false){
    console.log("Urra!!! fue convertido exitosamente")
}else{
    console.log("WUWUW, eso no es un numero")
}