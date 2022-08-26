matris = [ //FILAS
    [1,2,3], //columnas
    [4,5,6,4], //columnas
    [7,8]  //columnas
]

console.log(matris)

//Si recorrro la matris como si fuera un array
for(let i = 0 ; i < matris.length ; i++){
    const row = matris[i]
    console.log(row)
}
//ESTE SOLO RECORRE FILAS

//Si recorrro la matris como si fuera un array
// matris.length = CANTIDAD DE FILAS QUE TIENE LA MATRIZ

/* 
SIEMRPE SE HABLA DE FILAS X COLUMNAS
3X4 son tres filas y cuatro columnas.
3x2 son tres filas y dos columnas.
Esto viene del algebra.
*/