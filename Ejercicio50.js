function max(arr){
    let mayor = arr[0]
    for(numero of arr)
    {
      if (numero > mayor) mayor = numero
    }
    return mayor
  }
  
  // código de prueba
  console.log(max([1, 2, 3, 4])) // 4
  console.log(max([63, 85, 39, 24, 3])) // 85