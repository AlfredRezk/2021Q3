function main(arr, func) {
  
  let output = arr.reduce((acc, el) => {
    acc.push(func.apply(this, [el]))
    return acc
  }, [])

  return output;
}


let nums = [1,2,3,4,5];
console.log(main(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]