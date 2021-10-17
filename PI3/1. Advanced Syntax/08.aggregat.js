function main(arr) {
  // Solve for sum
  console.log(solve(arr, 0, (a, b) => a + b));
  // solve for sum the inverse 
  console.log(solve(arr, 0, (a, b) => a + 1 / b).toFixed(4));
  // solve for concatenation 
  console.log(solve(arr, '', (a, b) => a + b));
  
}


function solve(nums, initVal, func) {
  // initialize my result with the initial value 
  let result = initVal;

  // loop through the array numbers
  nums.forEach(num => {
    result= func(result, num)
  })

  // return the result
  return result;
}

main([1, 2, 3]);