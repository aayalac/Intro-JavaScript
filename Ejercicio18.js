let nombre2 = prompt('Ingresa nombre: ')
let nombre1 = prompt('Ingresa otro nombre: ')

const nombres = ['Pedro', 'Pablo', 'Maria', 'Juan', 'Diana']

nombres.push(nombre2) // Coloca el nombre al final del arreglo
nombres.splice(2,1,nombre1) // Reemplaza el nombre de la 3era posicion por la variable nombre1

for (let i = 0; i < nombres.length; i++) { // Recorre el arreglo
    console.log(nombres[i]);
  }