function main() {
  let string = '';

  return {
    append: (str) => string += str,
    print: () => console.log(string),
    removeEnd: (n) => string = string.substring(0, string.length-n),
    removeStart: (n)=> string = string.substring(n)
  }
  
}



let secondZeroTest = main();
secondZeroTest.append("123");
secondZeroTest.append("45");
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
