/* Dado el siguiente texto, imprimir en pantalla solo las letras en posiciones pares. 
3 min 11.36
*/

let texto = "Giuseppe era el gerente, Benito se encargaba de la distribución, Franco de la parte administrativa y Umberto creó la máquina que mezclaba y empaquetaba: juntos construyeron el imperio que lleva su apellido, Panini. Los inicios en un puesto de diarios de Módena, la visión para comprar figuritas sin vender de una empresa de Milán y la trayectoria de una compañía que en el Mundial de 2018 recaudó mil millones de dólares"

for(let i = 0; i < texto.length ; i=i+2){
    console.log(texto[i])
}