/* Realizar un progrmaa que muestre los numeros pares entre 0 y 1000. El 0 no tiene paridad y no se puede utilizar IF. 
2 min 10.37
*/

for(let i = 2 ; i < 1001 ; i = i + 2){
    console.log(i)
}

//Con IF

for(let i = 1 ; i < 1001 ; i = i + 1){
    if(i % 2 === 0 ){
        console.log(i)
    }
}

//Es mas ineficiente. 