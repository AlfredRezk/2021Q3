function main(arr) {
  
  let output = [];
  arr.forEach(row => {
    // output = output.concat(row)
    output = [...output, ...row];
  })

  // console.log(Math.max(...output))

  // Method 2
  output.sort((a, b) => a - b);
  console.log(output.pop())
}

main([
	[20, 50, 10],
	[8, 33, 145],
]);