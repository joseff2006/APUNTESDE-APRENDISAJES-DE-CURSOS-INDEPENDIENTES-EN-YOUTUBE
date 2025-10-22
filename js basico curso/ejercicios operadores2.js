/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let suma  = (10 + 4)
console.log(suma)

let resta = (20 - 4)
console.log(resta)

let multiplicacion =( 30*4)
console.log (multiplicacion)

let divicion = (40/4)
console.log (divicion)

let potensiacion = (50**4)
console.log (potensiacion)

let residuo = (60%4)
console.log (residuo)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let myvar1 = suma
console.log (myvar1)

let myVar2 = resta
console.log(resta)

let myvar3 = multiplicacion
console.log (multiplicacion)

let myVar4 =divicion
console.log(divicion)

let myVar5 = potensiacion
console.log(potensiacion)

let myVar6 = residuo
console.log (residuo)


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log (suma < resta)
console.log (!(suma>resta))
console.log (multiplicacion == 120)
console.log(!(resta === suma) )
console.log(residuo != multiplicacion)



// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log ("5 falsas ##############################")

console.log (residuo === suma)
console.log (!(resta >= residuo))
console.log (divicion === residuo)
console.log (!(suma < resta))
console.log (resta === potensiacion)

// 5. Utiliza el operador lógico and

console.log("oprador and #################################################")

console.log(resta != suma && multiplicacion < potensiacion )
console.log(multiplicacion >= multiplicacion && resta === potensiacion)

// 6. Utiliza el operador lógico or

console.log("operador or ############################################")

console.log (suma < resta || multiplicacion !=  suma)
console.log (potensiacion == suma || potensiacion != potensiacion)

// 7. Combina ambos operadores lógicos

console.log ("combinacion de opradores logicos##########################")

console.log (divicion > potensiacion && divicion === divicion || suma >= resta && multiplicacion >= multiplicacion)


// 8. Añade alguna negación

console.log ("negacion ##################################################")

console.log (multiplicacion != multiplicacion && suma != suma || suma === suma  && resta == resta)

// 9. Utiliza el operador ternario

console.log("operador ternerario #############################")

const Eres_hombre = false

Eres_hombre ? console.log("fuerzas bro"):console.log ("ruede mia ")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log("combinacion de operadores #########################################")

console.log (suma + resta ==multiplicacion    || resta - suma )