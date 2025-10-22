/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//este es un comentario de una sola línea

// 2. Escribe un comentario en varias líneas

/*comentario
de dos 
o mas 
lineas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let ismael1 = "jose" //string

let numero = 100 //number

let ismael2 = false //boolean

let nulo = null //null

let indefinido = undefined //undefined

let simbolo = Symbol("simbolo") //symbol

let tusabes = BigInt(123456789012345678901234567890) //bigint


// 4. Imprime por consola el valor de todas las variables

console.log(ismael1)
console.log(numero)
console.log(ismael2)
console.log(nulo)
console.log(indefinido)
console.log(simbolo)
console.log(tusabes)

// 5. Imprime por consola el tipo de todas las variables

console.log (typeof ismael1)
console.log (typeof numero)
console.log (typeof ismael2)
console.log (typeof nulo)
console.log (typeof indefinido)
console.log (typeof simbolo)
console.log (typeof tusabes)


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

ismael1 = "el mejor"

console.log (ismael1)

numero = "5555"

console.log (numero)

ismael2 = true
console.log (ismael2)

nulo = true
console.log (nulo)

indefinido = "mmg"

console.log (indefinido)

simbolo = Symbol("otro simbolo")

console.log (simbolo)

tusabes = BigInt(987654321098765432109876543210)

console.log (tusabes)   


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

ismael1 = 12345

console.log (ismael1)

numero = false

console.log (numero)

ismael2 = "hola" 
console.log (ismael2)

nulo = Symbol("nuevo simbolo")
console.log (nulo)

indefinido = BigInt(111222333444555666777888999000)
console.log (indefinido)

simbolo = null

console.log (simbolo)

tusabes = undefined

console.log (tusabes)


// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const cantante = ("alan walker")
console.log (cantante)  // string

const boleta = ("2025")
console.log (boleta) //number

const acceso = true
console.log (acceso) // boolean

const denegado = null
console.log(denegado) // null

const noencontrado = undefined
console.log (noencontrado) // undefinited

const logo = Symbol ("@")
console.log (logo) //symbol

const boletafull = BigInt (233233445454443436346)
console.log (boletafull) //Bigint


// 9. A continuación, modifica los valores de las constantes

cantante = ("pablo alboran")
console.log (cantante)

boleta =("2026")
console.log (boleta)

acceso = false
console.log(acceso)

denegado = ("hola")
console.log (denegado)

noencontrado = Symbol ("$")
console.log (noencontrado)

logo = (23432)
console.log (logo)

boletafull = ("3555045953") 
console.log (boletafull)

// no se va a jecutar este codigo a menos que borre las cosas de el ejercicio 9 ya que estan modificando una cosntante y eeso da error al ejecutar .

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse