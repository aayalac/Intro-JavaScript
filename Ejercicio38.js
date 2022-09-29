const descifrar = (frase, objeto) => {
  const arr = []
  const newFrase = frase.split("")
  newFrase.forEach((item) => {
    if (objeto[item]) return arr.push(objeto[item])
    arr.push(item)
  })
  return arr
}
console.log(descifrar("h0l4", { 0: "o", 4: "a" })); // "hola"
console.log(descifrar("pyrmizo", { y: "e", z: "s" })); // "permiso"
console.log(descifrar("igual", { h: "n" })); // "igual"