const pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar","squash","piano"]  
}

console.log(pedro.edad)
pedro.estatura = 1.8
delete pedro.activo
let arKeys = Object.keys(pedro)

for(let key of arKeys){
  console.log(`${key}: ${pedro[key]}`)
}