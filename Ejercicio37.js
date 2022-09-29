function buscarProducto(arregloProductos, numero) {
  for (producto of arregloProductos) {
    if (producto.id == numero) {
      return producto
    }
  }
  return null
}

// código de prueba
let productos = [
  { id: 1, nombre: "A" },
  { id: 2, nombre: "B" },
];
console.log(buscarProducto(productos, 1)); // { id: 1, nombre: "A" }

productos = [
  { id: 1, nombre: "A" },
  { id: 2, nombre: "B" },
];
console.log(buscarProducto(productos, 566)); // null