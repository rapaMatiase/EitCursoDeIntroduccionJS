let array = [1,2,3,4,true, "hola"]

//Que la primera posicion era el 0
//Que la ultima posicion es array.length - 1

//Si quiero poder acceder a cada elemento por separado
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element)
}

//Si quiero agregar un elemento a un array
array.push("NUEVO ELEMENTO AL FINAL")
array.shift("NUEVO ELEMENTO AL PRINCIPIO")

