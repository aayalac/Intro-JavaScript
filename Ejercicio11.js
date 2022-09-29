num = parseInt(prompt('Ingrese un numero: '))
if (num % 3 == 0 && num % 5 == 0)
  console.log('BingBong')
else
  if (num % 3 == 0)
    console.log('Bing')
else
  if (num % 5 == 0)
  console.log('Bong')
else
  console.log(num)