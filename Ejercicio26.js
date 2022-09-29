const frase = prompt("Ingresa una frase: ")

const fraseCap = frase.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());

console.log(fraseCap)