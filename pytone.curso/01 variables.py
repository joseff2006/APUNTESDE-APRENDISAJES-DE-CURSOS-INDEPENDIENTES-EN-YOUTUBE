nombre = "jose" 
edad = "20"
Altura = "1.75"
print (nombre + " tiene " + edad + " años y mide " + Altura)

# se utiliza el type para poder ver el tipod edato que tiene una varianble 

print (type(edad)) # tipo str       

edad = 20 

edad = edad  + 50

print (edad) # tipo int

# esa (f"") es una forma de concatenar variables y texto en python, se le llama f-string
print(f" {edad}  {Altura} {nombre}")

# esto a continiacion es para pedirle informacion al usuario  y guardarlo en una variable
escuela = input (" como se llama tu escuela ???")

print (f" Mi escuela es {escuela}")

# practica sencilla para evaluar lo aprendido.

print ("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \n Bienvenido al solicitador de prestamos \n ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
print ("Por favor ingrese los siguientes datos para poder solicitar su prestamo")
nombre = input ("Ingrese su nombre: ")

print (f"Hola {nombre} por favor ingrese su edad")
edad = input ("Ingrese su edad: ")

print (f" Excelnete {nombre} con la  la edad que nos acaba de confirmar {edad} podemos continuar con el proceso de solicitud de prestamo")

Salario = input ("Ingrese su salario mensual: ")

if Salario == 25000: 
    print (f"Excelente ¨{nombre} con le monto salarial ingresado usted cuenta con un ingreso apto para solicitar un prestamo por un monto de entre 50,000 y 100,000 pesos")

elif Salario == 15000:
    print (f"Excelente ¨{nombre} con le monto salarial ingresado usted cuenta con un ingreso apto para solicitar un prestamo por un monto de entre 20,000 y 50,000 pesos")

else:
    print (f"Lo sentimos {nombre} con le monto salarial ingresado usted no cuenta con un ingreso apto para solicitar un prestamo por un monto de entre 20,000 y 50,000 pesos")   
