const phrase1 = prompt('Ingrese la frase 1:')
const phrase2 = prompt('Ingrese la frase 2:')
let arrMatch = [];
for (let i = 0; i < phrase1.length; i++) {
  if (phrase2.includes(phrase1[i])) {
    arrMatch.push(phrase1[i]);
  }
}
arrMatch = arrMatch.filter((value, i) => arrMatch.indexOf(value) === i);
if (arrMatch.length) {
  console.log("Los caracteres en común son:", arrMatch.join(","));
} else {
  console.log("No se encontraron caracteres en común");
}