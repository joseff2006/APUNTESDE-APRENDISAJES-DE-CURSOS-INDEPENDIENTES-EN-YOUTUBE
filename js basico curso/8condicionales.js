//  Evalúa una condición y ejecuta el código solo si es verdadera. Verifica si una persona es mayor de edadCondicional IF


let edad = 20;

if (edad >= 18) 
  console.log("Eres mayor de edad");

//Condicional IF...ELSE Permite ejecutar un bloque si es verdadero y otro si es falso.
if (edad >= 18) 

  console.log("Eres mayor de edad");
 else 
    
    console.log("Eres menor de edad");

// Condicional IF...ELSE IF...ELSE Sirve para evaluar varias condiciones en orden.
// Clasifica una nota numérica

let nota = 85;

if (nota >= 90) 
  console.log("A");
 else if (nota >= 80) 
  console.log("B");
else if (nota >= 70) 
  console.log("C");
 else 
  console.log("F");

 //Condicional SWITCH Ideal cuando comparas un mismo valor contra varias opciones.

 // Muestra el día de la semana según un número

let dia = 2;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Día no válido");
}


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let age = 17

if (age <= 15)
{
    console.log("eres un niño")
}

if (age >= 15 && age <= 18)
console.log("eres un adolescente")

if (age >= 18 && age <= 25) {
    console.log("eres un joven")
}



let respuesta = "si"

if (respuesta === "si") {
    console.log ("Nos vemos manana")
}

if (respuesta === "No")
{
    console.log("Ruede mia")

}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let present = "no"

if (present === "si") {
    console.log ("registrate en la pagina wed")
}

else if (present === "no") {
    console.log("muevalo de ahi")
}

let comida = "ensalada"

switch (comida) {
    case "hamburguesa":
        console.log("comida rapida")
        break;
        case "ensalada":
            console.log ("comida saludable")
}

// Pedimos al usuario que escriba un número del 1 al 7
let dia = Number(prompt("Escribe un número del 1 al 7 para saber el día de la semana:"));

// Usamos switch para evaluar el valor que escribió el usuario
switch (dia) {
    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miércoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    case 6:
        console.log("Sábado");
        break;

    case 7:
        console.log("Domingo");
        break;

    default:
        console.log("Número no válido. Debe ser del 1 al 7.");
}