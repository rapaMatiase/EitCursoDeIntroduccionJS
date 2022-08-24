/* CONVERTIR UN TIPO STRING O BOOLEAN A NUMERO */

/* Suponiendo que le string esta solo conformado por caracteres numericos. */
let texto = "123"

/* 1 _ ABSOLETA [NO LO UTILIZAMOS]*/
let valorConvertido = parseInt(texto)
let tipo = typeof(valorConvertido)
console.log(`1) El tipo es ${tipo}`)

/* 2 _ MODERANA 1 [UTILIZAMOS ESTE OPCION]*/
valorConvertido = Number(texto)
tipo = typeof(valorConvertido)
console.log(`2) El tipo es ${tipo}`)

/* 3 _ MODERANA 2 */
valorConvertido = new Number(texto)
tipo = typeof(valorConvertido)
console.log(`3) El tipo es ${tipo}`)
/* Un OBJETO es un tipo de variable, donde en memoria no solo se guarda un dato, si no tambien codigo asociado a ese dato.
En este caso, lo que se crea es un objeto wrappet, que son los objetos relacionados a los tipos primitivos. */