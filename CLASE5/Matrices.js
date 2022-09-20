/* 

Una matriz en Javascript es un array de arrays. Donde el primer array contiene filas, y los segundos celdas.
*/

let matris = [
    [1,2,3],
    [1,3,2],
    [4,3,2]
]

//Matris de 3x3
console.log(matris)
console.table(matris)

/* Nos sirve para representar dos dimensiones. Tableros de juego (Ajedrez, sodoku, tateti), tables (de base de datos o de word), Grafos y digrafos (matrices de adyacencia o incidencia). */

let cubo = [
    [[1,2,3],[4,5,6,7],[8,9,0]],
    [[1,2,3],[4,5,6,7],[8,9,0]],
    [[1,2,3],[4,5,6,7],[8,9,0]],
]

//Si, obvio. 

/* ¿COMO ACCEDO A UNA POSICION EN LA MATRIS? */

console.log(matris[2][1]) //[FILA] [COLUMNA o CELDA]

//SIMPRE SE HABLA DE FILAS X COLUMNAS. 7X2, 9X4, 2X12

/* ¿COOMO RECORRO TODA LA MATRIS? */
for(let i = 0 ; i < matris.length ; i++){
    const fila = matris[i]
    for(let j = 0; j < fila.length ; j++){
        console.log(fila[j])
    }
}
/* IMPORTANCIA DEL MATRIS[I] */
matris = [
    [1,2,3,4,5],
    [1,],
    [4,3,2]
]
for(let i = 0 ; i < matris.length ; i++){ //FILAS
    //   const fila = matris[i]
   //    const cantidadDeElementosEnLaFila = matris[i].length
    for(let j = 0; j < matris.length ; j++){ //COLUMNAS
        console.log(matris[i][j])
    }
}
// SIN [i] en el segundo FOR, no recorro todas las columnas, solo hasta la misma cantidad de filas. Por ejemplo, esta matris tiene 3 filas, pero la primera fila tiene 5 columnas, sin el [i] solo muestra hasta el tercer elemento. La segunda fila solo tiene un elemento, por lo tanto te muestra dos undefind por querer leer fuera de esta. La tercera fila se recorre correctamente, porque tiene la misma cantidad de columnas que filas, pero es una coincidencia. 