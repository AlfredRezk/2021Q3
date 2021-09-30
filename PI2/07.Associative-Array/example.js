// function main(...c) {

//   console.log(a, b)
//   console.log(c)
// }

// main(1,2,3,4)


// let arr = [1, 2, 3, 4]

// let [firstElement, second, ...rest] = arr
// console.log(rest)



let arr = [1, 1, 1, 3, 4, 10, 60]

let found = arr.filter(el => el === 60) //[60]
console.log(found.length)