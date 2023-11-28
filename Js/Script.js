// Exercise one
document.write("<h3>ELEMENTOS DE UN ARRAY</h3>")
const numbers = [1, 2, 3, 4, 5]

document.write("El array en su primera posición es " +numbers[0]+"<br>" )

document.write("El array en su primera posición dos es " +numbers[2]+"<br>" )

//Usar variables para acceder a los elementos de un array
let index =  4

document.write("La variable index corresponde a: " + numbers[index]+"<br>")

// Modificar los elementos de un array

numbers[0] = 10
numbers[2] = 30

document.write("El array modificado es: " +numbers)
// longitud de un array
document.write("<h3>LONGITUD DE UN ARRAY</h3>")

let frutas = ["manzana", "pera", "platanos", "fresa"]

document.write("El array de frutas es: " + frutas +"<br>")
document.write("El array de frutas tiene una longitud de: " +frutas.length+"<br>")
