function main(text) {

  let pattern = /[^,!\s?]+/g;

  // text = text.toUpperCase();
  let match = text.match(pattern);
  match = match.map(item => item.toUpperCase());
  console.log(match.join(', '))
  

}

main("Hi, how are you?");