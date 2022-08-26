/* 
LOS ACUMULADORES CON STRING
- filtrar
- remplazar 
- agregar
*/

let texto = "Giuseppe era el gerente, Benito se encargaba de la distribución, Franco de la parte administrativa y Umberto creó la máquina que mezclaba y empaquetaba: juntos construyeron el imperio que lleva su apellido, Panini. Los inicios en un puesto de diarios de Módena, la visión para comprar figuritas sin vender de una empresa de Milán y la trayectoria de una compañía que en el Mundial de 2018 recaudó mil millones de dólares"

//FILTRAR : Todas las letras "a"

let filtrado = ""
// "" es el elemento neutro para la concadenacion
for(let i = 0; i < texto.length ; i++){
    const letra = texto[i]
    if(letra != "a"){
        filtrado = `${filtrado}${letra}`
    }
}


//REMPLAZO : remplazar todas las letras "a" por 🥭

let remplazo = ""
// "" es el elemento neutro para la concadenacion
for(let i = 0; i < texto.length ; i++){
    const letra = texto[i]
    if(letra != "a"){
        remplazo = `${remplazo}${letra}`
    }else{
        remplazo = `${remplazo}🥭`
    }
}
console.log(remplazo)


//AGREGAR : Agregar delante de todas las letras "a" un 🥭

let agregar = ""
// "" es el elemento neutro para la concadenacion
for(let i = 0; i < texto.length ; i++){
    const letra = texto[i]
    if(letra != "a"){
        agregar = `${agregar}${letra}`
    }else{
        agregar = `${agregar}🥭${letra}`
    }
}
console.log(agregar)

