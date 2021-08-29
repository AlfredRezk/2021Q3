function main(fav, books) {
  // Get the first book in the array
  let book = books.shift();

  while (book !== fav) {
    // print that the book is invalid
    console.log(`Invalid book: ${book}`);
    // get the next book 
    book = books.shift();
  }

  if (book === fav) {
    console.log('Book found!')
  }
}

main("Alice in Wonderland", ["Winnie the Pooh", "Alice in Wonderland"]);
