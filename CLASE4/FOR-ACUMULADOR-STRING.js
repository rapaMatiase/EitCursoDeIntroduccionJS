/* 
ACUMULADORES;
- Filtrar : quitar caracteres
- Remplazar : quitar un caracter y poner otro en su lugar
- Agregar : Agregar caracteres alrededor de otros.
*/


let texto = "Un equipo de investigación dirigido por la Universidad de Stanford desarrolló una nueva métrica denominada “edad del sueño” que esperan pueda ayudar a los médicos a predecir problemas de salud emergentes e incluso la mortalidad. La edad del sueño es una edad proyectada que se correlaciona con la salud de un individuo en función de su edad cronológica y la calidad del sueño."

//FILTRAR - Quitar las letras a y i
let textoFiltrado = "" // "" es el elemento neutro de la concadenacion
for(let i = 0 ; i < texto.length ; i++){
    if(texto[i] != "a" && texto[i] != "i"){
        textoFiltrado = `${textoFiltrado}${texto[i]}`
    }
}
console.log(textoFiltrado)

//REMPLAZO - Remplazar las a y i por emojis
let textorRemplazado = "" // "" es el elemento neutro de la concadenacion
for(let i = 0 ; i < texto.length ; i++){
    const caracter = texto[i]
    if(caracter != "a" && caracter != "i"){
        textorRemplazado = `${textorRemplazado}${caracter}`
    }else{
        textorRemplazado = `${textorRemplazado}😀`
    }
}
console.log(textorRemplazado)