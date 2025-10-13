// Tipos de Datos 

/* los tipos de datos se dividen en varios pero entre
estos estan los primitivos que son 7 */ 


//Cadenas de texto (strings) y se pueden usar con varios tipos de comilla

let name = "ismael"
let alias = `the best`
let email ='jose@gmail.com'


//numeros (numbers)

let age = 19 //entero
let height = 1.77 //decimal


//boleanos (boolean)

let isgay = true
let isman = false


//indefinidos (undefined) son paras variables que han sido declaradas pero no inicializadas 


let indefinidos
console.log(indefinidos)


// nulos (null) valores que posiblemente esperemos como respuesta pero no tienen ningun valor,o variables que dejamos sin valor para luego asignarle


let respuesta2 = null


// symbol se utiliza para identificar valores unicos he inmutables 


let mysymbol = Symbol("mysymbol")


//bigint se usa para agregar valores numericos demasiado elevados para un number


let mybigint = BigInt(234343458495845938459848448) // forma 1 de escribirlo

let mybigint2 = 234343458495845938459848448n // forma 2 de escribirlo


// mostrar los tipo d edatos con el typeof

console.log (typeof mybigint2)

