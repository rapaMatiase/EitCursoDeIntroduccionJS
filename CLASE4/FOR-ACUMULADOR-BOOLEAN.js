/* Determines que si tiene la letra "a".

¿Que es mas facil?
- Encontrar una "a" en la palabra
- Demostrar que ninguna letra en la palabra es "a".

Voy a buscar una letra "a", pero tengo que comenzar suponiendo lo contrario. Supongo que no tiene letras "a" hasta demostrar lo contrario.

*/
let palabra = "quetal"

let banderaTieneLetrasA = false // Tiene letras a? No

for(let i = 0 ; i < palabra.length ; i++){
    const letra = palabra[i]
    if(letra == "a"){
        banderaTieneLetrasA = true
    }
}

console.log(banderaTieneLetrasA)