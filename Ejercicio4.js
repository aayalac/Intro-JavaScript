const añoActual = new Date().getFullYear()
let añoUsuario = parseInt(prompt('Ingresa tu año de nacimiento: '))

edad = añoActual - añoUsuario;

console.log('Tienes ' + edad + ' años');