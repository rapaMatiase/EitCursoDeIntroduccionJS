/* 
function NOMBRE(parametros){
    //Segmento de codigo
    return VALOR_A_DEVOLVER
}

El nombre de la funcion cumple las mismas reglas que el de las variables pero suele convetener un verbo asociado a la accion que hace. Por ejemplo, calcular, mostrar, determinar, etc.
*/

function sumar(a, b){
    let resultado = a + b
    return resultado
    console.log("HOLA LLEGUE HASTA ACA") //esta linea nunca se va ejecutar por estar abajo de un return
}

/* Si una funcion devuelve un valor, el RETURN deberia ir siempre al final porque una vez que llega a esa palabra, se termina la funcion. */

function restar(a, b){
    let resultado = a - b
    return resultado
}

//INVOCO LA FUNCION
let resultadoDeFuncion = sumar(4, 5)