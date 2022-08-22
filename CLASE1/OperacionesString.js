let textoA = "Hola como va?"
let textoB = "Todo bien"

//CONCADENACION
// Es la yutapoxicion de los caracteres de un string a continuacion de otro.

//VIEJA
let concadenacionVieja = textoA + " " + textoB
console.log(concadenacionVieja)
//NUEVA
let concadenacionNueva = `${textoA} ${textoB}`
console.log(concadenacionNueva)

/* El mayor inconveniente con la vieja concadenacion es la ambiguedad al escribir codigo. Si los nombres de las variables no son suficientemente declarativos puedo pensar que es una suma de numeros. El otro probleam es que si resulta haber dos tipos de variables distintos (numero y string) el resutlado es una concadenacion.  */