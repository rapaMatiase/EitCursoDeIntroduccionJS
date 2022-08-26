let array = [1,2,322,12,43,545]

//FILTRO : Filtrar todos los numeros menores de 20 (Se puede tambien entender como que solo quiero numeros mayores de 20 en el nuevo array).
let acumulador = []
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(20 < element){
        acumulador.push(element)
    }
}
console.log(acumulador)