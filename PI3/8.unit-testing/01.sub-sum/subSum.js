//The function takes three parameters - the first is an array , the second is the start index and the third is the end index. 
// Both indexes are inclusive.
// Have in mind that the array elements may not be of type Number and cast everything . 

//If the first element is not an array, return NaN
//If the start index is less than zero, consider its value to be a zero
//If the end index is outside the bounds of the array, assume it points to the last index of the array

function main(arr, startIndex, endIndex) {

  if (arr.constructor !== Array) return NaN;
  if (startIndex < 0) startIndex = 0;
  if (endIndex > arr.length - 1) endIndex = arr.length - 1;

  let nums = arr.splice(startIndex, endIndex + 1);
  let result = nums.reduce((sum, num) => isNaN(num) ? NaN : sum + num, 0);
  return result
  
}

module.exports = main;


console.log(main([10, 20, 30, 40, 50, 60], 3, 300))
console.log(main([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(main([10, 'twenty', 30, 40], 0, 2))
console.log(main([], 1, 2))
console.log(main('text', 0, 2))