function main(nums) {


  while (nums.length > 1) {
    nums = condense(nums);
    
  }


  console.log(nums.join(' '))

}


function condense(arr) {
  // Empty array to hold condensed elements
  let condensed = [];

  // Loop through each array item and add it to its adjacent element 
  // then store it in the condensed array 
  for (let i = 0; i < arr.length - 1; i++) {
    condensed.push( arr[i]+ arr[i+1])
  }
  // condensed array
  return condensed
}





main([2, 10, 3]);

