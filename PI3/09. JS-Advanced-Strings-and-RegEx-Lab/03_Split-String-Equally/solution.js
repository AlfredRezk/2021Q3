function solve() {
	const inputText = document.getElementById("text");
	const inputNumber = document.getElementById("number");
	const result = document.getElementById("result");

  let input = inputText.value;
	// Get the text length
  const inputLength = input.length; //RandomInput1234 => 15
  // Get the remainder 
  const remainder = inputLength % inputNumber.value  // 15 %2 => 1

  if (remainder) {
    input = input + input.slice(0, (inputNumber.value - remainder))
  }

  let num = Number(inputNumber.value)

  let times = `.{${num}}`  //=> .{5}
  let regex = new RegExp(times, 'gi')
  
  let match = input.match(regex);
  result.innerText = match.join(' ')

}


