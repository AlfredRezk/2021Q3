// 75 105 John Adams 110 103 115 Roger 108
// 97 110 100
function solve() {
	// get DOM Variables
  const result = document.getElementById("result");
  const input = document.getElementById("text");

  let numArr = input.value.match(/[0-9]+/g);          //[75,105,110,103,115,108,97, 110, 100]
  let wordsArr = input.value.match(/[a-z@!#$%^]+/gi); //['john', 'Adams', 'Roger']


  let nums = []
  numArr.forEach(el => {
      nums.push(String.fromCharCode(el))
  });
  // numArr = numArr.map(el => String.fromCharCode(el))   //['k', 'i', 'n', 'g', 's', 'l', 'a', 'n', 'd']
  const num = `<p>${nums.join('')}</p>`

  wordsArr = wordsArr.map(word => word.split('').map(ch => ch.charCodeAt()))



  const words = wordsArr.map(arr => `<p> ${arr.join(' ')}</p>`).join('');

  result.innerHTML = words+num
}
