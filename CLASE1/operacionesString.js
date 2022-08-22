let textoA = `Hola`
let textoB = `Como va?`

//Concadenacion - La yuxtaposcion de los caracteres de un string a continuacion de los caracteres de otro string. En criollo pegar uno a continuacion del otro.

//SI O SI, hay que utilizar ` el acento grave
let resultadoConcadenacionModerna = `${textoA}, ${textoB}` 
console.log(resultadoConcadenacionModerna)

//Concadenacion anterior
let resultadoConcadenacionVieja = textoA + ", " + textoB
// El principal problema de la concadenacion vieja es que ambigua la sintaxis, podria interpretarce como una suma, y no una concadenacion. 