/* 
Crear un programa que filtre todas las letras "h", "i", "j".

4min 12.40
*/

let texto = "Un equipo de investigación dirigido por la Universidad de Stanford desarrolló una nueva métrica denominada “edad del sueño” que esperan pueda ayudar a los médicos a predecir problemas de salud emergentes e incluso la mortalidad. La edad del sueño es una edad proyectada que se correlaciona con la salud de un individuo en función de su edad cronológica y la calidad del sueño."

let textoFiltrado = ""
for(let i = 0 ; i < texto.length ; i++){
    const caracter = texto[i]
    if(caracter != "h" && caracter != "j" && caracter != "i"){
        textoFiltrado = `${textoFiltrado}${caracter}`
    }
}
console.log(textoFiltrado)