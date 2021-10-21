function main(arr) {

  // get the text 
  let text = arr[0];
  // pattern letters, digits and _
  let regex = /\w+/g;

  // create empty object 
  let words = {};

  // all words matching the pattern 
  let wordsArr = text.match(regex);
  
  // Iterate through the words array to find how many times it occurs.
  wordsArr.forEach(word => {
    // filter the word and return array of all matching elements 
    let match = wordsArr.filter(w => w === word)
    // get the length of the match array
    words[word] = match.length;
  })

  console.log(JSON.stringify(words))
}

main(['Far too slow, you\'re far too slow.'])