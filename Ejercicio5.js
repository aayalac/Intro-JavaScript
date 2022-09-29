console.log('Programa para calcular peso')

let peso = parseInt(prompt('Ingresa tu peso en KG: '))
let estatura = parseInt(prompt('Ingresa tu estatura en Mts: '))

indiceMasa = peso / Math.pow(estatura, 2)

console.log('Tu IMC es de: ' + indiceMasa)