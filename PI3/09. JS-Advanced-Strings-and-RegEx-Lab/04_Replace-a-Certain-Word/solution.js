function solve() {
	// DOM Variables
	const word = document.getElementById("word").value;
	let arr = JSON.parse(document.getElementById("text").value);
	const result = document.getElementById("result");

  const wordToReplace = arr[0].split(" ")[2]; //"I love pROgRaMminG" => 'pROgRaMminG'
  const regex = new RegExp(wordToReplace, 'gi')
  arr = arr.map(el => `<p> ${el.replace(regex, word)}</p>`).join('');
  result.innerHTML = arr;
  
}