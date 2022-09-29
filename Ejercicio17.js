do
{
  rNumber = Math.floor(Math.random() * 10);
  num = parseInt(prompt('Ingresa un numero entre 1 y 10:   ') )
  if (num <1)
    console.log('Error, el numero debe estar entre 1 y       10')
  if (num >10)
    console.log('Error, el numero debe estar entre 1 y       10')  
  if (num != rNumber)
    console.log('Lo siento, intenta nuevamente')
    console.log('El numero ganador es: ' + rNumber)
  if (num == rNumber)    
    console.log('Felicitaciones, ese era!')        
}
while(num != rNumber);