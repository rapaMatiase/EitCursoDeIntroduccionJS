//Convertir un tipo String o Boolean a tipo Numerico

let variableTipoStringIdeal = "123"

/* FOMRA VIEJA */
let convercionVieja = parseInt(variableTipoStringIdeal)
let tipo = typeof(convercionVieja)
console.log(tipo)

/* FORMA NUEVA 1 - UTILIZAMOS ESTA EN ESTE CURSO */
let convercionNueva1 = Number(variableTipoStringIdeal)
tipo = typeof(convercionNueva1)
console.log(tipo)

/* FORMA NUEVA 2 - NO UTILIZAMOS ESTA FORMA*/
let convercionNueva2 = new Number(variableTipoStringIdeal)
tipo = typeof(convercionNueva2)
console.log(tipo)

/* 
Un objeto es un tipo de dato complejo que agrupa en memoria no solo informacion, si no tambien codigo. 

Cuando utilizo la palabra NEW con el NUMBER lo que le indico al motor de javascript no es creame una variable primitiva del tipo numerico, si no un objeto wrapper (Objetos relacionados a los tipos primitivos)
*/
