//Los STRING son estructuras ordenas no mutables.

let texto = "Hola como va tood?"

//Como accedo a un caracter de un string
console.log(texto[3])
texto[3] = "X"
console.log(texto)
//CUIDADO! Entre corhetes va siempre un numero o una variabel numerica.
//CUIDADO! En programacion la priemra posicion es el 0.

//arquitectura de computadoras de Kiroga 
//Arquitectuar de computadoras de Stalling 10th
//El capitulo de sistema de ecuaciones posicionales numericas.


//Vi = 0
//Vf = estructura.length Porque este devuelve la cantidad elementos contado como una persona (Vf +1)
for(let i = 0 ; i < texto.length ; i++){
    console.log(texto[i])
}

