
function main(n, p) {
	let result = 1;

	//[1-5] or [0-4]
  for (let i = 0; i <p; i++) {
    result *= n;
  }

  console.log(result)
}


main(2, 5);