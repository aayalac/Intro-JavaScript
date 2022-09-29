console.log('Programa para calcular peso')
console.log('---------------------------------')

let peso = parseFloat(prompt('Ingresa tu peso en KG: '))
let estatura = parseFloat(prompt('Ingresa tu estatura en Mts: '))

let indiceMasa = peso / Math.pow(estatura, 2)

if (indiceMasa <=18.5)
  console.log('Bajo de peso, BMI: ' + indiceMasa)
if (indiceMasa >=18.6 && indiceMasa <=24.9)
  console.log('Normal, BMI: ' + indiceMasa)
if (indiceMasa >= 25 && indiceMasa <=29.9)
  console.log('Sobrepeso, BMI: ' + indiceMasa)
if (indiceMasa >= 30)
  console.log('Obeso, BMI: ' + indiceMasa)