function saludar(obj){
  let nombre = obj.nombre
  let edad = obj.edad

  if(obj.edad){
    console.log(`Hola ${nombre}, tienes ${edad} años`)
  }else{
    console.log(`Hola ${nombre}`)
  }
}

const pedro = { nombre: "Pedro", edad: 23 };
console.log(saludar(pedro));

const maria = { nombre: "Maria", edad: 35 };
console.log(saludar(maria));

const juan = { nombre: "Juan" };
console.log(saludar(juan));