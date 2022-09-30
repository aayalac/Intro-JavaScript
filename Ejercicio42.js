const paresi = function(va){
    let res = va % 2
    return (res===0)
}
const pares = function (arr){
    return arr.filter(paresi)
}

console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]

console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]

console.log(pares([7, 921, 43, 9649])) // []