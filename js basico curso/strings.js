const ismael = "2"
console.log(ismael)

// concatenando strings o cadenas de texto

let myname = "Ismael"
let greeting = "Hola, mi nombre es " + myname + ", el mejor "//con esto s pueden sumar dos strings para formar uno nuevo 
console.log (greeting)
console.log ( typeof myname)

//optener la longitud de el string 

console.log (greeting.length)

// acceso a caracteres individuales

console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[2])
console.log(greeting[3])
console.log(greeting[4])

// metodos comunes de strings

console.log (greeting.toUpperCase()) // convierte todo a mayusculas
console.log (greeting.toLowerCase()) // convierte todo a minusculas
console.log (greeting.indexOf("Ismael")) // devuelve la posicion del string que se busca
console.log (greeting.indexOf("el"))
console.log (greeting.indexOf("mejor"))
console.log (greeting.indexOf("feo")) // devuelve -1 si no encuentra el string o es decire que no existe en la cadena 
console.log (greeting.includes("Ismael")) // devuelve true o false si encuentra o no el string
console.log (greeting.includes("feo"))
console.log (greeting.slice(0,5)) // extrae una parte del string desde la posicion 0 hasta la 5 sin incluirla
console.log (greeting.slice(7,9))
console.log (greeting.replace("Ismael", "Juan")) // reemplaza una parte del string por otra

// template literals (plantillas de texto)

let age = 30
let message = `Hola, mi nombre es ${myname} y mi edad es  ${age}, el mejor ` // se usan las comillas invertidas ` ` y se pueden incluir variables con ${}
console.log (message)

// multi-line strings (cadenas de texto multilínea)

let multi_linea = `Hola,
mi nombre es Ismael,
el mejor`
console.log (multi_linea)

