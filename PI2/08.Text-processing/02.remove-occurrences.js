function main(word, text) { 

  // Method 1: text processing methods (replace)
  // create a variable to hold the text before removing the word from it;
  let old;   //undefine in the first loop  

  while (old !== text) { 
    // 1. copy the text before removing the word 
    old = text; 
    // 2. removing the word
    text = text.replace(word, '')
  }
  console.log(text)


  // Method: Text processing 2 
  // If the text still contain the word we searching for loop to remove it 
  //while (text.includes(word)) { 
  //  remove it 
  //  text = text.replace(word, '');
  //}
  //console.log(text);
}

main('ice', 'kicegiciceeb')