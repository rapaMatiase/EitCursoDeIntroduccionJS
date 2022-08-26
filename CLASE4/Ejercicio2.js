/* Dado el siguiente texto, crear un texto donde se agregue DETRAS de cada una de las siguientes letras "a", "e", "i" uno de los siguientes caracteres 🤬, X, 3 respectivamente.
3 min 9.18
*/

let texto = "Giuseppe era el gerente, Benito se encargaba de la distribución, Franco de la parte administrativa y Umberto creó la máquina que mezclaba y empaquetaba: juntos construyeron el imperio que lleva su apellido, Panini. Los inicios en un puesto de diarios de Módena, la visión para comprar figuritas sin vender de una empresa de Milán y la trayectoria de una compañía que en el Mundial de 2018 recaudó mil millones de dólares"

let agregar = ""
for(let i = 0; i < texto.length ; i++){
    const letra = texto[i]
    if(letra != "a" && letra != "e" && letra != "i"){
        agregar = `${agregar}${letra}`
    }else if(letra == "a"){
        agregar = `${agregar}${letra}🤬`
    }else if(letra == "e"){
        agregar = `${agregar}${letra}X`
    }else if(letra == "i"){
        agregar = `${agregar}${letra}3`
    }
}
console.log(agregar)