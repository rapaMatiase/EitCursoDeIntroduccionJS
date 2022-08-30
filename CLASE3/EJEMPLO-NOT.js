let numeroIngresado = prompt("Ingrese un numeor")
let numeroConvertido = Number(numeroIngresado)

if(!isNaN(numeroConvertido) == true){ //!isNaN es como decir isNotNaN
    console.log("Exitosa")
}else{
    console.log("Error")
}