// Variables *********************************************************

// variables es  la posibilidad de asignar valor o referencia a un objeto

/* las variables son :*/ 

/*var : fue la primera forma que tuvo js para declaras variables 
pero tiene un problema si posteriomente le asignas otro valor a 
esa variable se terminaran ejecutando las dos en vez de eliminar
 la otra y asumir el nuevo valor como muestra el ejemplo esta no
 es recomendable usarla */

var helloWorld55 = " ismael"
console.log(helloWorld55)

helloWorld55 = "mmg"
console.log(helloWorld55)

/*let pasa casi lo mismo que var lo unico que no se puede 
acceder a ella si haberla declarado es decir que si en la linea 1 pongo
console.log con la variable y luego le asigno de nuevo con let el valor no se 
ejecutara pero con var si lo hubese hecho*/

let nm = "hola ismael"
console.log(nm)


/*const sin embargoa diferencia de las otras 2 const tiene un valor
constante es decir que si luego de declarar la con const pretendo darle 
otro valor la ejecusion me dara error ya que el valor que le dimos con const
a esa variable es constante a menos que se edite el const, pero las referencias
si permite modificarlas*/ 

const is = "hola "
console.log(is)



