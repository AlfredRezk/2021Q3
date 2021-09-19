function main(inputArr) {

  for (let i = 0; i < inputArr.length/2; i++) {
    let j = inputArr.length - 1 - i

    // swap 2 elements 
  	let temp = inputArr[i];
		inputArr[i] = inputArr[j];
		inputArr[j] = temp;
  }

  console.log(inputArr.join(' '))
}




main(["a", "b", "c", "d", "e"]);


