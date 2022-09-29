function capitalizar (string)
{
const fraseCap = string.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
  return fraseCap
}
console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"