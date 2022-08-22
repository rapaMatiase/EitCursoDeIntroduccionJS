// ALERT
//Muestra un texto en una ventana desplegable (modal) y el usuario no puedo continuar navegando hasta que le de aceptar al boton.
alert("Hola, te estoy molestando?")
// CONFIRM

//Muestra un texto en una ventana desplegable y el usuario puede aceptar o no como respuesta al texto mostrado. Si hace click en aceptar, devuelve true. Si hace click en cancelar, devuelve false.
let respuestaUsuario = confirm("Acepta las cookies?")
console.log(` El usuario respondio ${respuestaUsuario}`)

//PROMPT

//Muestra un texto en una ventana desplegable y el usuario tiene un cuadro de texto para responder.
let respuestaRandomUsuario = prompt("Ingrese algun dato")
console.log(respuestaRandomUsuario)