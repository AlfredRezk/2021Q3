/** @format */

function main(text) {


  text = text.split(/[!?,\s]+/g).filter(a=> a!=='').map(a=> a.toUpperCase()).join(', ')
  console.log(text)
}

main("Hi, how are you?");
