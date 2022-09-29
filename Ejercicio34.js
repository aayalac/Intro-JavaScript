function promedio(arreglo) {
  i = 0, suma = 0, ArrayLen = arreglo.length;
  while (i < ArrayLen) {
    suma = suma + arreglo[i++];
  }
  return suma / ArrayLen;
}

console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200