/*
Clase 23 - Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=7277
*/

// if, else if, else

// if (si)

let age = 37

if (age == 37) {
    console.log("La edad es 37")
}

// else (si no)

let dia = 6

if (dia == 2) {
    console.log("elejiste el martes")
} else {
    console.log(" ese dia no exite ")
}

// else if (si no, si)

if (dia == 5) {
    console.log("el dia es jueves ")
} else if (dia > 5) {
    console.log(" es finde semana")
} else {
    console.log("ese dia no existe")
}

// Operador ternario

const message = dia == 37 ? "es un dia de la semana " : " ese no es el dia correcto"
console.log(message)

// switch

let day = 2
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"
}

console.log(dayName)