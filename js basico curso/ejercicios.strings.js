// concatena 2 cadenas de texto

    let edad = (23)
console.log (edad)

let nombre = ("ismael")
console.log(nombre)

let pasion = ("sofware y ciberseguridad")
console.log(pasion)

console.log ("hola a todos mi nombre es " + nombre + " tengo " + edad + " anos de edad, mi pasion es estudiar sobre  " + pasion )

let bienvenidamsj = ("hola " + nombre  + " gracias por darme los datos  nos encargarermos de briendarte cursos y informaciones de las areas " + pasion + " para que tengas una experiencias significativa  BIENVENIDO " )
console.log (bienvenidamsj)

// muestra la longitud de una cadena de texto

console.log ( "La opsion que introducciste sobre las areadas que quieres aprender tienen  " + pasion.length  + " caracteres")


// muestra el primer y ultimo caracter de una cadena de texto

const primero= pasion [0]
const segundo = pasion[pasion.length -1]

console.log (primero)
console.log (segundo)

const primer1 = pasion.at (0)
const segundo1 = pasion.at(-1)

console.log(primer1)
console.log(segundo1)

// convierte un string de texto a mayusculas y minusculas

let mayusculas = ("ISMAEL")
console.log (mayusculas.toLowerCase())

let minusculas = ("ismael")
console.log(minusculas.toUpperCase()) 

// crea una cadena de texto en vari lineas

let derechos = ("  este menjaje fue escrito por jiff")
let mensaje = (`esto es un mensaje 
    de varias lineas y que pude ser expresado`)

    console.log(mensaje + derechos )


// interpola el valor de una variable en un string 

let lenguaje = ("javascript")

console.log (" hoy es viernes y estoy practicando un video del leguaje " + lenguaje)

//reemplaza todos los espacios en blanco por guiones

let remplazo = ("the weekend die for you ")

console.log (remplazo.replace(" " , "_"))
console.log(remplazo.replaceAll(" ", "_"));

// comprueba si una cadena de texto contiene una palabra o frase especifica

console.log (remplazo.includes("weekend"))

// comprueba si dos strings tienen la misma longitud

let texto1 = ("cinco letras")
let texto2 = ("cinco letras")

if (texto1.length === texto2.length )
    console.log ("si tienen el mismo  numero de caracteres")
else console.log ("esa mierda no se parecen ninguna") 


