const multiplicar =function(val, num){
  return val.map(function(item){
    return item*num
  })
}

console.log(multiplicar([1, 2, 3], 2)) // [2, 4, 6]
console.log(multiplicar([7, 4], 3)) // [21, 12]
console.log(multiplicar([], 10)) // []