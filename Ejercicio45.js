function productosBaratos(arr) {
  return arr.filter(obj => obj.precio >= 5 && obj.precio <= 10)
    .map(obj => obj.nombre);
}

let prods = [
{ nombre: "Arroz", precio: 5 },
{ nombre: "Pan", precio: 3 },
{ nombre: "Tomate", precio: 8 },
{ nombre: "Leche", precio: 15 }
];  

console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]