/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let suma = (3 + 3)
let resta = (6 - 5)
let mult = (5 * 5)
let potencia = (6 ** 2)
let division = ( 50 / 10 )
let modulo = (40 % 23)

console.log(suma)
console.log(resta)
console.log(mult)
console.log(potencia)
console.log(division)
console.log(modulo)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let varia = (50)
console.log(varia)

console.log(varia += 30)

let su = (3)
console.log (su + 34)

let re= (6)
console.log (re - 23)

let mu = (5)
console.log (mu * 20)

let po = (6)
console.log(po ** 3)

let di = ( 50 )
console.log (di / 5)

let mo = (40 )
console.log ( mo % 1)




// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log (su <= re)
console.log (re >= su)
console.log (su === su)
console.log (mo != re)
console.log (mu !== re)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log (su === re)
console.log (re + su === 8)
console.log (su != su)
console.log (mo == re)
console.log (mu * re === 0)



// 5. Utiliza el operador lógico and

console.log( su === su && re === re)
console.log( su !== su && re > re)

// 6. Utiliza el operador lógico or

console.log( su === su ||  re !== re)


// 7. Combina ambos operadores lógicos

console.log( su === su && re === re  ||  su !== su && re !== re )


// 8. Añade alguna negación



// 9. Utiliza el operador ternario

const compejidad = false

compejidad? console.log("si lo es") : console.log ("no lo es")



// 10. Combina operadores aritméticos, de comparáción y lógicas

let residuo = (25 + 20)
console.log (residuo)

let sac = (5*8)
console.log (sac)

let minuta = (sac - residuo == -5 && residuo > 40 || sac + residuo == 3 )
minuta? console.log ("la operacion es correcta ") : console.log ("rueda de ahi mio ")