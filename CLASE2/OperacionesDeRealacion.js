/*Las operaciones de relacion se peude realizar entre dos valores de cualquier tipo, y el resultado es un booleano que indica si la relacion se cumple o no.*/

let menorIgualQue = 2 <= 3 //true
console.log(menorIgualQue)

let mayorIgualQue = 2 >= 3 //false
console.log(mayorIgualQue)

let menorQue = 2 < 2 //false
console.log(menorQue)

let mayorQue = 3 > 2 //true
console.log(mayorQue)

let igualSinTipo = (3 == "3") //true
console.log(igualSinTipo)

let igualConTipo = (3 === "3") //false
console.log(igualConTipo)

let desigualdadSinTipo = (3 != "3") //false
console.log(desigualdadSinTipo)

let desigualdadConTipo = (3 !== "3") //true
console.log(desigualdadConTipo)


