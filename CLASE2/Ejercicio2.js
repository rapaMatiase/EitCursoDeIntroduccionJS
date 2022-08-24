/* 
Realizar un programa que;
1) Utilice un PROMPT para solicitar al usuario el ingreso de un valor y guardarlo en una variable.
2) Utilizar la funcion TYPEOF para determinar el tipo del valor ingresado en el paso 1, y guardar el resultado en una variable nueva.
3) Imprimir por pantalla el mensaja "El ingreso <VALOR_INGRESADO> es del tipo <TIPO_INGRESADO>".
4) Probrar ingresar distintos tipos de valores; "hola", 123, true. El resultado ¿Es el esperado?
4min 9.25
*/

//1
let valorIngresado = prompt("Ingrese un valor")
//2
let tipoDelValorIngresado = typeof(valorIngresado)
//3
console.log(`El ingreso ${valorIngresado} es del tipo ${tipoDelValorIngresado}`)
//4
/* El resultado siempre es un string, sin importar el valor ingresado por el usuario. */