function main(text, word) { 

  // Method 1 : Text processing
  let counter = 0;

  while (text.includes(` ${word}`)) { 
    text = text.replace(` ${word}`, '');
    counter++;
  }
  console.log(counter)
  
  // Method 2: Array filter
  
  // let words = text.split(' ');
  // let found = words.filter(w => w == word);   
  // console.log(found.length)

  // Alternative
  // console.log(text.split(' ').filter(w=> w==word).length)
}

main("This is a word and it also is a sentence", "is");