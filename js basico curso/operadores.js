// operadores : son lo que se utiliza para relacionar y realizar operaciones con los datos 

// operadores aritmeticos

console.log(5 + 10); // suma
console.log(10 - 5); // resta
console.log(3 * 2); // multiplicacion
console.log(10 / 2); // division
console.log(10 % 3); // modulo o resto de la division
console.log(2 ** 3); // potencia

// operadores aritmeticos con variables

let a = 5;
let b = 10;

console.log(a + b); // suma
console.log(a - b); // resta
console.log(a * b); // multiplicacion
console.log(a / b); // division
console.log(a % b); // resto de la division
console.log(a ** b); // potencia

a++ // incremento en 1
console.log(a);

b-- // decremento en 1
console.log(b);

// operadores de asignacion

let myVar = 2; // asignacion

console.log(myVar);

myVar += 2; /* suma y asignacion : le agrega valor que se ponga despues del += y se
              le suma al valor que tenia desde el principio que es lo mismo que 
              myVar = myVar + 2 */

console.log(myVar);

// se puede hace rlos mismo con demas operaciones solo poniendo el simbolo de la operacion y el signo =


// operadores de comparacion : sirven para comparar valores y devuelven un booleano (true o false)

console .log(a>b); // mayor que
console .log(a<b); // menor que
console .log(a>=b); // mayor o igual que
console .log(a<=b); // menor o igual que
console .log(a==b); // igualdad de valor
console .log ( a==9); // igualdad de valor
console .log(a=='5'); // igualdad de valor
console .log(a===b); // igualdad de valor y tipo de dato
console .log(a===6); // igualdad de valor y tipo de dato
console .log(a==="6"); // igualdad de valor y tipo de dato
console .log(a!=b); // diferente de valor
console .log(a!==b); // diferente de valor y tipo de dato

console.log(0 ==false ); // true porque 0 es igual a false
console.log(0 === ""); // false porque 0 es un numero y "" es un string

//truthy values : son valores que se consideran verdaderos en un contexto

//  todos los numeros positivos y negativos menos dell 0
//  todos los strings que no esten vacios


// falsy values : son valores que se consideran falsos en un contexto

// 0
// "" (string vacio)
// null
// undefined
//0n
// NaN (not a number)


// operadores logicos : se utilizan para combinar o invertir valores booleanos

//and (&&) : devuelve true si ambos operandos son true
console.log(a > b && b > 0); // true
console.log(a > b && b < 0); // false

//or (||) : devuelve true si al menos uno de los operandos es true
console.log(a > b || b > 0); // true
console.log(a > b || b < 0); // false

//mescla de operadores
console.log((a > b || b > 0) && a > 0); // true
console.log((a > b || b < 0) && a > 0); // false

//not (!) : invierte el valor del operando
console.log(!(a > b)); // true
console.log(!(a < b)); // false


// operador ternario : es una forma corta de escribir una condicion if-else

    const isreining = true;

    isreining ? console.log("lleva paraguas") : console.log("no lleva paraguas");