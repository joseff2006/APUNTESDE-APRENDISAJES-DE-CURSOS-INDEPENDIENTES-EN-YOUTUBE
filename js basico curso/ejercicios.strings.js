// concatena 2 cadenas de texto

let mi_nombre = "ismael"
let age = 19

console.log ("hola, mi nombre es " + mi_nombre + " y tengo " + age + " años") // esto es una forma de concatenar strings con el operador +



// muestra la longitud de una cadena de texto

let mensaje = "hola manoso"

console.log ( mensaje.length)

// muestra el primer y ultimo caracter de una cadena de texto

let prueba = "practicare siempre par aser el mejor"
console.log (prueba[0]) // primer caracter
console.log (prueba[prueba.length -1]) // ultimo caracter

// convierte un string de texto a mayusculas y minusculas

let covertir = "convertire este string a mayusculas y minusculas"
console.log (covertir.toUpperCase()) // mayusculas
console.log (covertir.toLowerCase()) // minusculas

// crea una cadena de texto en vari lineas

let multi_linea = `hola
mi nombre es ismael
el mejor`
console.log (multi_linea)

// interpola el valor de una variable en un string 

let nombre = "ismael"
let edad = 19
console.log (`hola me llamo ${nombre} y tengo ${edad} años`)

//reemplaza todos los espacios en blanco por guiones

let texto = "reemplazare los espacios en blanco por guiones"
console.log (texto.replace(/ /g, "-")) // el primer argumento es una expresion regular que busca todos los espacios en blanco y el segundo argumento es el caracter por el que se reemplazaran los espacios en blanco

// comprueba si una cadena de texto contiene una palabra o frase especifica

let frase = "hola me llamo ismael"
console.log (frase.includes("ismael")) // devuelve true si la palabra o frase existe en la cadena de texto

// comprueba si dos strings son iguales 

let string1 = "hola"
let string2 = "hola"
console.log (string1 === string2) // devuelve true si los dos strings son iguales

// comprueba si dos strings tienen la misma longitud

let string3 = "hola"
let string4 = "mundo"
console.log (string3.length === string4.length) // devuelve true si los dos strings tienen la misma longitud
