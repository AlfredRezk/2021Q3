function main(numbers) {
	// The first number in the array
	let num = numbers.shift();

	let min = num;
	let max = num;

  while (num !== "END") {
    if (num > max) {
      max = num
    }

    if (num < min) {
      min = num;
    }
    // Get the next number in array
    num = numbers.shift();
  }

  console.log(`Min number: ${min}`);
  console.log(`Max number: ${max}`);
}

main([10, 20, 304, 0, 50, "END"]);
