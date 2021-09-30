let arr = [1,1,2,2,3,3]

let setArr = [...new Set(arr)]
console.log(setArr);


let arr2 = [10,20,30, ...arr]