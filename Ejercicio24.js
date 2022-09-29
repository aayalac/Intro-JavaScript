let frase = prompt("Escribe una frase: ")
let count = 0
for (i = 0; i < frase.length; i++)  
  if (frase.charAt(i) == "a" || frase.charAt(i) == "A")
    count = count + 1
console.log("La frase tiene", count, "caracteres", "a")