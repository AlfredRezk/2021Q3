/** @format */

function main(text, word) {

  while (text.includes(word)) {
    text = text.replace(word, censor(word));
  }
  console.log(text)

}

function censor(str) {
  return "*".repeat(str.length);
}

// function main(text, word) {
// 	let output = text.split(" ").map((w) => (w===word)?  "*".repeat(w.length) : w).join(" ");
  
//   console.log(output)
// }

main("A small sentence with some words", "small");
