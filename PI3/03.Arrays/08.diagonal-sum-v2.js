/** @format */

function main(inputArr) {
	let output = [];
  let mainSum = 0;
  let secSum =0;

	// [3,5,17,-1,7,14,1,-8,89]
  // [20, 40, 10, 60]
	inputArr.forEach((arr) => {
		output = output.concat(arr);
  });
  
  // Main diag.
  for (let i = 0; i < output.length; i += inputArr[0].length+1) {
    mainSum += output[i];
  }
  
  // Sec diag.
  for (let i = inputArr[0].length -1 ; i < output.length-1 ; i += inputArr[0].length-1) {

    secSum += output[i];
  }

  console.log(mainSum, secSum)
}


main([
	[3, 5, 17],
	[-1, 7, 14],
	[1, -8, 89],
]);
