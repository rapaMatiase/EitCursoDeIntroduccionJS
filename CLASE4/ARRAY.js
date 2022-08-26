
let array = [1,2,3,"hola", "chua", true, 2]
console.log(array)
array[3] = "ACA NO PASO NADA"
console.log(array)
array[4] = 2131

console.log(array)
for (let i = 0; i < array.length; i++) {
    const element = array[i]
    console.log(element)
}