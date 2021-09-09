// words : array 
function main(words) {

// Get the first word in the array
  let word = words.shift()

  // variables
  let wordSum = 0;
  let max = -Infinity;
  let winnerWord = '';

  while (word !== 'STOP' && word !==undefined) {
   
    // inner loop 
    for (let i = 0; i < word.length; i++) {
      wordSum +=word.charCodeAt(i)
    }

    if (wordSum > max) {
      max = wordSum;
      winnerWord = word;
    }
    // reset the wordSum 
    wordSum = 0;

    // read the next word in the array
    word = words.shift();
  }

  // Output the winner word
  console.log(`Winner is ${winnerWord} - ${max}`);

}


main(["House", "Dog", "Destination", 'STOP']);

