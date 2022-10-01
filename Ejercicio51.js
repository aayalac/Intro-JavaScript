const max = (...arr) => arr.reduce(function(preValue,curValue){
    if(preValue > curValue){
      return preValue
    }else{
      return curValue
    }
})

// código de prueba
console.log(max([1, 2, 3, 4])) // 4
console.log(max([63, 85, 39, 24, 3])) // 85