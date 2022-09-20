

let acumualdor = 0 //VALOR NEUTRO PARA LA OPERACION A REALIZAR.
// suma y resta, es 0.
//Multiplicacion y divisicon, es 1.
//Concadenacion, es "".

//Acumulador de los valores 1 al 10
for(let i = 0 ; i < 11; i++){
    acumualdor = acumualdor + i
    console.log(`i:${i}, acumualdor:${acumualdor}`)
}

console.log(acumualdor)